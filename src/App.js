import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.startQuiz = this.startQuiz.bind(this);
  }

  startQuiz(event) {
    console.log(event.target.style.visibility)
    event.target.style.visibility = 'hidden'
    this.refs.questions.style.visibility = 'visible'
    
  }
  render() {
    return (
      <div className="App">

        <div>
          Quiz app
        </div>
        <div className='startBtn'>
          <button onClick={this.startQuiz}>Start Quiz</button>
        </div>
        <div>
          <p ref='questions' style={{visibility:'hidden'}}>Questions</p>
        </div>

       </div>
    );
  }
}

export default App;
