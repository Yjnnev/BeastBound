
import "./MainMenu.css"
import "./Screens.css"
import { Button } from "../components/Button";

export function MainMenu({ onStart, onViewCards, onViewProfile }){
    return (
        <div class="screen-container">
        <h1>Main Menu</h1>
        <div className="button-container">
            <Button onClick={ onStart }>Start</Button>
            <Button onClick={ onViewCards }>View Cards</Button>
            <Button onClick={ onViewProfile }>View Profile</Button>
        </div>
        </div>
    );
}