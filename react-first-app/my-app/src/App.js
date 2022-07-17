import {Component, StrictMode} from 'react';
import './App.css';


function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  );
}

// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

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
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="instagram.com"/>
      {/* <WhoAmI name={{firstName: 'Andrew'}} surname="Grant" link="riddle.com"/> */}
      {/* <WhoAmI name={() => {return 'Tom'}} surname="Hont" link="twitter.com"/> */}
    </div>
  );
}

export {Header};
export default App;
