class Ball {

    constructor(x,y,r){
    this.body = Bodies.circle(x,y,r);
       
    World.add(world, this.body);
    this.r = r;

    var options={
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,

    }
    }

    display(){
  ellipseMode(RADIANS);
  fill("red"); 
  ellipse(this.body.position.x, this.body.position.y, this.r, this.r) ; 

}

    

    
    
    
}