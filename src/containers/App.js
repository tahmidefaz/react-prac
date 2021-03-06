import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'jlkj', name: 'Efaz', age: '24'},
      { id:'uweoiu', name: 'Tahmid', age:' 20'},
      { id:'uwoi', name: 'ET', age: '26'}
    ],
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    //Call to switchNameHandler in button is inefficient, use bind as often as possible
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
          <div>
              {this.state.persons.map((person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              })}
          </div>
      );

      btnClass = classes.Red;
    };

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.red);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I am a React APP</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
