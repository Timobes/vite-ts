import { screenManager } from "../../main";
import { addToRoot } from "../utills/root";
import cardData from "../stats/card.json"
import { characterRender } from "./characterRender";

export function cardPick(): HTMLElement {
    const div = document.createElement("div")
    div.innerHTML = `
        <div style="text-align:center;">
            <h1>Выберите карту</h1>
            <div id="cardPicker" style="display:flex; gap:20px; justify-content:center;"></div>
        </div>
    `;

    // addToRoot(div)

    requestAnimationFrame(() => {
        const cardContainer = div.querySelector("#cardPicker") as HTMLElement;
        if (!cardContainer) return;

        const cards = Object.values(cardData.cards);

        cards.forEach((card: any) => {
            const cardEl = document.createElement("div");
            cardEl.style.cssText = `
                border: 2px solid #444;
                border-radius: 12px;
                padding: 16px;
                width: 180px;
                background: #222;
                color: #fff;
                cursor: pointer;
                transition: transform 0.2s;
            `;
            cardEl.innerHTML = `
                <h3>${card.name}</h3>
                <p>Урон: ${card.damage}</p>
                <p>Элемент: ${card.element}</p>
            `;
            cardEl.addEventListener("mouseenter", () => {
                cardEl.style.transform = "scale(1.05)";
            });
            cardEl.addEventListener("mouseleave", () => {
                cardEl.style.transform = "scale(1)";
            });
            cardEl.addEventListener("click", () => {
                screenManager.setActiveScreen("battleScreen");
            });

            cardContainer.appendChild(cardEl);
        });
    });

    return div
}

export function homeScreen() {
    const div = document.createElement("div")
    const element = `
        <div>
            Main menu element!
        </div>
    `
    div.innerHTML = element
    addToRoot(div)
}

export function battleScreen() {
    const div = document.createElement("div")
    
    div.innerHTML = `
        <div>
            Battle element!
        </div>
        <button id="back-to-menu">Click</button>
    `
    requestAnimationFrame(() => {
        const btn = div.querySelector("#back-to-menu") as HTMLButtonElement;
        if (btn) {
            btn.addEventListener("click", () => {
                screenManager.setActiveScreen("mainMenu");
            });
        }
    });

    // const cardPick = cardPick()
    // const characters = characterRender("mage")

    div.appendChild(characterRender("mage"))
    div.appendChild(cardPick())

    addToRoot(div)
}

export function cardPickScreen() {
    addToRoot(cardPick())
}