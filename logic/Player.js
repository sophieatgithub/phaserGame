class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;

        let player = this.addPlayer();  
        player.setCollideWorldBounds(true);

        }
        addPlayer() {
            return this.scene.physics.add.sprite(this.x, this.y, "player").play("forward");
        }
    } 