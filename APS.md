# DEMO APS

## database
  - create the database: 
      createdb aps_150428

  - run the scripts + initial data

  - update the configuration files: database name

  - add the bgri shapes (make sure the name of the table is lowercase):

shp2pgsql -D -I -s 4326 BGRI/Indice-de-vulnerabilidade/cirac_vul_bgri_FVI_N.shp cirac_vul_bgri_fvi_n |  psql --dbname=aps_150504

shp2pgsql -D -I -s 4326 BGRI/Indice-de-vulnerabilidade/Percentile-75/cirac_vul_bgri_FVI_75.shp cirac_vul_bgri_fvi_75 |  psql --dbname=aps_150504

shp2pgsql -D -I -s 4326 BGRI/Indice-de-Vulnerabilidade-Combinado/cirac_vul_bgri_cfvi.shp cirac_vul_bgri_cfvi |  psql --dbname=aps_150504

shp2pgsql -D -I -s 4326 BGRI/Indice-de-Vulnerabilidade-Combinado/Percentile-75/cirac_vul_bgri_cfvi75.shp cirac_vul_bgri_cfvi75 |  psql --dbname=aps_150504

## serve the tiles

in a separate directory, clone tilestream and start the tile server

    git clone https://github.com/mapbox/tilestream
    sudo npm install
    ./index.js start --tiles=... --tilePort=8001

In this case:

    ./index.js start --tiles=/home/pvieira/mbtiles --tilePort=8001





NOTE: tiles will be available from 

    http://localhost:8001/v2/MBTILES_FILENAME/{z}/{x}/{y}.png

where "MBTILES_FILENAME" is the name of the mbtiles file

We have to configure nginx (rewrite rule) to access the tiles from the outside with a pretty url. That is, a request to

    http://clima.dev/tiles/v2/MBTILES_FILENAME/{z}/{x}/{y}.png 

should be obtained from

    http://localhost:8001/v2/MBTILES_FILENAME/{z}/{x}/{y}.png


pm2 start index.js --name "cirac.fc.ul.pt"
