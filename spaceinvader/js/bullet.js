var Bullet = cc.Sprite.extend({

    _active:FALSE,
    _speed:0.0,
    _isPlayerBullet:FALSE,
    _minY:0,
    _maxY:0,

    ctor: function (spriteFrameName) {
        this._super(spriteFrameName);
        this.setAnchorPoint(0.5, 1);
    },

    initialize: function(x, y, minY, maxY, speed, isPlayerBullet) {
        this.x = x;
        this.y = y;
        this._minY = minY;
        this._maxY = maxY;
        this._speed = speed;
        this._isPlayerBullet = isPlayerBullet;
        this._active = TRUE;
        this.visible = TRUE;
    },

    onTick:function(dt) {
        if (this._isPlayerBullet == TRUE) {
            this.y += dt * this._speed;
        } else {
            this.y -= dt * this._speed;
        }

        if (this.y < this._minY || this.y > this._maxY) {
            this._active = FALSE;
            this.y = -100;
            this.visible = FALSE;
        }
    }
});