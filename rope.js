class rope{
    constructor(bodyA, pointB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
   
    }     

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,23,8)
      if(pointA.x<200){
        line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
        line(pointA.x+15, pointA.y, pointB.x+20, pointB.y);
        image(this.sling3,pointA.x-25,pointA.y-10,10,20)
      }
      else{
        line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
        line(pointA.x+15, pointA.y, pointB.x+20, pointB.y);
        image(this.sling3,pointA.x+20,pointA.y-5,10,20)
      }
        }
    }
    
}