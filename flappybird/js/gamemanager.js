var res = {};

res.BG_IMAGE = 'images/BG-HD.png';
res.FLOOR_IMAGE = 'images/Floor-HD.png';
res.ROBIN_IMAGE = 'images/Robin-HD.png';
res.TREE_IMAGE = 'images/Tree-HD.png';
res.CLOUD_IMAGE = 'images/Cloud-HD.png';
res.MOUNT_IMAGE = 'images/Mount-HD.png';
res.TUBE_IMAGE = 'images/Tube-HD.png';

var kZindexBG = 0;
var kZindexFloor = 40;
var kZindexRobin = 100;
var kZindexCloudSlow = 10;
var kZindexCloudFast = 20;
var kZindexTree = 50;
var kZindexMount = 30;
var kZindexTube = 35;

var kRobinStateStopped = 0;
var kRobinStateMoving = 1;
var kRobinStartSpeedY = 300;
var kRobinStartX = 240;

var kCloudRestartX = 100;
var kMountRestartX = 300;

var kCloudSpeedSlow = 13.0;
var kCloudSpeedFast = 53.0;
var kMountSpeed = 30.0;
var kTreeSpeed = 70.0;

var kCloudScaleSlow = 0.4;
var kCloudScaleFast = 0.85;
var kMountScale = 0.8;
var kTreeScale = 1.0;

var GRAVITY = -620;

var TRUE = 1;
var FALSE = 0;

var kReenableTime = 2.5;
var kTubeSpawnMinTime = 2.3;
var kTubeSpawnTimeVariance = 8;

var kSingleGapTop = 440;
var kSingleGapBottom = 230;
var kSingleGapMax = 280;
var kSingleGapMin = 160;

var kDoubleGapTop = 480;
var kDoubleGapBottom = 120;
var kDoubleGapMax = 220;
var kDoubleGapMin = 140;

var kTubeTypeUpper = 0;
var kTubeTypeLower = 1;
var kTubeTypePair = 2;
var kTubeTypeNone = 3;

var kTubeStateActive = 0;
var kTubeStateInactive = 1;

var kTubeOffsetX = 100;
var kTubeInactiveX = -1000;

var kTubeScore = 1;

var kTubeMaxUpPixels = 180;
var kFontSizeGameOver = 48;
var kFontSizeSocre = 24;
var kFontName = 'Courier';
var kScoreX = 20;
var kScoreY = 20;
