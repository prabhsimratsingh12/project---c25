class Paper {

  constructor(x, y,radius ) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.8
      }
    this.body = Bodies.circle(x, y, radius/2-10, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    
  }
  display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();

  }

}