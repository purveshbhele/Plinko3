class Line {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      text("200",230,460);
      text("300",130,460);
      text("300",330,460);
      text("500",30,460);
      text("500",430,460);
      textSize(30);
     
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
    
  };
  
 

  
