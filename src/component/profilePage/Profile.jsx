import {useState} from "react"
import my_profile from '../profilePage/images/avater-profile.png'

const Profile = () => {
    
    return(
        <div className="Outer-Contain">
            <div className="inner-Contain">
                <h1>Welcome</h1>
                <div><img src={my_profile} alt="profile"></img></div>
                <h1>profile picture</h1>
                <div className="P_form">
                    <form className="form">
                    <label>Divers licence number</label>
                    <input type="text" name="driver licence" onChange={}></input>
    
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Profile