import React, {PureComponent} from 'react';
import { NavLink } from 'react-router-dom';

class ImageButton extends PureComponent {
    render() {
        const {route, label, imgSrc} = this.props; 
        return ( 
            <NavLink to = {route} className="group md:w-2/5 hover:opacity-50 no-underline m-12">
                <div 
                style={{ backgroundImage: `url(${imgSrc})`}} 
                className="
                bg-cover
                bg-center
                h-64
                w-auto
                text-white
                hover:text-black
                " 
                >
                    <div className = "flex-wrap pt-4 pl-4" >
                        <p className="tracking-wide text-4xl uppercase font-sans font-thin">
                            {label}
                        </p>
                    </div> 
                </div>
            </NavLink>
        );
    }
}

export default ImageButton