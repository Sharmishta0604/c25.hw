class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            mass:1000
        }
    this.body=Bodies.circle(x,y,20,options);
    this.image = loadImage("paper.png");
    //Matter.Bodies.circle(x,y,30,options);
    //this.radius=10;
    //this.height=10;
    World.add(world, this.body);
    }

display(){
    var pos =this.body.position
    //var angle=this.body.angle;
    //var angle=this.body.angle;
  push();
    translate(pos.x,pos.y);
    //rotate(angle);
     //ellipseMode(CENTER);
     
    strokeWeight(4);
    stroke("black");
    fill("white");
    
    ellipse(0, 0, 40, 40);
   imageMode(CENTER);
    image(this.image, 0, 0, 60, 60);
    
    
    pop();
}
}
