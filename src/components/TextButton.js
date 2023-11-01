import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class TextButton extends PureComponent {
    render() {
        const {  text, route } = this.props;
        return (
            <NavLink to={route} className="flex-1 no-underline uppercase font-thin">
                <div className="text-center flex-1 m-4 p-4 bg-transparent hover:bg-white text-white hover:text-grey border focus:outline-none hover:border-transparent rounded">
                    {text}
                </div>
            </NavLink>
        )
    }
}

export default TextButton;