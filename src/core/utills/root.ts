export const root = document.getElementById("root");

let addedElements: HTMLElement[] = [];

export function addToRoot(element: HTMLElement) {
    if (root) {
        addedElements.forEach(el => el.remove());
        addedElements = [];
        root.appendChild(element);
        addedElements.push(element);
    }
}
