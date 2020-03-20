class Scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "playGame"});
    }

create(){

    //Adding Background
    this.add.image(0,0,"scene2Background");

    this.add.text(20, 20, "Playing game...", {font: "25px Arial", fill:"yellow"});

  }
}