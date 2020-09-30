// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component{
    state = {
        mood: "happy"
    }

    render(){
        

        return(
            <div>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;