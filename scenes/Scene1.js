class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "bootGame", active: true});
    }

    preload() {
        //background images
        this.load.image("scene2Background" , "../assets/backgrounds/sizings.png");
        }

    create() {
        this.add.text(20, 20, "Loading game...");

///////////////////////
////////Scene change//
        this.scene.start("playGame");
    }
}