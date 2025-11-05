import heroData from "../stats/hero.json"
import ruLangData from "../../locales/ru.json"
import enLangData from "../../locales/en.json"

let actualLang: "ru" | "en" = "ru"

const langMap = {
    ru: ruLangData,
    en: enLangData
}

export function characterRender(heroTag: string = "mage"): HTMLElement {
    const heroStats = heroData.hero[heroTag as keyof typeof heroData.hero]
    // if (!heroStats) return

    const lang = langMap[actualLang]
    const heroName = lang.characters?.[heroTag as keyof typeof lang.characters]?.name || heroStats.name

    const elem = document.createElement("div")
    elem.innerHTML = `
        <div class="hero">
            <img src="./assets/sprites/megumin.png" alt="hero" class="hero-img"/> 
            <div>Name: ${heroName}</div>
            <div>Hp: ${heroStats.hp}</div>                
            <div>Element: ${heroStats.element}</div>                
        </div>
    `
    return elem
    // addToRoot(elem)
}