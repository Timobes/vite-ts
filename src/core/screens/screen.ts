import { addToRoot } from "../utills/root"


// TODO:
/**
 * Изменить root 
 * Сделать так, чтобы при вводе в addToRoot(): 
 * addToRoot({funcOne(), funcTwo()})
 * 
 * Потом 
 * {}.map((elem) => {
 *  root.innerHTML += elem
 * })
 * 
 * В funcOne
 * function funcOne() {
 *  const elem = document.createElement("div")
 *  return elem
 * }
 */ 

export class Screen {
    private id: string
    private name: string
    private content: HTMLElement | string | number | (() => void)
    private element: HTMLElement | null = null
    private active: boolean = false
    private render?: () => void

    constructor(id: string, name: string, content: HTMLElement | string | number | (() => void), render?: () => void) {
        this.id = id,
        this.name = name,
        this.content = content,
        this.render = render        
    }

    init() {
        if(this.element) return this.element

        const elem = document.createElement("div")

        elem.id = this.id
        elem.className = `screen-${this.name}`
        elem.style.display = "none"

        if(typeof this.content === "string" || typeof this.content === "number") {
            elem.innerHTML = String(this.content) 
        } else if (typeof this.content == "function") {
            this.content()
        } else {
            elem.appendChild(this.content)
        }

        this.element = elem
        
        return elem
    }

    show() {
        const elem = this.init()
        elem.style.display = "block"
        this.active = true

        if(this.render) {
            this.render()
        }
    }

    hide() {
        if(this.element) {
            this.element.style.display = "none"
            this.element.innerHTML = ""
        }
        this.active = false
    }

    getID() {
        return this.id
    }

    isActive() {
        return this.active
    }
}

export class ScreenManager {
    private screensMap: Map<string, Screen> = new Map()
    private activeScreenId: string | null = null

    addNewScreen(...screens: Screen[]) {
        screens.forEach(screen => {
            const id = screen.getID()
            
            if (this.screensMap.has(id)) {
                return
            }

            const element = screen.init()
            element.style.display = "none"
            addToRoot(element)

            this.screensMap.set(id, screen)
        });
    }

    setActiveScreen(screenID: string) {
        const target = this.screensMap.get(screenID)

        if(!target) {
            return
        }

        if(this.activeScreenId) {
            this.screensMap.get(this.activeScreenId)?.hide()
        }

        target.show()
        this.activeScreenId = screenID
    }

    getAllScene() {
        return this.screensMap
    }

    getActiveScreen() {
        return this.activeScreenId
    }
} 
