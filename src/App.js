import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    nome: "Adriana",
    idade: 43,
    comidaFavorita: "pizza de pepperoni",
    musicasFavoritas: ["Listen to your hear", "Every breath you take", "Rolling in the deep"]
  }

  render(){
    return(
      <>
      <div className='aboutMe'>
        <h1>Olá, meu nome é {this.state.nome}.</h1>
        <h2>Tenho {this.state.idade} anos.</h2>
        <h3>Eu amo comer {this.state.comidaFavorita}.</h3>
        <ul>
          <li>Música favorita n.1: {this.state.musicasFavoritas[0]}</li>
          <li>Música favorita n.2: {this.state.musicasFavoritas[1]}</li>
          <li>Música favorita n.3: {this.state.musicasFavoritas[2]}</li>
        </ul>
      </div>
      <div className='favoriteFruit'>
        <img src='banana.webp' title="Banana com granola"></img>
      </div>
      </>
    )
  }
}
export default App;
