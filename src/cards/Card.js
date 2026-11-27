
import { CARD_TEMPLATES } from "./card_data";

// Generates the values for the card based on the template
export function Card(template_key) {
    template_key = template_key.toLowerCase();
    const template = CARD_TEMPLATES[template_key];

    return {
        id: crypto.randomUUID(),
        ...template,
        initial_hp: template.hp,
    };
}

export function display_info(card) {
    return `
        Name:${card.name} | 
        HP: ${card.hp} | 
        Attack: ${card.attack}\n`;
}