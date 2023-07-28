// The Shape prototype (blueprint)
const Shape = {
    type: 'Shape',
    getInfo: function () {
      return `This is a ${this.color} ${this.type}.`;
    }
  };
  
  function createShape(color) {
    const shape = Object.create(Shape);
    shape.color = color;
    return shape;
  }
  
  const redShape = createShape('red');
  const blueShape = createShape('blue');
  
  console.log(redShape.getInfo()); 
  console.log(blueShape.getInfo()); 
  