import React from "react";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Card from "./components/card/card"
import cards from "./card.json";

class App extends React.Component{ 

    state={
        cards,
        score:0,
        topscore:0,
        clickedimg:[]
    };

    clicked = id =>{
        let array  =  this.state.clickedimg;
        if(array.includes(id)){
            this.setState({score :0});
            this.setState({topscore : 0});
            this.setState({clickedimg : []});
            console.log("Game OVer!!");
        }
        else{
        array.push(id);
        console.log(array);
    }
}

    render() {
        return (
            // <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
           <div>
            <Navbar score={this.state.score} topscore={this.state.topscore}/>
            <Jumbotron />
            {this.state.cards.map(card => (
              <Card
              clicked={this.clicked}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
            </div>
    );
      }
}
export default App;
