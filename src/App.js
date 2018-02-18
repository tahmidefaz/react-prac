import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Efaz', age: '24'},
      { name: 'Tahmid', age:' 20'},
      { name: 'ET', age: '26'}
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    //Call to switchNameHandler in button is inefficient, use bind as often as possible
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
              {this.state.persons.map(person => {
                return <Person
                  name={person.name}
                  age={person.age} />
              })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}

      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
