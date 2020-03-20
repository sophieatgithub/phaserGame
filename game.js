var config = {
    type: Phaser.CANVAS,
    width: 256,     //16:9 aspect ratio (256x144)
    height: 144,
    // backgroundColor:
    render: {
        pixelArt: true,
        // roundPixels: true,
        // antialias: false,
        // crisp: true,
        // resolution: {number} //"The resolution of your game, as a ratio of canvas pixels to game pixels."
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene:[BootGame, Menu]

    // config  properties https://photonstorm.github.io/phaser-ce/global.html#GameConfig
}

var game = new Phaser.Game(config);

