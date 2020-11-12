import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider'

const App = () => (
  <div>
    <Slider name="Progress" id="range"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))