import React from 'react';

const Input = props => {

    let customCss = "resize-none h-12 w-full bg-transparent text-white text-md";
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    if(props.size==="lg")
    {
        customCss = "resize-none flex-grow w-full h-32 bg-transparent text-white text-md"
    }

    return (
        <div className="form-group p-2">
            <textarea className={formControl, customCss} {...props}/>
        </div>
    );
}

export default Input;