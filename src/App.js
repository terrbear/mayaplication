import React from 'react';
import _ from 'lodash';

import './App.css';

const random = () => (Math.round(Math.random() * 100) % 10) + 1;

class App extends React.Component {
  state = {
    showUnicorns: false,
    top: random(),
    bottom: 2,
    answer: '',
  };

  handleCheck = () => {
    if (
      parseInt(this.state.answer, 10) ===
      this.state.top * this.state.bottom
    ) {
      this.setState({
        showUnicorns: false,
        top: random(),
        //bottom: random(),
        answer: '',
        showThumbUp: true,
        thumbAnimation: 'fadein',
      });
      setTimeout(() => this.setState({thumbAnimation: 'fadeout'}), 1000);
      setTimeout(() => this.setState({showThumbUp: false}), 2000);
    } else {
      this.setState({
        showUnicorns: true,
        answer: '',
        showThumbDown: true,
        thumbAnimation: 'fadein',
      });
      setTimeout(() => this.setState({thumbAnimation: 'fadeout'}), 2000);
      setTimeout(() => this.setState({showThumbDown: false}), 3000);
    }
  };

  handleAnswerChange = e => {
    this.setState({answer: e.target.value});
  };

  render() {
    return (
      <div
        className="App"
        style={{
          paddingTop: '150px',
          fontSize: '1.5em',
          width: '80%',
          margin: 'auto',
        }}>
        {this.state.showThumbUp && (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              fontSize: '10em',
              animation: this.state.thumbAnimation + ' 2s',
            }}>
            🐶
          </div>
        )}
        {this.state.showThumbDown && (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              fontSize: '10em',
              animation: this.state.thumbAnimation + ' 2s',
            }}>
            👻
          </div>
        )}
        <div style={{float: 'left'}}>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td></td>
                <td style={{fontSize: '1.5em', textAlign: 'right'}}>
                  {this.state.top}
                </td>
              </tr>
              <tr>
                <td>x</td>
                <td style={{fontSize: '1.5em', textAlign: 'right'}}>
                  {this.state.bottom}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    style={{fontSize: '1.5em', textAlign: 'right'}}
                    className="form-control"
                    value={this.state.answer}
                    onChange={this.handleAnswerChange}
                    placeholder="answer"
                    type="text"
                  />
                  <br />
                  <button
                    className="btn btn-success"
                    style={{fontSize: '1.5em', textAlign: 'right'}}
                    onClick={this.handleCheck}>
                    check!
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.showUnicorns &&
        <div style={{marginLeft: '5em', float: 'left'}}>
          <table className="table table-bordered">
            <thead></thead>
            <tbody>
              {_.range(this.state.top).map(row => {
                console.log('in a row!');
                return (
                  <tr key={row}>
                    {_.range(this.state.bottom).map(col => {
                      console.log('in a col!');
                      return (
                        <td
                          style={{
                            backgroundColor: 'rgb(25, 25, 200)',
                            borderWidth: '0.2em',
                          }}
                          key={col}>
                          🦄
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>}
      </div>
    );
  }
}
export default App;
