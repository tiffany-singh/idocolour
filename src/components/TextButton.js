import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class TextButton extends PureComponent {
    render() {
        const {  text, route } = this.props;
        return (
            <NavLink to={route} className="flex-1 no-underline uppercase font-bold font-mono">
                <div className="text-center flex-1 m-4 p-4 text-white hover:text-grey border focus:outline-none rounded">
                    {text}
                </div>
            </NavLink>
        )
    }
}

export default TextButton;