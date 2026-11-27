
import "./Screens.css"
import { Button } from "../components/Button";
import { RenderDeck } from "../../utility/RenderDeck";
import { useState } from "react";
import { CARD_TEMPLATES } from "../cards/card_data";

export function SelectScreen ({ onBack, onConfirmDeck }){
    const [user_deck, set_user_deck] = useState(JSON.parse(localStorage.getItem("user-deck")) || []);
    const [new_user_deck, set_new_user_deck] = useState([]);

    return (
        <div class="select-screen screen-container">
            <h1>Select Screen</h1>
            <div className="selection-container">
            { RenderDeck(CARD_TEMPLATES) }
            </div>
            <Button onClick={ onConfirmDeck }>Confirm</Button>
            <Button onClick={ onBack }>Back</Button>
        </div>
    );
}