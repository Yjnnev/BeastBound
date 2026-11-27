
import "./Screens.css"
import { Button } from "../components/Button"

export function GameScreen({ deck, setDeck, onBack }){
    return (
        <div class="screen-container">
            <h1>Game screen</h1>
            <Button onClick={ onBack }>Back</Button>
        </div>
    )
}