import _ from 'lodash';
import './styles/style.css';
import './styles/style.scss';
import Picture from './images/bg.jpeg';

import teacher, { name, nickName } from './me';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'from', name, nickName], ' ');
    console.log('teacher', teacher);

    // Add the image to our existing div.
    const myPicture = new Image();
    myPicture.src = Picture;
    element.appendChild(myPicture);

    return element;
  }
  
  document.body.appendChild(component());