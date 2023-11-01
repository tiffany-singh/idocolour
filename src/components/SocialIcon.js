import React, {PureComponent} from 'react';
import { NavLink } from 'react-router-dom';

class SocialIcon extends PureComponent {
    render() {
        const {route, imgSrc} = this.props; 
        return ( 
            <a href = {route} className="hover:opacity-50 no-underline">
                <div 
                style={{ backgroundImage: `url(${imgSrc})`}} 
                className="
                w-12
                h-12
                mx-24
                my-4
                bg-cover
                bg-center
                " 
                >
                </div>
            </a>
        );
    }
}

export default SocialIcon