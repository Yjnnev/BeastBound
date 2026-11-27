
import "./Screens.css"
import "./CardCollection.css"

import { Button } from "../components/Button";
import { RenderDeck } from "../../utility/RenderDeck";
import { CardUI } from "../components/CardUI";
import { Card } from "../cards/Card";
import { useState } from "preact/hooks";

export function CardCollection ({ onBack }){
    const [user_deck, set_user_deck] = useState([
        Card("knight"), 
        Card("wizard"), 
        Card("imp"),
        Card("voidspawn"), 
        Card("wizard"), 
        Card("imp"),
    ]);

    return (
        <div className="screen-container">
            <h1>Card Collection</h1>

            <div className="collection-deck">
                <RenderDeck deck={user_deck} mode="collection" />
            </div>
            <div>
                <Button onClick={ onBack }>Back</Button>
            </div>
        </div>
    );
}