var StartLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },
    
    init:function() {
        this._super();
        var size = cc.director.getWinSize();

        var bgsprite = cc.Sprite.create(res.START_IMAGE);
        var bgsize = bgsprite.getContentSize();
        bgsprite.setPosition(size.width / 2, size.height / 2);

        this.addChild(bgsprite, kZindexBG);

        if (cc.sys.capabilities.hasOwnProperty('keyboard')) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: this.onKeyPressed
            }, bgsprite);
        }
    },

    onKeyPressed:function(key, event) {
        if (key == cc.KEY.s) {
            cc.director.runScene(GameLayer.scene());
        }
    }
});

StartLayer.scene = function() {
    var scene = new cc.Scene();
    var layer = new StartLayer();
    scene.addChild(layer);
    return scene;
}