class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, platforms){
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.platforms = platforms;
        this.currentPlayer = this.addPlayer();  

/////Player collision rules
        this.currentPlayer.setBounce(0.2);
        this.currentPlayer.setCollideWorldBounds(true);
        scene.physics.add.collider(this.currentPlayer, this.platforms);

        }

        addPlayer() {
            return this.scene.physics.add.sprite(this.x, this.y, "player-spritesheet").play("forward");
        }

        playerControls(scene) {
            let cursors = scene.input.keyboard.createCursorKeys();
        
            if (cursors.left.isDown)
            {
                this.currentPlayer.setVelocityX(-100);   
                this.currentPlayer.anims.play('left', true);
            }
            else if (cursors.right.isDown)
            {
                this.currentPlayer.setVelocityX(100);        
                this.currentPlayer.anims.play('right', true);
            }
            else
            {
                this.currentPlayer.setVelocityX(0);            
                this.currentPlayer.anims.play('forward');
            }
        }
    } 