class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="50" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120"  fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    const polygonElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygonElement.setAttribute("points", "150, 18 244, 182 56, 182");
    polygonElement.setAttribute("fill", this.color);
    // return (
     // <polygon points="150, 18 244, 182 56, 182" fill=${this.color} />
  }
};

module.exports = {Circle, Triangle, Square}