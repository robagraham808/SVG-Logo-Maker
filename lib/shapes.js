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
    return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="35" y="35" width="240" height="240"  fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };

//   const polygonElement = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "polygon"
//   );
//   polygonElement.setAttribute("points", "150, 18 244, 182 56, 182");
//   polygonElement.setAttribute("fill", this.color);
