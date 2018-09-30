var res = {};

res.START_IMAGE = 'images/start.png';
res.BG_IMAGE = 'images/bg.png';
res.SPRITES_IMAGE = 'images/sprites.png';
res.SPRITES_PLIST = 'images/sprites.plist'

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var TRUE = 1;
var FALSE = 0;

var g_turretStartY = 30;
var g_ScreenMargin = 10;

var g_bulletSpeed = 100;
var g_turretSpeed = 30;
var g_turretFireRate = 0.7;

var kZindexBG = 0;
var kZindexTurret = 50;