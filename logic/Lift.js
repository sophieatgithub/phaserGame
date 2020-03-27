class Lift extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, level){
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.level = level;

        this.leftDoor = this.addLeftDoor();
        this.rightDoor = this.addRightDoor();
    }

    addLeftDoor() {
        ///this.x-3 of sets the door
        return this.scene.add.sprite(this.x-3, this.y, "liftdoor-left");
    }

    addRightDoor() {
        ///this.x-3 of sets the door
        return this.scene.add.sprite(this.x+3, this.y, "liftdoor-right");
    }

    checkPlayerLocation() {
        if(playerData.x == this.x) {
            this.liftDoorsOpen();
        }
    }

    liftDoorsOpen() {
        var leftPath = new Phaser.Curves.Line([this.x+3, this.y, this.x-10, this.y]);
        var slideLeft = this.scene.add.follower(leftPath, this.x+3, this.y, "liftdoor-left");
        slideLeft.startFollow(5000);




        console.log(playerData.x);
    }

}