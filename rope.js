
class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
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
            var pointA = this.sling.bodyA.position;
            push();
            var pointB = this.pointB;
            strokeWeight(12);
            stroke("rgb(48,22,8)");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+25);
            pop();
    }
        
    
    
}