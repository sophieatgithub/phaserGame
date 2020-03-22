class BootGame extends Phaser.Scene {
    constructor() {
        super({ key: "BootGame", active: true});
    }

    preload() {
        //background images
        this.load.image("menu-background" , "../assets/backgrounds/sizings.png");

        //Character images
        this.load.spritesheet("player", "../assets/player/player-spritesheet.png",
        { frameWidth: 16, frameHeight: 16 });
    }

    create() {
        ///////////////////////
        ///////Add Text/////
        this.add.text(20, 20, "Loading game...");


        ////////////////Create Animations///////////////////////
        //////Player/////
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 0}),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'left-forward',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2}),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'forward-left',
            frames: this.anims.generateFrameNumbers('player', { start: 2, end: 0}),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'forward',
            frames: this.anims.generateFrameNumbers('player', { start: 2, end: 2}),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'forward-right',
            frames: this.anims.generateFrameNumbers('player', { start: 2, end: 4}),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'right-forward',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 2}),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 4}),
            frameRate: 1,
            repeat: -1
        });

///////////////////////
////////Scene change//
        this.scene.start("Menu");
    }
   }