import React, { Component } from 'react';
import surfboard_1 from '../static/images/surfboard_1.png';
import surfboard_2 from '../static/images/surfboard_2.png';
import surfboard_3 from '../static/images/surfboard_3.png';
import surfboard_4 from '../static/images/surfboard_4.png';
import surfboard_5 from '../static/images/surfboard_5.png';

class Flag extends Component {

    render() {

        return (
            <img className="Illustration"
                 alt={this.props.name}
                 src={(this.props.price) < 120 ? surfboard_1 :
                     (this.props.price) < 250 ? surfboard_2 :
                     (this.props.price) < 300 ? surfboard_3 :
                     (this.props.price) < 450 ? surfboard_4 : surfboard_5
                 }
            />
        );
    }
}

export default Flag;