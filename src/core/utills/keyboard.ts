import { ScreenManager } from "../screens/screen"

export function consoleDisplayToggle() {
    const consoleMaster = document.getElementById("inp")
    if(consoleMaster) {
        if (consoleMaster.style.display === "none") {
            consoleMaster.style.display = "block"
        } else {
            consoleMaster.style.display = "none"
        }
    }
}

export function changeNewScene(screenManager: ScreenManager) {
    const ids = Array.from(screenManager.getAllScene().keys());
    const current = screenManager.getActiveScreen() || ids[0];
    const i = ids.indexOf(current);
    const next = ids[(i + 1) % ids.length];
    screenManager.setActiveScreen(next);
}

export function changePrevScene(screenManager: ScreenManager) {
    const ids = Array.from(screenManager.getAllScene().keys());
    const current = screenManager.getActiveScreen() || ids[0];
    const i = ids.indexOf(current);
    const prev = ids[(i - 1 + ids.length) % ids.length];
    screenManager.setActiveScreen(prev);
}

export function keyDown(keyMap: Record<string, () => void>) { 
    window.addEventListener('keydown', (e) => {
        
        // console.log("keyDown: ", e)
        
        const action = keyMap[e.key]
        
        if(action) {
            e.preventDefault()
            action()
        }
    })
}
