import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(){
    const {user} = useContext(UserContext)

       console.log("User:", user);
       
    if (!user) return <div> Please Login</div>

    return <div>Welcome {user.username}  {user.password}</div>
}

export default Profile