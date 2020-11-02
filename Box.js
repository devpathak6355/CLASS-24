class Box{


constructor(x,y,width,height){
    var options={
        restitution:0.5,
        friction:1.2,
        density:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(myWorld,this.body);

}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    //lets you rotate things
    push();
    // moves the rectangle  to original position
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("orange")
    rect(0,0,this.width,this.height);
    // restores original setting
    pop();

}

}