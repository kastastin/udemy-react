import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!</h2> // JSX syntax (React element)
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');
// const element = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: 'Hello World!'
//   }
// };

const text = 'Hello World!';

const elem = (
  <div>
    {/* <h2>Hello World!</h2> */}
    {/* <h2>{2 + 2}</h2> */}
    {/* <h2>{{}}</h2> // // we can't use Object in {} */}
    {/* <h2>{new Date()}</h2> // we can't use Object in {} */}
    {/* <h2>Text: {['ab', 'cd']}</h2> // we can use {['...']} */}
    <h2 className='class'>Hello World!</h2>
    <h2>{text}</h2>
    <input type="input text" />
    {/* <label htmlFor=""></label> */}
    {/* <button tabIndex={0}>Click</button>
    <button tabIndex="0">Click</button> */}
    <button>Click</button>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);