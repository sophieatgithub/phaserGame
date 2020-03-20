class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu"});
    }

    create(){

        //Adding Background
        this.add.image(0,0,"menu-background").setOrigin(0,0);

        //Adding Text
        this.add.text(20, 20, "Menu", {font: "25px Arial", fill:"yellow"});

    }
}