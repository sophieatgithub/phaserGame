class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu"});
    }

    create() {
        //Adding Background
        this.add.image(0,0, "menu-background").setOrigin(0,0);

        //Add playing to the scene
        this.player = new Player(this, 128, 72);

        //Adding Text
        this.add.text(20, 20, "Menu", {font: "25px Arial", fill:"black"});

    }

    update() {
       this.player.playerControls(this);
    }
}