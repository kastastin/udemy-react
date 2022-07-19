import {Component} from 'react';
import './App.css';


class WhoAmI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
    };
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({ // setState() always call method render()
      years: state.years + 1
    }));
  }

  // nextYear() {
  //   this.setState(state => ({
  //     years: state.years + 1
  //   }));
  // }

  // commitInputChanges = (e) => {
  //   this.setState({
  //     position: e.target.value
  //   });
  // }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    });
  }

  render() {
    const {name, surname, link} = this.props,
          {years, position} = this.state;

    return (
      <div>
        <button onClick={this.nextYear}>+++</button> 
        {/* <button onClick={() => this.nextYear()}>+++</button>  */}
        <h1>
            My name is {name}, surname - {surname},
            age - {years},
            position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Enter position</span>
          {/* <input type="text" onChange={this.commitInputChanges} /> */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="instagram.com"/>
    </div>
  );
}

export default App;