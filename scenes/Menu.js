class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu"});
    }

    create() {
        //Adding Background
        this.add.image(0,0, "menu-background").setOrigin(0,0);

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
            key: 'forward',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4}),
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
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 4}),
            frameRate: 1,
            repeat: -1
        });

        //Adding Player
        // let player = this.physics.add.sprite(128, 72, "player")
        // .play("forward");

        // player.setCollideWorldBounds(true);

        new Player(this, 128, 72);
        

        // Key logic
        /////////////aaaaaaaaaaaaaaaaaaa...//////////////cursors = this.input.keyboard.createCursorKeys();

        //Adding Text
        this.add.text(20, 20, "Menu", {font: "25px Arial", fill:"black"});
    }

    update() {
    //     if (cursors.left.isDown)
    //     {
    //         player.setVelocityX(-160);
        
    //         player.anims.play('left', true);
    //     }
    //     else if (cursors.right.isDown)
    //     {
    //         player.setVelocityX(160);
        
    //         player.anims.play('right', true);
    //     }
    //     else
    //     {
    //         player.setVelocityX(0);
        
    //         player.anims.play('turn');
    //     }
        
    //     if (cursors.up.isDown && player.body.touching.down)
    //     {
    //         player.setVelocityY(-330);
    //     }
    }
}