import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    language: "",
    words: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language`, {
      method: `GET`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setState({
          language: res.language,
          words: res.words,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    return (
      <section className="dashboard">
        <h2>{this.state.language.name}</h2>
        <section className="total-score">
          Total Score: {this.state.language.total_score}
        </section>
        <Link to="/learn" className="practice">
          Practice!
        </Link>
        <ul className="words-list">
          {this.state.words.map((word, index) => {
            return (
              <li key={index} className="card">
                <h4 className="word-title">{word.original}</h4>
                <section className="correct">
                  correct answer count: {word.correct_count}
                </section>
                <section className="incorrect">
                  incorrect answer count: {word.incorrect_count}
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Dashboard;
