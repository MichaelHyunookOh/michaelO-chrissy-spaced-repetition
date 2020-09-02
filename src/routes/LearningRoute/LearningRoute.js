import React, { Component } from "react";
import config from "../../config";
// import "./LearningRoute.css";
import { Input, Label } from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import TokenService from "../../services/token-service";

class LearningRoute extends Component {
  state = {
    head: "",
    total: "",
    wordCorrectCount: "",
    wordIncorrectCount: "",
    guess: "",
    currWord: "",
    answer: "",
    isCorrect: null,
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language/head`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setState({
          head: res.nextWord,
          total: res.totalScore,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount,
          currWord: res.nextword,
        });
      });
  }

  handleNext = () => {
    this.setState({
      answer: "",
      guess: "",
    });
  };

  handleInput = (e) => {
    const guess = e.target.value;
    let lowerCase = guess.toLowerCase();
    this.setState({
      guess: lowerCase,
    });
  };

  render() {
    let result;
    if (this.state.isCorrect === true) {
      result = (
        <>
          <h2 className="correct-prompt">You are correct!</h2>
          <p className="correct-answer-prompt">
            The correct translation for {this.state.currWord} was{" "}
            {this.state.answer} and you chose {this.state.guess}!
          </p>
        </>
      );
    }
    if (this.state.isCorrect === false) {
      result = (
        <>
          <h2 className="incorrect-prompt">Good try, but not quite right</h2>
          <p className="correct-answer-prompt">
            The correct translation for {this.state.currWord} was{" "}
            {this.state.answer} and you chose {this.state.guess}!
          </p>
        </>
      );
    }
    return (
      <section className="learn-section">
        <div className="show-total-score">
          <p className="total">{`Total Score: ${this.state.total}`}</p>
        </div>
        <div className="check-input">
          {!this.state.answer ? (
            <>
              <h2 className="translate">Translate the word:</h2>
              <span className="next-word">{this.state.head}</span>
            </>
          ) : (
            <div className="show-feedback">
              {this.state.isCorrect ? result : result}
            </div>
          )}
        </div>

        {!this.state.answer ? (
          <form className="guess-form">
            <Label htmlFor="guess-input" className="guess-label">
              Translate the word!
            </Label>
            <Input
              id="guess-input"
              type="text"
              value={this.state.guess}
              onChange={(e) => this.handleInput(e)}
              name="guess"
              required
            />
            <Button className="submit" type="submit">
              Submit
            </Button>
          </form>
        ) : (
          <Button className="next-button" onClick={this.handleNext}>
            Next Word
          </Button>
        )}
      </section>
    );
  }
}

export default LearningRoute;
