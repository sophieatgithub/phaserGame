class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.currentPlayer = this.addPlayer();  

        this.currentPlayer.setCollideWorldBounds(true);

        }

        addPlayer() {
            return this.scene.physics.add.sprite(this.x, this.y, "player").play("forward");
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