
import { CardUI } from "../src/components/CardUI"

export function RenderDeck({ deck = [], mode = "collection" }){
    return (
        <>
            {deck.map((card) => (
                <CardUI
                    key={card.id}
                    card={card}
                    mode={"collection"}
                />
            ))}
        </>
    )
}