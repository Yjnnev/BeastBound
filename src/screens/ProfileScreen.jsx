
import "./Screens.css"
import "./ProfileScreen.css"

import { Button } from "../components/Button"
import { Dialog } from "../components/Dialog";
import { useState } from "react";

export function ProfileScreen({ onBack }){
    const [user_name, set_username] = useState(localStorage.getItem("username") || "Guest");   
    const [new_username, set_new_username] = useState("");
    const [show_dialog, set_show_dialog] = useState(false);

    function save_profile(){
        localStorage.setItem("username", new_username);
        set_username(new_username);
        set_show_dialog(false);
    }
    return (
        <div className="screen-container">
            <h1>Profile Screen</h1>
            <h2>Hi {user_name}!</h2>
            <Button onClick={() => set_show_dialog(true)}>Edit Profile</Button>
            <Button onClick={onBack}>Back</Button>

            {show_dialog && (
            <Dialog onClose={() => set_show_dialog(false)}>
                <label htmlFor="username-input">Username: </label>
                <input 
                id="username-input"
                type="text" 
                placeholder="Enter your new username"
                value={new_username}
                onInput={(e) => set_new_username(e.target.value)}
                />

                <div className="edit-profile-dialog-buttons">
                <Button onClick={() => save_profile()}>Save</Button>
                <Button onClick={() => set_show_dialog(false)}>Cancel</Button>
                </div>
            </Dialog>
            )}
        </div>
    )
}