import React from 'react';

export default class Slider extends React.Component {
    state = {
        value: 50
    }


    handleOnChange = (e) => this.setState({value: e.target.value})

    render() {
        return (
            <div>
                <label>{this.props.name}</label><br/>
                <input type="range" id={this.props.id} min={0} max={100} value={this.state.value} onChange={this.handleOnChange} />    <br/> 
            </div>
        )
    }
}
