var Turret = cc.Sprite.extend({

    _minX:0,
    _maxX:0,
    _speed:0.0,
    _layer:null,
    _leftPressed:FALSE,
    _rightPressed:FALSE,
    _spacePressed:FALSE,
    _lastShootTime:0.0,
    _fireRate:0.0,

    ctor: function (spriteFrameName) {
        this._super(spriteFrameName);
        this.setAnchorPoint(0, 1);
    },

    initialize: function(layer, x, y, speed, minX, maxX, fireRate) {
        this._layer = layer;
        this._speed = speed;
        this._minX = minX;
        this._maxX = maxX;
        this._fireRate = fireRate;
        this.setPosition(x, y);
    },

    onKeyPressed: function(key) {
        if (key == cc.KEY.left) {
            this._leftPressed = TRUE;
        } else if (key == cc.KEY.right) {
            this._rightPressed = TRUE;
        } else if (key == cc.KEY.space) {
            this._spacePressed = TRUE;
        }
    },
              
    onKeyReleased: function(key) {
        if (key == cc.KEY.left) {
            this._leftPressed = FALSE;
        } else if (key == cc.KEY.right) {
            this._rightPressed = FALSE;
        } else if (key == cc.KEY.space) {
            this._spacePressed = FALSE;
        }
    },

    onTick:function(dt) {
        if (this._leftPressed == TRUE) {
            this.x -= dt * this._speed;
            if (this.x < this._minX) {
                this.x = this._minX;
            }
        } else if (this._rightPressed == TRUE) {
            this.x += dt * this._speed;
            if (this.x + this.getBoundingBox().width > this._maxX) {
                this.x = this._maxX - this.getBoundingBox().width;
            }
        }

        if (this._lastShootTime > 0.0) {
            this._lastShootTime -= dt;
        }

        if (this._spacePressed == TRUE && this._lastShootTime <= 0.0) {
            this.Shoot();
        }
    },

    Shoot: function() {
        this._lastShootTime = this._fireRate;
        this._layer.SpawnBullet(this.x + this.getBoundingBox().width/2, this.y + this.getBoundingBox().height/2, TRUE);
    }
});