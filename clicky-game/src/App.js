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
        clickedimg:[],
        text:""
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
            this.setState({text:"Game OVer!!"});
        }
        else{
        // let temp=0;
            if(this.state.score === 12){
                this.setState({text:"You Win!!"});
            }

        array.push(id);
        const newScore =this.state.score + 1;
        this.shuffleArray(this.state.cards);
        this.setState({score: newScore});
        this.setState({text:"You are Correct!!"});
            
        if(newScore >= this.state.topscore){
            
            this.setState({topscore:newScore});
            }

        console.log(array);
    }
}

    render() {
        return (
            // <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
           <div>
            <Navbar score={this.state.score} topscore={this.state.topscore}/>
            
            <Jumbotron text={this.state.text} />
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
