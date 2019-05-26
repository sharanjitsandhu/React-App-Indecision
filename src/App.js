import React, { Component } from 'react';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // binding with current component instances
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptionP = this.handleAddOptionP.bind(this);

    this.state = {
      //options: ['o1', 'o2', 'o3']
      options: ['o1', 'o2', 'o3']
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOptionP(option) {
    if (!option) {
      return 'Please enter a valid value to add option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }

    console.log(option);
    this.setState(prevState => {
      return {
        // options: prevState.options.concat([option])
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'Indecision React App';
    // const options = ['o1', 'o2', 'o3'];

    return (
      <div className="App">
        <Header title={title} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOptionP={this.handleAddOptionP} />
      </div>
    );
  }
}

export default App;
