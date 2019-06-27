
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Note from './Components/Note'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noteText: '',
       notes:[]
    }
    this.addNote =this.addNote.bind(this)
  }
  updateNoteText(noteText){
    this.setState({
      noteText: noteText.target.value
    })
  }
  addNote(){
    if(this.state.noteText === '') {return}
     let notesArr = this.state.notes;
     notesArr.push(this.state.noteText)
     this.setState({ 
       noteText: ''
      })
     this.textInput.focus();
  }
  
  handleKeyPress =(event)=>{
    if(event.key === 'Enter'){

    }
  }
  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({
      notes: notesArr
    })

  }
  
  render() {
    let notes=this.state.notes.map((val, key)=> {
      return(
        <Note key={key} text={val} deleteMethod={()=> this.deleteNote(key)}/>
      )
    })
    
    return (
      <div>
        <div className='container'>
          <div className='header'>React Todo Application</div>
          {notes}

          <div className='btn' onClick={this.addNote}>+</div>

          <input type='text' 
                ref = {(input) => {this.textInput = input} }
                value={ this.state.noteText}
                className= 'textInput'
                onChange={noteText => this.updateNoteText(noteText)}
                onKeyPress={this.handleKeyPress.bind(this)} />
      
        </div>
        
      </div>
    )
  }
}

export default App

