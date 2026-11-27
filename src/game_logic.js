
export function calculate_attack(deck, attacker, receiver){
    return deck.map(card => {
        if (card.id === receiver.id)
            return { ...card, hp: Math.max(0, card.hp - attacker.attack) };
        return card;
    });
}