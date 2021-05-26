class Slingshot{
constructor(A,B)
{
    var options= {
        bodyA:A,
        pointB:B,
        stiffness: 0.05,
        length: 10,
     }
     this.sling = Constraint.create(options)
 
     World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null
}
display(){
if(this.sling.bodyA){


var pointA= this.sling.bodyA.position
var pointB= this.sling.pointB
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}