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
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    clicked = id =>{
        let array  =  this.state.clickedimg;
        if(array.includes(id)){
            this.setState({score :0});
            this.setState({clickedimg : []});
            console.log("Game OVer!!");
        }
        else{
        // let temp=0;
        array.push(id);
        this.shuffleArray(this.state.cards);
        this.setState({score: this.state.score+1});
            
        if(this.state.score >= this.state.topscore){
            
            this.setState({topscore:this.state.score});
            }

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
