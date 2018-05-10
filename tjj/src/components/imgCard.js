import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class imgCard extends Component {
    
    render() {
        return (
            <div className="col l2 m3 s6">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.imgSrc} alt="recipe" />
                    </div>
                    <Link to={`/${this.props.id}`}>
                    </Link>
                </div>
            </div>
        )
    }
}

export default imgCard;