import React, { Component } from 'react';
import './App.css';
import './css/Body.css'
import Header from './components/Header'
import Body from './components/Body'
import Res from './components/Res'
import Refresh from './components/Refresh'
import Fight from './components/Fight'

class App extends Component {
  state={
    player:[
      {name:"pierre", alt:"1", img:"img/rock.jpg"},
      {name:"ciseaux", alt:"0", img:"img/cut.jpg"},
      {name:"papier", alt:"2", img:"img/paper.jpg"}
    ],
    imgComputerTab:[
      "img/cut2.jpg",
      "img/rock2.jpg",
      "img/paper2.jpg"
    ],
    input:"",
    score:0,
    scoreComputer:0,
    mickey:"img/mickey.jpg",
    refresh:"img/refresh.png",
    imgPlayer:"",
    imgComputer:""
  }

  chooseImage =  (e) => { 
    const computerRandom = Math.floor(Math.random() * Math.floor(this.state.player.length));
    const current = e.currentTarget.alt
    const imgPlayer = e.currentTarget.name

    console.log(computerRandom)
    console.log(current)
    console.log(imgPlayer)
    
    if(computerRandom == current){
      const imgComputer = this.state.imgComputerTab[computerRandom]
     this.setState({
      input:"It's the same, try again",
      imgComputer:computerRandom,
      imgPlayer: imgPlayer,
      imgComputer: imgComputer
     })
    }
    else if(((current == 0) && (computerRandom == 2)) || ((current == 1) && (computerRandom == 0)) || ((current == 2) && (computerRandom == 1))){
      const imgComputer = this.state.imgComputerTab[computerRandom]
        this.setState({
        input:"You win !!!!",
        imgComputer:computerRandom,
        score:this.state.score + 1,
        imgPlayer: imgPlayer,
        imgComputer: imgComputer
       })
    }
    else {
      const imgComputer = this.state.imgComputerTab[computerRandom]
        this.setState({
        input:"You lose",
        imgComputer:computerRandom,
        scoreComputer:this.state.scoreComputer + 1,
        imgPlayer: imgPlayer,
        imgComputer: imgComputer
       })
    }
  }

   refresh = () => {
      this.setState({
        score:0,
        scoreComputer:0,
        input:"",
        imgPlayer:"",
        imgComputer:""
      })
   }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} scoreComputer={this.state.scoreComputer}/>
        <Body img={this.state.player} btn={this.chooseImage} addScore={this.addScore}/>
        <Res res={this.state.input}/>
        <Fight name={this.state.imgPlayer} value={this.state.imgComputer}/> 
        <Refresh icon={this.state.refresh} refresh={this.refresh}/>
      </div>
    );
  }
}

export default App;