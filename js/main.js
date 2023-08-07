'use strict'

class Element {
  constructor(tagName) {
    this.tagName = tagName;
    this.body = document.body;
    this.id = '';
    this.classes = [];
    this.content = '';
    this.children = [];
  }

  setId(id) {
    this.id = id;
    return this;
  }

  addClass(cssClass) {
    this.classes.push(cssClass);
    return this;
  }

  setContent(text) {
    this.content = text;
    return this;
  }

  addChild(child) {
    this.children.push(child);
    return this;
  }

  print() {
    let html = `<${this.tagName}`;

    if (this.id) {
      html += ` id="${this.id}"`;
    }

    if (this.classes.length > 0) {
      html += ` class="${this.classes.join(' ')}"`;
    }

    html += `>${this.content}`;

    for (const child of this.children) {
      html += child.print();
    }

    html += `</${this.tagName}>`;

    return html;
  }
}


class DomBuilder {
  constructor() {
    this.element = null;
  }

  create(tagName) {
    this.element = new Element(tagName);
    return this;
  }

  withClass(className) {
    this.element.addClass(className);
    return this;
  }

  withId(idName) {
    this.element.setId(idName);
    return this;
  }

  withChild(childElem) {
    this.element.addChild(childElem);
    return this;
  }

  withContent(text) {
    this.element.setContent(text);
    return this;
  }

  get result() {
    return this.element;
  }
}

let p1 = new DomBuilder().create('p').withId('p1').withClass('text').withClass('purple').withContent('Hello,').result;
let p2 = new DomBuilder().create('p').withId('p2').withClass('text').withClass('blue').withContent('world!').result;
let div = new DomBuilder().create('div').withId('main').withClass('container').withChild(p1).withChild(p2).result;

const wrapper = document.querySelector('.wrapper');
wrapper.innerHTML = div.print();






















































// class Element {
//   constructor(tagName) {
//     this.tagName = tagName;
//     this.id = '';
//     this.classes = [];
//     this.content = '';
//     this.children = [];
//   }

//   setId(id) {
//     this.id = id;
//     return this;
//   }

//   addClass(cssClass) {
//     this.classes.push(cssClass);
//     return this;
//   }

//   setContent(text) {
//     this.content = text;
//     return this;
//   }

//   addChild(child) {
//     this.children.push(child);
//     return this;
//   }

//   print() {
//     let attributes = '';
//     if (this.id) {
//       attributes += ` id="${this.id}"`;
//     }
//     if (this.classes.length > 0) {
//       attributes += ` class="${this.classes.join(' ')}"`;
//     }
//     let childrenHTML = this.children.map(child => child.print()).join('');
//     return `<${this.tagName}${attributes}>${this.content}${childrenHTML}</${this.tagName}>`;
//   }
// }

// class DomBuilder {
//   constructor() {
//     this.body = document.body;
//     this.element = null;
//   }

//   create(tagName) {
//     this.element = document.createElement(tagName);
//     return this;
//   }

//   withClass(className) {
//     this.element.classList.add(className);
//     return this;
//   }

//   withId(idName, value) {
//     this.element.setAttribute(idName, value);
//     return this;
//   }

//   withChild(childElem) {
//     this.element.append(childElem);
//     return this;
//   }

//   withContent(text) {
//     this.element.innerHTML = (text);
//     return this;
//   }

//   get result() {
//     return this.body.append(this.element);
//   }
// }

// // Приклад коду та результат його виконання
// let p1 = new DomBuilder()
// .create('p')
// .withId('p1')
// .withClass('text')
// .withContent('Hello,')
// .result;


// let p2 = new DomBuilder()
// .create('p')
// .withId('p2')
// .withClass('text')
// .withContent('world!')
// .result;


// let div = new DomBuilder()
// .create('div')
// .withId('main')
// .withClass('container')
// .withChild(p1)
// .withChild(p2).result;

// console.log(p1);






















































// class Element {
//     constructor(tagName) {
//       this.tagName = document.createElement('div');
//       this.attributes = {};
//       this.children = [];
//       this.textContent = '';
//     }
  
//     setId(id) {
//       this.attributes['id'] = id;
//       return this;
//     }
  
//     addClass(cssClass) {
//       if (!this.attributes['class']) {
//         this.attributes['class'] = '';
//       }
//       this.attributes['class'] += cssClass + ' ';
//       return this;
//     }
  
//     setContent(text) {
//       this.textContent = text;
//       return this;
//     }
  
//     addChild(child) {
//       this.children.push(child);
//       return this;
//     }
  
//     print() {
//       let result = `<${this.tagName}`;
  
//       for (const key in this.attributes) {
//         result += ` ${key}="${this.attributes[key]}"`;
//       }
  
//       if (this.children.length === 0 && this.textContent === '') {
//         result += '/>';
//       } else {
//         result += '>';
  
//         if (this.textContent !== '') {
//           result += this.textContent;
//         }
  
//         for (const child of this.children) {
//           result += child.print();
//         }
  
//         result += `</${this.tagName}>`;
//       }
  
//       return result;
//     }
//   }
  
  
  
  
//   class DomBuilder {
//     constructor() {
//       this.body = document.body;
//       this.currentElement = null;
//     }
  
//     create(tagName) {
//       this.currentElement = new Element(tagName);
//       return this;
//     }
  
//     withClass(className) {
//       this.currentElement.classList.add(className);
//       return this;
//     }
  
//     withId(idName, value) {
//       this.currentElement.setAttribute(idName, value);
//       return this;
//     }
  
//     withChild(childElem) {
//       this.currentElement.append(childElem);
//       return this;
//     }
  
//     withContent(text) {
//       this.currentElement.innerHTML = (text);
//       return this;
//     }
  
//     get result() {
//       this.body.append(this.currentElement); 
//     }
//   }
  
//   // Example usage
// let p1 = new DomBuilder().create('p').withId('id','p1').withClass('text').withContent('Hello,').result;
// // let p2 = new DomBuilder().create('p').withId('id','p2').withClass('text').withContent('world!').result;
// // let div = new DomBuilder().create('div').withId('id', 'main').withClass('container').withChild(p1).withChild(p2).result;

// console.log(p1.print())
  
  
  
  






































// class Elements {
//     constructor(tagName) {
//         this.tagName = tagName;
//         this.attributes = {};
//         this.textContent = '';
//         this.children = [];
//     }

//     setId(id) {
//         this.attributes['id'] = id;
//         return this;
//     }

//     addClass(cssClass) {
//         if (!this.attributes['class']) {
//         this.attributes['class'] = '';
//         }
//         this.attributes['class'] += cssClass + ' ';
//         return this;
//     }

//     setContent(text) {
//         this.textContent = text;
//         return this;
//     }

//     addChild(child) {
//         this.children.push(child);
//         return this;
//     }

//     print() {
        
//         let result = `<${this.tagName}`;

//         for (const key in this.attributes) {
//             result += ` ${key}="${this.attributes[key]}"`;
//           }

//           if (this.children.length === 0 && this.textContent === '') {
//             result += '/>';
//           } else {
//             result += '>';
      
//         if (this.textContent !== '') {
//             result += this.textContent;
//         }
      
//         for (const child of this.children) {
//             result += child.print();
//         }
      
//         result += `</${this.tagName}>`;
//         }
      
//         return result;
//     }
// }


// class DomBuilder {
//     constructor() {
//         this.currentElement = null;
//     }
    
//     create(tagName) {
//         this.currentElement = new Elements(tagName);
//         return this;
//     }

//     withClass(className) {
//         this.currentElement.addClass(className);
//         return this;
//     }
    
//     withId(idName) {
//         this.currentElement.setId(idName);
//         return this;
//     }

//     withChild(childElem) {
//         this.currentElement.addChild(childElem);
//         return this;
//     }

//     withContent(text) {
//         this.currentElement.innerText = (text);
//         return this;
//     }

//     get result() {
//         return this.currentElement;
//     }
// }


// let p1 = new DomBuilder()
// .create('p')
// .withId('p1')
// .withClass('text')
// .withContent('Hello,')
// .result;

// let p2 = new DomBuilder()
// .create('p')
// .withId('p2')
// .withClass('text')
// .withContent('world!')
// .result;

// let div = new DomBuilder()
// .create('div')
// .withId('main')
// .withClass('container')
// .withChild(p1)
// .withChild('p2')
// .result;

