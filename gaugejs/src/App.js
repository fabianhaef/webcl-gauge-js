import React, { Component } from 'react';
import './App.css';


const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  ratio: '15.91549430918954'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressRange: "25 75",
      p: 25,
      thresholdRange: "25 75",
      t: 25,
      size:"10rem",
      s:10
    }
  }
  
  handleProgressRange = (e) => {
    let v = e.target.value;
    v = 100 - v;
    let p = 100 - v;
    v = v.toString();
    p = p.toString();
    let temp = p + " " + v;
    this.setState({ p: p });
    this.setState({ progressRange: temp });
  }

  handleThresholdRange = (e) => {
    let v = e.target.value;
    v = 100 - v;
    let t = 100 - v;
    v = v.toString();
    t = t.toString();
    let temp = t + " " + v;
    this.setState({ t: t });
    this.setState({ thresholdRange: temp });
  }

  handleSize=(e)=>{
    let s=e.target.value;
    this.setState({ s:s  });
    s=s.toString();
    let temp=s+"rem";
    this.setState({ size:temp  });
  }
  render() {
    const {size} = this.state;
    const style={
      width:size,
    }
    return (
      <React.Fragment>
        <div className="container">
          <h1>Custom Component: Progress Indicator Gauge</h1>
          <figure className="figure" style={style}>
            <svg viewBox={circleConfig.viewBox}>
              <circle
                className="ring"
                cx={circleConfig.x}
                cy={circleConfig.x}
                r={circleConfig.ratio}
                fill="transparent"
                stroke="gray"
              />

              <circle
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.x}
                r={circleConfig.ratio}
                fill="transparent"
                stroke="#e6e6e6"
                strokeDasharray={this.state.thresholdRange}
                strokeDashoffset="25"
                stroke-opacity="0.3"

              />
              <circle
                class="progress-circle"
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.x}
                r={circleConfig.ratio}
                fill="transparent"
                stroke="#34308F"
                strokeDasharray={this.state.progressRange}
                strokeDashoffset="25"
              />

                  
              <g className="circle-label">
                <text x="50%" y="50%" className="circle-percentage">
                  {this.state.p}%
          </text>
                <text x="50%" y="50%" className="circle-text">
                  COMPLETE
          </text>
              </g>
            </svg>
          </figure>
          <p>Progress</p>
          <input type="range" value={this.state.p} min="0" max="100" onChange={this.handleProgressRange} class="slider"></input>
          <p>Threshold</p>
          <input type="range" value={this.state.t} min="0" max="100" onChange={this.handleThresholdRange} class="slider"></input>
          <p>Size</p>
          <input type="range" value={this.state.s} min="10" max="30" onChange={this.handleSize} class="slider"></input>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

