import "./CardUI.css";

export function CardUI({ card, is_selected = false, on_card_click, mode = "combat" }) {
    const hp_percent = Math.max(0, Math.min(100, (card.hp / card.initial_hp) * 100));
    mode = mode.toLowerCase();

    return (
        <div
            className={`card_ui ${is_selected ? "selected" : ""}`}
            onClick={on_card_click}
        >
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>

            {mode === "collection" ? (
                <p>HP: {card.hp}</p>
            ) : (
                <div className="hp-bar">
                    <span>HP: {card.hp} / {card.initial_hp}</span>
                    <div
                        className="hp-fill"
                        style={{ width: `${hp_percent}%` }}
                    />
                </div>
            )}

            <p>Attack: {card.attack}</p>
        </div>
    );
}