

// Factory Function
function createCircle(radius) {
 return{
  radius,
  draw() {
   console.log('draw');
  }
 }
}

function Circle(radius) {
 this.radius = radius;
 this.draw = function() {
  console.log('draw');
 }
}


const circle = new Circle(1);

console.log(circle.Circle(1));
