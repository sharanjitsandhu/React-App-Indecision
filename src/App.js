import React, { Component } from 'react';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Header from './components/Header';

import './App.css';

class App extends Component {
  state = {
    //options: ['o1', 'o2', 'o3']
    options: ['o1', 'o2', 'o3']
  };

  // fetching data
  componentDidMount() {
    // console.log('cdm');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options: options
        }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  // saving data
  // run: localStorage.getItem('options')
  componentDidUpdate(prevProps, prevState) {
    // console.log('cdu');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('cwm');
  }

  /** handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  } */
  // Converted all the event handlers to arrow function(class properties)
  // Implicitly returning an object(fancy syntax)
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToDelete => {
    // console.log('hdo', optionToDelete);
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToDelete !== option;
      })
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOptionP = option => {
    if (!option) {
      return 'Please enter a valid value to add option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }

    console.log(option);

    /** this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });*/

    //Implicitly returning an object(fancy syntax)
    this.setState(prevState => ({
      // options: prevState.options.concat([option])
      options: prevState.options.concat(option)
    }));
  };

  render() {
    // const title = 'Indecision App';
    // const options = ['o1', 'o2', 'o3'];

    return (
      <div className="App">
        {/* <Header title={title} /> */}
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptionP={this.handleAddOptionP} />
      </div>
    );
  }
}

export default App;
