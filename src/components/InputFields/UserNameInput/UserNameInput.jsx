import React from "react";
import './UserNameInput.less';
const UsernameInput = ({user, handleChange}) => {
    return ( 
        <div className="input-field">
            <input type="text" name="name" value={user} onChange={handleChange} placeholder="Your username" />
         </div>
     );
}
 
export default UsernameInput;