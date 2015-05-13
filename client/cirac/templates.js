(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\nAre you sure you want to delete file # ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "?\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit file #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n    <form>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-files-tags\">Tags</label>\n            <input type=\"text\" id=\"js-edit-files-tags\" class=\"form-control\" name=\"edit-files-tags\" value=\"";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tags"),", "), env.autoesc);
output += "\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-name\">Name</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.autoesc);
output += "\" disabled>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Path</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logicalPath"), env.autoesc);
output += "\" disabled>\n        </div>\n        <div class=\"form-group\">\n            <label>id</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "\" disabled>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Uploaded at</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "uploadedAt"), env.autoesc);
output += "\" disabled>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Owner</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"lastName", env.autoesc), env.autoesc);
output += "\" disabled>\n        </div>\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary js-modal-save\">Gravar</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancelar</button>\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-new-shape-fields.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\n\t\t<div class=\"form-group\">\n\t\t    <label for=\"js-new-shape-desc-pt\">Description (portuguese)</label>\n\t\t    <input type=\"text\" id=\"js-new-shape-desc-pt\" class=\"form-control\" name=\"description[pt]\" >\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t    <label for=\"js-new-shape-desc-en\">Description (english)</label>\n\t\t    <input type=\"text\" id=\"js-new-shape-desc-en\" class=\"form-control\" name=\"description[en]\" >\n\t\t</div>\n\n\t</div>\n</div>\n\n<div class=\"row\">\n\n\t<div class=\"col-sm-6\">\n        <div class=\"form-group\">\n            <label for=\"js-new-shape-srid\">SRID (projection identifier)</label>\n            <input type=\"text\" id=\"js-new-shape-srid\" class=\"form-control\" name=\"srid\" value=\"4326\">\n        </div>\n\t</div>\n";
output += "\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-new.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" style=\"padding-top: 10px;\">\n\n        <h3 class=\"text-center\">Upload de novo ficheiro</h4>\n\n<!--         <form method=\"post\" action=\"/api/files\" enctype=\"multipart/form-data\"> -->\n\t\t<form enctype=\"multipart/form-data\">\n\n\t\t\t <div class=\"form-group\">\n                <label for=\"new_file_tags\">Tags (separar com vírgulas)</label>\n                <input type=\"text\" id=\"new_file_tags\" class=\"form-control\" name=\"tags\">\n\n                <label for=\"new_file\" style=\"margin-top: 20px;\">Choose file</label>\n\t\t\t\t<input id=\"new_file\" name=\"new_file\" type=\"file\" multiple=false class=\"file\">\n\t\t\t</div>\n\n            <hr>\n\n            <div class=\"row\" style=\"margin-top: 20px;\">\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <label for=\"js-is-shape\">Is shape file</label>\n                        <select id=\"js-is-shape\" class=\"form-control\">\n                            <option value=\"false\" selected>No</option>\n                            <option value=\"true\">Yes</option>\n                        </select>\n                    </div>\n                </div>\n                <div id=\"shape-fields-region\" class=\"col-sm-9\">\n                </div>\n            </div>\n        </form>\n\n\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logicalPath"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tags"),", "), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "uploadedAt"), env.autoesc);
output += "\n</td>\n";
output += "\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-tab.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" class=\"active\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"files-all\">Todos os ficheiros</a>\n    </li>\n    <li role=\"presentation\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"files-new\">Novo ficheiro</a>\n    </li>\n</ul>\n\n<div id=\"files-region\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["files/templates/files-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n            \n                <th style=\"width: 5%\">id</th>\n                <th style=\"width: 23%\">Name</th>\n                <th style=\"width: 20%\">Path</th>\n                <th style=\"width: 20%\">Tags</th>\n                <th style=\"width: 18%\">Uploaded At</th>\n";
output += "\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["main-layout/templates/main-layout.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div id=\"main-right-region\">\n</div>\n\n<div class=\"row\" style=\"padding-top: 20px;\">\n\n    <div class=\"col-sm-0\" id=\"main-left-region\">\n    \n    </div>\n\n    <div class=\"col-sm-12\" id=\"main-right-regionx\">\n    </div>\n\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["main-menu-left/templates/main-menu-left.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t<button class=\"btn btn-info btn-block btn-pressure btn-sensitive\"><span style=\"font-size: 170%\">Gestão de utilizadores</span></button>\n\t</div>\n\n\t<div class=\"col-sm-6 col-sm-offset-3\" style=\"margin-top: 15px\">\n\t\t<button class=\"btn btn-info btn-block  btn-pressure btn-sensitive\"><span style=\"font-size: 170%\">Os meus mapas</span></button>\n\t</div>\n\n\t<div class=\"col-sm-6 col-sm-offset-3\" style=\"margin-top: 15px\">\n\t\t<button class=\"btn btn-info btn-block  btn-pressure btn-sensitive\"><span style=\"font-size: 170%\">Estatísticas</span></button>\n\t</div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/main-control.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div id=\"menu-container\">\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n</div>\n\n\n<div style=\"padding: 0px 0px;\" id=\"control-main-region\">\n</div>\n\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/map.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div id=\"map\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/my-maps.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\n        <form enctype=\"multipart/form-data\">\n\n";
output += "\n            <div class=\"form-group\">\n                <label for=\"new_file\" style=\"margin-top: 20px;\">Choose file</label>\n                <input id=\"new_file\" name=\"new_file\" type=\"file\" multiple=false class=\"filex\" ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "activeMapIsCirac") == false?"disabled":""), env.autoesc);
output += ">\n            </div>\n        </form>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/point-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "description"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "value"), env.autoesc);
output += "\n</td>\n\n<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lat"), env.autoesc);
output += "</td>\n\n<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lon"), env.autoesc);
output += "</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/points-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"text-right\" style=\"margin: 15px 10px;\">\n    <button class=\"btn btn-primary\" id=\"new-upload\">Reset map</button>\n</div>\n \n<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n                <th style=\"width: 45%\">Description</th>\n                <th style=\"width: 30%\">Vulnerability</th>\n                <th style=\"width: 12%\">Lat</th>\n                <th style=\"width: 12%\">Lon</th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n</div>\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/tab-menu.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" id=\"tile-switcher\" class=";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "activeTabId") == "tile-switcher"?"active":""), env.autoesc);
output += "><a href=\"#\">Base layers</a></li>\n    <li role=\"presentation\" id=\"my-maps\" class=";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "activeTabId") == "my-maps"?"active":""), env.autoesc);
output += "><a href=\"#\">My maps</a></li>\n</ul>\n<div id=\"tab-content-region\"></div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/tile-switcher.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form class=\"form-horizontal\">\n\n    <div class=\"tile-group-title\">Street maps</div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-mapquest\" value=\"MapQuestOpen.OSM\"> Mapquest Open\n        </label>\n    </div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-here-streets\" value=\"HERE.normalDayGrey\"> HERE Maps\n        </label>\n    </div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-here-satellite\" value=\"HERE.satelliteDay\"> HERE Satellite\n        </label>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" id=\"tiles-bgri-borders\" value=\"BGRIBordersOnly\"> show BGRI borders\n        </label>\n    </div>\n    <hr>\n\n\n\n    <div class=\"tile-group-title\">Flood Vulnerability Index</div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-fvi-mode\" value=\"cirac_vul_bgri_FVI_N\"> Flood Vulnerability Index by BGRI (mode)\n        </label>\n    </div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-fvi-p75\" value=\"cirac_vul_bgri_FVI_75\"> Flood Vulnerability Index by BGRI (75 percentile)\n        </label>\n    </div>\n    <hr>\n\n\n    \n    <div class=\"tile-group-title\">Combined Flood Vulnerability Index</div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-fvi-mode\" value=\"cirac_vul_bgri_cfvi\"> Combined Flood Vulnerability Index by BGRI (mode)\n        </label>\n    </div>\n    <div class=\"radio\">\n        <label>\n            <input type=\"radio\" name=\"base-tiles\" id=\"tiles-fvi-p75\" value=\"cirac_vul_bgri_cfvi75\"> Combined Flood Vulnerability Index by BGRI (75 percentile)\n        </label>\n    </div>\n</form>\n<hr>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/controls-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\n\n\t<p>Are you sure you want to delete this control?</p>\n";
output += "\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/controls-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit control #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n\n    <form>\n\n        <div class=\"form-group\">\n            <label for=\"js-select-period\">Select the period</label>\n            <select id=\"js-select-period\" name=\"period\" class=\"form-control\">\n                <option value=\"none\"      ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "period") == "none"?"selected":""), env.autoesc);
output += "      >None</option>\n                <option value=\"reference\" ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "period") == "reference"?"selected":""), env.autoesc);
output += " >Reference</option>\n                <option value=\"short\"     ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "period") == "short"?"selected":""), env.autoesc);
output += "     >Short</option>\n                <option value=\"medium\"    ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "period") == "medium"?"selected":""), env.autoesc);
output += "    >Medium</option>\n                <option value=\"long\"      ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "period") == "long"?"selected":""), env.autoesc);
output += "      >Long</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"js-select-play-btn\">Show play button in this control (<span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span>)</label>\n            <select id=\"js-select-play-btn\" name=\"showPlayButton\" class=\"form-control\">\n                <option value=\"false\" ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "showPlayButton") == false?"selected":""), env.autoesc);
output += " >No</option>\n                <option value=\"true\"  ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "showPlayButton") == true?"selected":""), env.autoesc);
output += " >Yes</option>\n            </select>\n        </div>\n\n\n        <h4>Data columns</h4>\n\n        <p>Choose the columns to be used for this control</p>\n\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "selectedShapes");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("shapeObj", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n        <strong>Shape #";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index", env.autoesc), env.autoesc);
output += "</strong> (code: ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"code", env.autoesc), env.autoesc);
output += ")\n    \n        <div class=\"xtable-responsive\">\n            <table class=\"table table-condensedx table-hover table-dashboard\">\n\n                <thead>\n                    <tr>\n                        <th style=\"width: 10%\"></th>\n                        <th style=\"width: 30%\">Column name</th>\n                        <th style=\"width: 30%\">Column type</th>\n                        <th style=\"width: 30%\">Public name</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"shapeColumnsData", env.autoesc);
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("column", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                        <tr class=\"js-shape-row\">\n\n                            <td>\n                                <input type=\"checkbox\" name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "[";
output += runtime.suppressValue(runtime.memberLookup((t_8),"column_number", env.autoesc), env.autoesc);
output += "][isSelected]\" ";
output += runtime.suppressValue((runtime.memberLookup((t_8),"isSelected", env.autoesc) == true?"checked":""), env.autoesc);
output += " >\n                            </td>\n\n                            <td class=\"xjs-file-id\">\n                                ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"column_name", env.autoesc), env.autoesc);
output += "\n                            </td>\n\n                            <td>\n                                ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"data_type", env.autoesc), env.autoesc);
output += "\n                            </td>\n                            \n                            <td>\n                                <input type=\"text\" name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "[";
output += runtime.suppressValue(runtime.memberLookup((t_8),"column_number", env.autoesc), env.autoesc);
output += "][publicName]\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"publicName", env.autoesc), env.autoesc);
output += "\">\n                            </td>\n\n                        </tr>\n                    ";
;
}
}
frame = frame.pop();
output += "\n                </tbody>\n\n            </table>\n        </div>\n\n        <hr>\n\n        ";
;
}
}
frame = frame.pop();
output += "\n\n    </form>\n\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-info js-modal-apply\">Apply</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-close\">Close</button>  \n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/controls-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<td>\n\tControl #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "\n</td>\n\n";
output += "\n\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/controls-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n            \n                <th style=\"width: 50%\"></th>\n\n";
output += "\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n\n\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\n\n\t<p>Are you sure you want to delete this map?</p>\n\n\t<div class=\"form-group\" style=\"margin-top: 20px;\">\n\t    <label >Title (english)</label>\n\t    <input class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title")),"en", env.autoesc), env.autoesc);
output += "\" disabled>\n\t</div>\n\t<div class=\"form-group\">\n\t    <label >Title (portuguese)</label>\n\t    <input class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title")),"pt", env.autoesc), env.autoesc);
output += "\" disabled>\n\t</div>\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit map #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n\n\n    <form>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-map-title-pt\">Title (português)</label>\n            <input id=\"js-edit-map-title-pt\" class=\"form-control\" name=\"title[pt]\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title")),"pt", env.autoesc), env.autoesc);
output += "\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"js-edit-map-title-en\">Title (english)</label>\n            <input id=\"js-edit-map-title-en\" class=\"form-control\" name=\"title[en]\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title")),"en", env.autoesc), env.autoesc);
output += "\">\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n\n                <div class=\"form-group\">\n                    <label for=\"js-edit-map-category\">Map category</label>\n\n                    <select id=\"js-edit-map-category\" name=\"categoryId\" class=\"form-control\">\n\n                    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "mapCategories");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("obj", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                        <option value=";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue((runtime.memberLookup((t_4),"id", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "categoryId")?"selected":""), env.autoesc);
output += ">\n                            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"contents", env.autoesc)),"en", env.autoesc), env.autoesc);
output += "\n                        </option>\n                    ";
;
}
}
frame = frame.pop();
output += "\n                    \n                    </select>\n                </div>\n                \n            </div>\n            <div class=\"col-sm-6\">\n              \n                <label>Code</label>\n                <input class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "code"), env.autoesc);
output += "\" disabled>\n\n            </div>\n        </div>\n\n\n\n        <hr>\n\n        <h4>Selected shapes (data source)</h4>\n\n        <div class=\"xtable-responsive\">\n            <table class=\"table table-stripedx table-hover table-condensed table-dashboard\">\n\n                <thead>\n                    <tr>\n                        <th style=\"width: 5%\"></th>\n                        <th style=\"width: 15%\">Shape id</th>\n                        <th style=\"width: 40%\">Shape code</th>\n                        <th style=\"width: 15%\">Shape srid</th>\n                        <th style=\"width: 25%\">Owner</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    ";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "allShapes");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("obj", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                        <tr class=\"js-shape-row\">\n                            <td><input type=\"checkbox\" name=\"selectedShapes[";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "]\" ";
output += runtime.suppressValue((runtime.memberLookup((t_8),"isSelected", env.autoesc) == true?"checked":""), env.autoesc);
output += "></td>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "</td>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"code", env.autoesc), env.autoesc);
output += "</td>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"srid", env.autoesc), env.autoesc);
output += "</td>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"ownerData", env.autoesc)),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"ownerData", env.autoesc)),"lastName", env.autoesc), env.autoesc);
output += "</td>\n                        </tr>\n                    ";
;
}
}
frame = frame.pop();
output += "\n                </tbody>\n\n            </table>\n        </div>\n        \n\n\n        <hr>\n\n        <h4>Controls</h4>\n        \n\n";
output += "\n    </form>\n\n    <div id=\"controls-region\"></div>\n\n    <button type=\"button\" class=\"btn btn-primary js-add-control\">Add control</button>\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary js-modal-save\">Gravar</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancelar</button>\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-new.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" style=\"padding-top: 20px;\">\n\n        <h4 class=\"text-center\">Criar um novo mapa</h4>\n        <form style=\"margin-top: 40px;\">\n\n            <div class=\"form-group\">\n                <label for=\"js-new-map-title-pt\">Map title (portuguese)</label>\n                <input type=\"text\" id=\"js-new-map-title-pt\" class=\"form-control\" name=\"title[pt]\" >\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-new-map-title-en\">Map title (english)</label>\n                <input type=\"text\" id=\"js-new-map-title-en\" class=\"form-control\" name=\"title[en]\" >\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                        <label for=\"js-new-map-category\">Map category</label>\n\n                        <select name=\"categoryId\" class=\"form-control\">\n\n                        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "mapCategories");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("obj", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                            <option value=";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += ">\n                                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"contents", env.autoesc)),"en", env.autoesc), env.autoesc);
output += "\n                            </option>\n                        ";
;
}
}
frame = frame.pop();
output += "\n                        \n                        </select>\n\n                    </div>\n                </div>\n\n            </div>\n\n\n            <hr>\n\n            <h4>Data sources (previously loaded shapes)</h4>\n\n            <div class=\"xtable-responsive\">\n                <table class=\"table table-stripedx table-hover table-condensed table-dashboard\">\n\n                    <thead>\n                        <tr>\n                            <th style=\"width: 5%\"></th>\n                            <th style=\"width: 25%\">Shape code</th>\n                            <th style=\"width: 45%\">Shape description</th>\n                            <th style=\"width: 25%\">Owner</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        ";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "allShapes");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("obj", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                            <tr class=\"js-shape-row\">\n                                <td><input type=\"checkbox\" name=\"selectedShapes[";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "]\"></td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"code", env.autoesc), env.autoesc);
output += "</td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"description", env.autoesc)),"pt", env.autoesc), env.autoesc);
output += "</td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"ownerData", env.autoesc)),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"ownerData", env.autoesc)),"lastName", env.autoesc), env.autoesc);
output += "</td>\n                            </tr>\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </tbody>\n\n                </table>\n            </div>\n\n        </form>\n\n\n \n\n\n\n        <div class=\"row\" style=\"margin-top: 20px;\">\n        \t<div class=\"col-sm-6 col-sm-offset-3\">\n            \t<button type=\"button\" class=\"btn btn-primary btn-block js-save\">Create map</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title")),"pt", env.autoesc), env.autoesc);
output += "\n</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "categoryData")),"contents", env.autoesc)),"en", env.autoesc), env.autoesc);
output += "\n</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "code"), env.autoesc);
output += "\n</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"lastName", env.autoesc), env.autoesc);
output += "\n</td>\n\n";
output += "\n\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-tab.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul class=\"nav nav-tabs\">\n\n";
output += "\n\n    <li role=\"presentation\" class=\"active\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"maps-all\">Todos os mapas</a>\n    </li>\n\n    <li role=\"presentation\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"maps-new\">Criar novo mapa</a>\n    </li>\n\n    <li role=\"presentation\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"shapes-all\">Todos os shapes</a>\n    </li>\n\n</ul>\n\n<div id=\"maps-region\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/maps-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n            \n";
output += "\n                 <th style=\"width: 50%\">Title</th>\n                <th style=\"width: 20%\">Category</th>\n               <th style=\"width: 10%\">Code</th>\n                <th style=\"width: 20%\">Owner</th>\n";
output += "\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n\n    \n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/shapes-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\n\n\t<p>Are you sure you want to delete this shape?</p>\n\n\t<div class=\"form-group\" style=\"margin-top: 20px;\">\n\t    <label >Description (english)</label>\n\t    <input class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "description")),"en", env.autoesc), env.autoesc);
output += "\" disabled>\n\t</div>\n\t<div class=\"form-group\">\n\t    <label >Description (portuguese)</label>\n\t    <input class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "description")),"pt", env.autoesc), env.autoesc);
output += "\" disabled>\n\t</div>\n\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/shapes-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit shape #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n    <form>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-text-pt\">Description (português)</label>\n            <input id=\"js-edit-desc-pt\" class=\"form-control\" name=\"edit-desc-pt\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "description")),"pt", env.autoesc), env.autoesc);
output += "\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"js-edit-text-en\">Description (english)</label>\n            <input id=\"js-edit-desc-en\" class=\"form-control\" name=\"edit-desc-en\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "description")),"en", env.autoesc), env.autoesc);
output += "\">\n        </div>\n\n        <hr>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                    <label>Shape code</label>\n                    <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "code"), env.autoesc);
output += "\" disabled>\n                </div>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                    <label>SRID</label>\n                    <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "srid"), env.autoesc);
output += "\" disabled>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                    <label>Original file</label>\n                    <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fileData")),"name", env.autoesc), env.autoesc);
output += "\" disabled>\n                </div>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                    <label>Created at</label>\n                    <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "createdAt"), env.autoesc);
output += "\" disabled>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Owner</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"first_name", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"last_name", env.autoesc), env.autoesc);
output += "\" disabled>\n        </div>\n\n    </form>\n\n    <hr>\n\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n\n                <h4 class=\"text-center\">Column data</h4>\n\n                <table class=\"table table-striped table-condensed table-dashboard\">\n                    <thead>\n                        <tr>\n                            <th style=\"width: 50%\">Column name</th>\n                            <th style=\"width: 50%\">Data type</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "shapeColumnsData");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("column", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n                        <tr>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"column_name", env.autoesc), env.autoesc);
output += "</td>\n                            <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"data_type", env.autoesc), env.autoesc);
output += "</td>\n                        </tr>\n\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary js-modal-save\">Gravar</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancelar</button>\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/shapes-new.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" style=\"padding-top: 20px;\">\n\n        <h4 class=\"text-center\">Carregar um novo shape para a base de dados</h4>\n        <form style=\"margin-top: 40px;\">\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t            <div class=\"form-group\">\n\t\t                <label for=\"js-new-shape-code\">Shape code</label>\n\t\t                <input type=\"text\" id=\"js-new-shape-code\" class=\"form-control\" name=\"code\">\n\t\t            </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t            <div class=\"form-group\">\n\t\t                <label for=\"js-new-shape-srid\">SRID (projection identifier)</label>\n\t\t                <input type=\"text\" id=\"js-new-shape-srid\" class=\"form-control\" name=\"srid\" value=\"4326\">\n\t\t            </div>\n\t\t\t\t</div>\n\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"js-new-shape-desc-pt\">Description (portuguese)</label>\n                <input type=\"text\" id=\"js-new-shape-desc-pt\" class=\"form-control\" name=\"description[pt]\" >\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-new-shape-desc-en\">Description (english)</label>\n                <input type=\"text\" id=\"js-new-shape-desc-en\" class=\"form-control\" name=\"description[en]\" >\n            </div>\n\n\n            <h4>Available zip files containing shapes</h4>\n\n            <div class=\"xtable-responsive\">\n                <table class=\"table table-condensedx table-hover table-dashboard\">\n\n                    <thead>\n                        <tr>\n                            <th style=\"width: 5%\"></th>\n                            <th style=\"width: 10%\">File id</th>\n                            <th style=\"width: 20%\">Name</th>\n                            <th style=\"width: 20%\">Owner</th>\n                            <th style=\"width: 20%\">Uploaded at</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "zipFilesWithShapes");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("obj", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                            <tr class=\"js-shape-row\">\n                                <td><input type=\"radio\" name=\"fileId\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "\"></td>\n                                <td class=\"js-file-id\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "</td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "</td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"ownerData", env.autoesc)),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"ownerData", env.autoesc)),"lastName", env.autoesc), env.autoesc);
output += "</td>\n                                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uploadedAt", env.autoesc), env.autoesc);
output += "</td>\n                            </tr>\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </tbody>\n\n                </table>\n            </div>\n\n        </form>\n\n\n        <hr>\n\n        <div class=\"row\" style=\"margin-top: 20px;\">\n        \t<div class=\"col-sm-6 col-sm-offset-3\">\n            \t<button type=\"button\" class=\"btn btn-primary btn-block js-save\">Carregar shape!</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/shapes-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<td>\n    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "code"), env.autoesc);
output += "\n</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fileData")),"name", env.autoesc), env.autoesc);
output += "\n</td>\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "description")),"pt", env.autoesc), env.autoesc);
output += "\n</td>\n\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "ownerData")),"lastName", env.autoesc), env.autoesc);
output += "\n</td>\n\n";
output += "\n\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["maps/templates/shapes-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n            \n";
output += "\n                <th style=\"width: 15%\">Code</th>\n                <th style=\"width: 30%\">File</th>\n                <th style=\"width: 30%\">Description</th>\n                <th style=\"width: 15%\">Owner</th>\n";
output += "\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["menu-left/templates/menu-left.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"list-group\">\n\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("obj", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<a href=\"#";
output += runtime.suppressValue(runtime.memberLookup((t_4),"itemCode", env.autoesc), env.autoesc);
output += "\" class=\"list-group-item\" style=\"padding-top: 13px; padding-bottom: 13px;\">\n\t\t<span class=\"glyphicon ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"itemIcon", env.autoesc), env.autoesc);
output += "\"></span>&nbsp;\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"itemTitle", env.autoesc)),runtime.memberLookup((t_4),"lang", env.autoesc), env.autoesc), env.autoesc);
output += "\n\t\t<span class=\"arrow-container pull-right\"></span>\n\t</a>\n\n";
;
}
}
frame = frame.pop();
output += "\n\n\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["profile/templates/profile.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" style=\"padding-top: 20px;\">\n\n        <h3 class=\"text-center\">Dados pessoais</h3>\n        <form>\n            <div class=\"form-group\">\n                <label for=\"js-personal-first-name\">Primeiro nome</label>\n                <input type=\"text\" id=\"js-personal-first-name\" class=\"form-control\" name=\"firstName\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "firstName"), env.autoesc);
output += "\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-personal-last-name\">Apelido</label>\n                <input type=\"text\" id=\"js-personal-last-name\" class=\"form-control\" name=\"lastName\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lastName"), env.autoesc);
output += "\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-personal-email\">Email</label>\n                <input type=\"text\" id=\"js-personal-email\" class=\"form-control\" name=\"email\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.autoesc);
output += "\">\n            </div>\n        </form>\n\n        <div class=\"row\" style=\"margin-top: 20px;\">\n        \t<div class=\"col-sm-6 col-sm-offset-3\">\n            \t<button type=\"button\" class=\"btn btn-primary btn-block js-save\">Gravar</button>\n            </div>\n        </div>\n\n\n        <h3 class=\"text-center\" style=\"margin-top: 50px;\">Alterar password</h3>\n        <form>\n            <div class=\"form-group\">\n                <label for=\"js-personal-current-pw\">Password actual</label>\n                <input type=\"password\" id=\"js-personal-current-pw\" class=\"form-control\" name=\"currentPw\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-personal-new-pw\">Nova password</label>\n                <input type=\"password\" id=\"js-personal-new-pw\" class=\"form-control\" name=\"newPw\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-personal-new-pw-2\">Nova password (novamente)</label>\n                <input type=\"password\" id=\"js-personal-new-pw-2\" class=\"form-control\" name=\"newPw2\">\n            </div>\n        </form>\n\n        <div class=\"row\" style=\"margin-top: 20px;\">\n            <div class=\"col-sm-6 col-sm-offset-3\">\n                <button type=\"button\" class=\"btn btn-primary btn-block js-change-pw\">Alterar password</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\nAre you sure you want to delete text # ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "?\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit text #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"js-edit-text-pt\">Português</label>\n            <textarea id=\"js-edit-text-pt\" class=\"form-control\" name=\"edit-text-pt\" rows=\"3\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contents")),"pt", env.autoesc), env.autoesc);
output += "</textarea>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"js-edit-text-en\">Inglês</label>\n            <textarea  id=\"js-edit-text-en\" class=\"form-control\" name=\"edit-text-en\" rows=\"3\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contents")),"en", env.autoesc), env.autoesc);
output += "</textarea>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"js-edit-text-tags\">Tags</label>\n            <input type=\"text\" id=\"js-edit-text-tags\" class=\"form-control\" name=\"edit-text-tags\" value=\"";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tags"),", "), env.autoesc);
output += "\">\n        </div>\n        <div class=\"form-group\">\n            <label>id</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "\" disabled>\n        </div>\n        <div class=\"form-group\">\n            <label>Last updated</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lastUpdated"), env.autoesc);
output += "\" disabled>\n        </div>\n        <div class=\"form-group\">\n            <label>Author (of the last update)</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "authorData")),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "authorData")),"lastName", env.autoesc), env.autoesc);
output += "\" disabled>\n        </div>\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary js-modal-save\">Gravar</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancelar</button>\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-new.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" style=\"padding-top: 20px;\">\n\n        ";
output += "\n        <form>\n            <div class=\"form-group\">\n                <label for=\"js-new-text-pt\">Português</label>\n                <textarea id=\"js-new-text-pt\" class=\"form-control\" name=\"new-text-pt\" rows=\"3\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-new-text-en\">Inglês</label>\n                <textarea id=\"js-new-text-en\" class=\"form-control\" name=\"new-text-en\" rows=\"3\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"js-new-text-tags\">Tags (separar com vírgulas)</label>\n                <input type=\"text\" id=\"js-new-text-tags\" class=\"form-control\" name=\"new-text-tags\">\n            </div>\n        </form>\n\n        <div class=\"row\" style=\"margin-top: 20px;\">\n        \t<div class=\"col-sm-6 col-sm-offset-3\">\n            \t<button type=\"button\" class=\"btn btn-primary btn-block js-save\">Gravar</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</td>x\n\n<td>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contents")),"pt", env.autoesc), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contents")),"en", env.autoesc), env.autoesc);
output += "\n</td>\n<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "authorData")),"firstName", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "authorData")),"lastName", env.autoesc), env.autoesc);
output += "</td>\n\n<td>";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tags"),", "), env.autoesc);
output += "</td>\n\n\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-tab.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" class=\"active\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"texts-all\">Todos os textos</a>\n    </li>\n    <li role=\"presentation\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"texts-new\">Novo texto</a>\n    </li>\n</ul>\n\n<div id=\"texts-region\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["texts/templates/texts-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n                <th style=\"width: 4%\">id</th>\n                <th style=\"width: 30%\">pt</th>\n                <th style=\"width: 30%\">en</th>\n                <th style=\"width: 16%\">Author</th>\n                <th style=\"width: 10%\">Tags</th>\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["users/templates/users-delete-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete confirmation</h4>\n</div>\n\n\n<div class=\"modal-body\">\nAre you sure you want to delete user # ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "?\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger js-modal-delete\">Yes</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancel</button>\n\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["users/templates/users-edit-modal.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit user #";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</h4>\n</div>\n\n\n<div class=\"modal-body\">\n    <form>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-user-first-name\">First Name</label>\n            <input type=\"text\" id=\"js-edit-user-first-name\" class=\"form-control\" name=\"edit-user-first-name\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "firstName"), env.autoesc);
output += "\" >\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"js-user-last-name\">Last Name</label>\n            <input type=\"text\" id=\"js-user-last-name\" class=\"form-control\" name=\"edit-user-last-name\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lastName"), env.autoesc);
output += "\" >\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"js-edit-user-email\">Email</label>\n            <input type=\"text\" id=\"js-edit-user-email\" class=\"form-control\" name=\"edit-user-email\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.autoesc);
output += "\" >\n        </div>\n\n        <div class=\"form-group\">\n            <label>id</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "\" disabled>\n        </div>\n        <div class=\"form-group\">\n            <label>Created At</label>\n            <input type=\"text\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "createdAt"), env.autoesc);
output += "\" disabled>\n        </div>\n        \n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary js-modal-save\">Gravar</button>\n    <button type=\"button\" class=\"btn btn-default js-modal-cancel\">Cancelar</button>\n\n    <div id=\"message-status\" style=\"margin-top: 35px;\"></div>\n    <div id=\"\" style=\"margin-top: 10px;\">\n        <h5 id=\"message-links\"></h5>\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["users/templates/users-row.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "</td>x\n\n<td>\n    ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "firstName"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lastName"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.autoesc);
output += "\n</td>\n\n<td>\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "createdAt"), env.autoesc);
output += "\n</td>\n\n<td class=\"text-right\">\n    <button class=\"btn btn-primary btn-xs js-edit\"><span class=\"glyphicon glyphicon-pencil\"></span>\n    </button>\n    <button class=\"btn btn-danger btn-xs js-delete\"><span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["users/templates/users-tab.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" class=\"active\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"users-all\">Todos os utilizadores</a>\n    </li>\n    <li role=\"presentation\">\n        <a href=\"#\" class=\"js-dashboard-sep\" data-tab-separator=\"users-new\">Novo utilizador</a>\n    </li>\n</ul>\n\n<div id=\"users-region\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["users/templates/users-table.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"xtable-responsive\">\n    <table class=\"table table-striped table-condensed table-dashboard\">\n\n        <thead>\n            <tr>\n            \n                <th style=\"width: 5%\">id</th>\n                <th style=\"width: 20%\">First Name</th>\n                <th style=\"width: 20%\">Last Name</th>\n                <th style=\"width: 25%\">email</th>\n                <th style=\"width: 20%\">Created At</th>\n\n                <th style=\"width: 10%\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n        </tbody>\n\n    </table>\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
