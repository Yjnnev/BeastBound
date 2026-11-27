
import knightImage from "../assets/knight.png"
import impImage from "../assets/imp.png"
import wizardImage from "../assets/wizard.png"
import voidspawnImage from "../assets/voidspawn.png"

export const CARD_TEMPLATES = {
    knight: {
        name: "Knight",
        image:knightImage,
        hp: 100,
        attack: 25,
        race: "Human",
    },
    imp: {
        name: "Imp",
        image:impImage,
        hp: 50,
        attack: 35,
        race: "Demon",
    },
    wizard: {
        name: "Wizard",
        image:wizardImage,
        hp: 40,
        attack: 60,
        race: "Human",
    },
    voidspawn: {
        name: "VoidSpawn",
        image:voidspawnImage,
        hp: 700,
        attack: 50,
        race: "Voidspawn",
    },
}