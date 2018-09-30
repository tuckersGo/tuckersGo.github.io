window.onload = function(){

    var targetWidth = 400;
    var targetHeight = 300;

    cc.game.onStart = function(){

        cc.view.adjustViewPort(false);
        cc.view.setDesignResolutionSize(targetWidth, targetHeight, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);

        //load resources
        cc.LoaderScene.preload(g_resources, function () {
            cc.director.runScene(StartLayer.scene());
        }, this);
    };
    cc.game.run("gameCanvas");
};