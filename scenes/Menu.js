class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu"});
    }

    create() {

        //Adding Lifts
        this.add.image(239, 45, "lift-backdrop");
        this.add.image(239, 81, "lift-backdrop");
        this.add.image(239, 117, "lift-backdrop");

        this.lift = new Lift(this, 239, 45, 3);
        this.lift = new Lift(this, 239, 81, 2);
        this.lift = new Lift(this, 239, 117, 1);

        //Adding Background
        this.add.image(0,0, "menu-background").setOrigin(0,0);

        //////Adding physics to platforms////
        let platforms = this.physics.add.staticGroup();
        platforms.create(128 , 91, "apartment-platform");
        platforms.create(128 , 129, "pavement-platform");


        //Add playing to the scene
        this.player = new Player(this, 128, 72, platforms);

        //Adding Text
        this.add.text(20, 20, "Menu", {font: "25px Arial", fill:"black"});

    }

    update() {
       this.player.playerControls(this);
       this.lift.checkPlayerLocation();
    }
}