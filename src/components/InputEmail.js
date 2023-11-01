import React from 'react';

const InputEmail = props => {

    let customCss = "resize-none h-12 w-full p-0 bg-transparent font-white border-none text-white text-md";
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group p-2 border-none">
            <input className={formControl + customCss} {...props}/>
        </div>
    );
}

export default InputEmail;