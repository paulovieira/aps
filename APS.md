# DEMO APS

## database
  - create the database: 
      createdb aps_150428

  - run the scripts + initial data

  - update the configuration files: database name

  - add the bgri shapes (make sure the name of the table is lowercase):

### VULNERABILITY INDEX

shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/cirac_vul_bgri_FVI_N.shp \
cirac_vul_bgri_fvi_n \
 |  psql --dbname=aps_150504


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/Percentile-75/cirac_vul_bgri_FVI_75.shp \
cirac_vul_bgri_fvi_75 \
 |  psql --dbname=aps_150504


 

### COMBINED VULNERABILITY INDEX


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-Vulnerabilidade-Combinado/cirac_vul_bgri_cfvi.shp \
cirac_vul_bgri_cfvi \
 |  psql --dbname=aps_150504


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-Vulnerabilidade-Combinado/Percentile-75/cirac_vul_bgri_cfvi75.shp \
cirac_vul_bgri_cfvi75 \
 |  psql --dbname=aps_150504




### EXPOSURE

shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Exposicao/Map-SHP/BGRI/cirac_vul_bgri_E.shp \
cirac_vul_bgri_e \
 |  psql --dbname=aps_150504


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Exposicao/Map-SHP/BGRI/Percentile-75/cirac_vul_bgri_E75.shp \
cirac_vul_bgri_e75 \
 |  psql --dbname=aps_150504




### PHYSICAL SUSCEPTIBILITY


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Susceptibilidade-Fisica/Map-SHP/BGRI/cirac_vul_bgri_SF.shp \
cirac_vul_bgri_sf \
 |  psql --dbname=aps_150504


shp2pgsql -D -I -s 4326 \
outputs/mapas/vulnerabilidade/Susceptibilidade-Fisica/Map-SHP/BGRI/Percentile-75/cirac_vul_bgri_SF75.shp \
cirac_vul_bgri_sf75 \
 |  psql --dbname=aps_150504





## serve the tiles

in a separate directory, clone tilestream and start the tile server

    mkdir $HOME/mapbox
    cd $HOME/mapbox
    git clone https://github.com/mapbox/tilestream
    sudo npm install
    ./index.js start --tiles=... --tilePort=8001

In this case:

    ./index.js start --tiles=/home/pvieira/mbtiles --tilePort=8001


NOTE: with tilestream running, tiles will be available from 

    http://localhost:8001/v2/MBTILES_FILENAME/{z}/{x}/{y}.png

where "MBTILES_FILENAME" is the name of the mbtiles file

To access the tiles from the outside we have to configure nginx properly (a rewrite rule). That is, a request to

    http://clima.dev/tiles/v2/MBTILES_FILENAME/{z}/{x}/{y}.png 

should be proxyed to

    http://localhost:8001/v2/MBTILES_FILENAME/{z}/{x}/{y}.png

## start the app with pm2

start the main app:

export NODE_ENV=dev
pm2 start index.js --name "cirac.fc.ul.pt"


start the tile server (we have to pass the arguments after "--"):

pm2 start index.js --name "mbtiles" -- --tiles=/home/pvieira/mbtiles --tilePort=8001


