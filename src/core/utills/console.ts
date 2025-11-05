import { ScreenManager } from "../screens/screen";
import { root } from "./root";

export function debugConsole(screenManager: ScreenManager) {
    if(root) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "inp";
        input.classList.add("inp")
        input.style.display = "none"
        root.appendChild(input);

        window.addEventListener("keydown", (e) => {
            if (e.key === "`" || e.key === "ё") {
                e.preventDefault();
                const isHidden = input.style.display === "none";
                input.style.display = isHidden ? "block" : "none";
                if (isHidden) input.focus();
            }
        });

        // Теперь элемент точно в DOM
        input.addEventListener("change", (e) => {
            const target = e.target as HTMLInputElement
            // if (target.value == "home") {
            //     console.log("Значение:", target.value);
            //     screenManager.setActiveScreen("mainMenu")
            // } else if (target.value == "battle") {
            //     screenManager.setActiveScreen("battleScreen")
            // }

            if(screenManager.getAllScene().has(target.value)) {
                screenManager.setActiveScreen(target.value)
            }
        });
    }
}