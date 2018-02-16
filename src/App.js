import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Efaz', age: '24'},
      { name: 'Tahmid', age:' 20'},
      { name: 'ET', age: '26'}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    this.setState({persons: [
      { name: newName, age: '24'},
      { name: 'Tahmid', age:' 20'},
      { name: 'Efaz', age: '29'}
    ]})
  }

  nameChangedHandler = (event) => {
      this.setState({
        persons: [
        { name: 'Efaz', age: '24'},
        { name: event.target.value, age:' 20'},
        { name: 'ET', age: '29'}
      ]
    })
  }

  render() {
    //Call to switchNameHandler in button is inefficient, use bind as often as possible
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Adan')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Martinez')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
