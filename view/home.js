import Button from '../components/Button.js';

const renderHomePage = () => {
  const homeContainer = document.getElementById('root');

  const heading = document.createElement('h1');
 
  heading.textContent = 'Home Page';

  const button = new Button('Click me');
  const buttonElement = button.render();
  
  homeContainer.appendChild(heading);
  homeContainer.appendChild(buttonElement);
  //
};

export { renderHomePage };
