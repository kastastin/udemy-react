import {Component, StrictMode} from 'react';
import './App.css';


const Header = () => {
  return <h2>Header h2</h2>
};

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input
//           placeholder={holder}
//           type='text'
//           style={styledField}/>
// };

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };

    return <input
            placeholder={holder}
            type='text'
            style={styledField}/>
  }
}

function Btn() {
  const text = 'Log In'
  // const res = () => {
  //   return text
  // }
  // return <button>{res()}</button>
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
