import { Screen, ScreenManager } from "./core/screens/screen";
import { battleScreen, cardPickScreen, homeScreen } from "./core/screens/screensELement";
import { debugConsole } from "./core/utills/console";
import { changeNewScene, changePrevScene, keyDown } from "./core/utills/keyboard";
import { root } from "./core/utills/root";
import "./ui/styles/style.css";

export const screenManager = new ScreenManager()

async function init() {
    if (root) {
        root.innerHTML = ""
    }

    const mainMenu = new Screen("mainMenu", "mainMenu", "Main Menu Here", homeScreen);
    const cardPick = new Screen("cardPick", "cardPick", "Choose wisely...", cardPickScreen);
    const battle = new Screen("battleScreen", "battleScreen", "Battle!", battleScreen);

    screenManager.addNewScreen(mainMenu, cardPick, battle);
    screenManager.setActiveScreen("mainMenu")

    debugConsole(screenManager)

    keyDown({
        'ArrowRight': () => changeNewScene(screenManager),
        'ArrowLeft': () => changePrevScene(screenManager),
    })

}

document.addEventListener('DOMContentLoaded', init)