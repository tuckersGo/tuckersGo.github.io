var GameLayer = cc.Layer.extend({

    _turret:null,
    _bullets:[],
    _size:cc.Size(0, 0),

    ctor:function() {
        this._super();
        this.init();
    },
    
    init:function() {
        this._super();
        this._size = cc.director.getWinSize();

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.SPRITES_PLIST);
        this.spriteSheet = new cc.SpriteBatchNode(res.SPRITES_IMAGE);
        this.addChild(this.spriteSheet);

        this._turret = new Turret('#turret.png');
        this._turret.initialize(this, this._size.width/2, g_turretStartY, 
            g_turretSpeed, g_ScreenMargin, this._size.width - g_ScreenMargin,
            g_turretFireRate);
        this.addChild(this._turret, kZindexTurret);

        var bgsprite = cc.Sprite.create(res.BG_IMAGE);
        var bgsize = bgsprite.getContentSize();
        bgsprite.setPosition(this._size.width / 2, this._size.height / 2);

        this.addChild(bgsprite, kZindexBG);

        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: this.onKeyPressed,
                onKeyReleased: this.onKeyReleased
            }, this);
        }
    },

    onEnter:function() {
        this._super();
        this.schedule(this.onTick);
    },

    onKeyPressed:function(key, event) {
        var tar = event.getCurrentTarget();
        tar._turret.onKeyPressed(key);
    },

    onKeyReleased:function(key, event) {
        var tar = event.getCurrentTarget();
        tar._turret.onKeyReleased(key);
    },

    onTick:function(dt) {
        this._turret.onTick(dt);
        for (var i = 0, len = this._bullets.length; i < len; ++i) {
            if (this._bullets[i]._active == TRUE) {
                this._bullets[i].onTick(dt);
            }
        }
    },

    SpawnBullet:function(x, y, isPlayerBullet) {
        var bullet = null;
        for (var i = 0, len = this._bullets.length; i < len; ++i) {
            if (this._bullets[i]._active == FALSE) {
                bullet = this._bullets[i];
                break;
            }
        }

        if (bullet == null) {
            bullet = new Bullet('#bullet.png');
            this._bullets[this._bullets.length] = bullet;
            this.addChild(bullet, kZindexTurret);
        }

        bullet.initialize(x, y, g_turretStartY - 10, this._size.height + g_ScreenMargin, g_bulletSpeed, isPlayerBullet);        
    }
});

GameLayer.scene = function() {
    var scene = new cc.Scene();
    var layer = new GameLayer();
    scene.addChild(layer);
    return scene;
}