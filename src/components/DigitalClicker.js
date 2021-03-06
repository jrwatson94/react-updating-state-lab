// Code DigitalClicker Component Here
import { ReactWrapper } from 'enzyme';
import React from 'react';

class DigitalClicker extends React.Component {
    state ={
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+ 1
        }))
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;
