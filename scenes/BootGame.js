class BootGame extends Phaser.Scene {
    constructor() {
        super({ key: "BootGame", active: true});
    }

    preload() {
        //background images
        this.load.image("menu-background" , "../assets/backgrounds/sizings.png");

        //Character images
        this.load.image("player" , "../assets/player/player-forward.png");
        }

    create() {
        this.add.text(20, 20, "Loading game...");

///////////////////////
////////Scene change//
        this.scene.start("Menu");
    }
}