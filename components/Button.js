//struct
class Button {
    constructor(text) {
      this.text = text;
    }
  
    render() {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = this.text;
      return buttonElement;
    }
  }
  
  export default Button;
  