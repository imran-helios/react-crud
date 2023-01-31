import React from 'react';

const Input = ({label,handleChange,errorMessage,focused,setFocused, ...otherProps}) => {
    return (
        <div className='inputfield'>
        <label htmlFor="">{label} :</label>
        <input 
        onChange={handleChange}
         {...otherProps}  
         onBlur={()=>setFocused(true)}
         focused = {focused.toString()}
         />
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    );
};

export default Input;