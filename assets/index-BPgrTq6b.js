(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}})();const a=document.getElementById("root");let l=[];function o(t){a&&(l.forEach(e=>e.remove()),l=[],a.appendChild(t),l.push(t))}class m{id;name;content;element=null;active=!1;render;constructor(e,i,r,n){this.id=e,this.name=i,this.content=r,this.render=n}init(){if(this.element)return this.element;const e=document.createElement("div");return e.id=this.id,e.className=`screen-${this.name}`,e.style.display="none",typeof this.content=="string"||typeof this.content=="number"?e.innerHTML=String(this.content):typeof this.content=="function"?this.content():e.appendChild(this.content),this.element=e,e}show(){const e=this.init();e.style.display="block",this.active=!0,this.render&&this.render()}hide(){this.element&&(this.element.style.display="none",this.element.innerHTML=""),this.active=!1}getID(){return this.id}isActive(){return this.active}}class h{screensMap=new Map;activeScreenId=null;addNewScreen(...e){e.forEach(i=>{const r=i.getID();if(this.screensMap.has(r))return;const n=i.init();n.style.display="none",o(n),this.screensMap.set(r,i)})}setActiveScreen(e){const i=this.screensMap.get(e);i&&(this.activeScreenId&&this.screensMap.get(this.activeScreenId)?.hide(),i.show(),this.activeScreenId=e)}getAllScene(){return this.screensMap}getActiveScreen(){return this.activeScreenId}}const f={fireball:{name:"Fire ball",damage:20,element:"fire"},firePunch:{name:"Fire punch",damage:10,element:"fire"},"fireball 3":{name:"Fire ball",damage:20,element:"fire"},"firePunch 4":{name:"Fire punch",damage:10,element:"fire"}},p={cards:f},v={mage:{name:"characters.mage.name",hp:100,element:"fire"}},g={hero:v},y={mage:{name:"Маг",description:"Наносит урон с помощью посоха",ability:"Наносит атаку по всем противникам"}},S={characters:y},b={mage:{name:"Maga",description:"Deals damage with a staff",ability:"Attacks all enemies"}},L={characters:b};let M="ru";const w={ru:S,en:L};function A(t="mage"){const e=g.hero[t],r=w[M].characters?.[t]?.name||e.name,n=document.createElement("div");return n.innerHTML=`
        <div class="hero">
            <img src="./assets/sprites/megumin.png" alt="hero" class="hero-img"/> 
            <div>Name: ${r}</div>
            <div>Hp: ${e.hp}</div>                
            <div>Element: ${e.element}</div>                
        </div>
    `,n}function u(){const t=document.createElement("div");return t.innerHTML=`
        <div style="text-align:center;">
            <h1>Выберите карту</h1>
            <div id="cardPicker" style="display:flex; gap:20px; justify-content:center;"></div>
        </div>
    `,requestAnimationFrame(()=>{const e=t.querySelector("#cardPicker");if(!e)return;Object.values(p.cards).forEach(r=>{const n=document.createElement("div");n.style.cssText=`
                border: 2px solid #444;
                border-radius: 12px;
                padding: 16px;
                width: 180px;
                background: #222;
                color: #fff;
                cursor: pointer;
                transition: transform 0.2s;
            `,n.innerHTML=`
                <h3>${r.name}</h3>
                <p>Урон: ${r.damage}</p>
                <p>Элемент: ${r.element}</p>
            `,n.addEventListener("mouseenter",()=>{n.style.transform="scale(1.05)"}),n.addEventListener("mouseleave",()=>{n.style.transform="scale(1)"}),n.addEventListener("click",()=>{s.setActiveScreen("battleScreen")}),e.appendChild(n)})}),t}function E(){const t=document.createElement("div"),e=`
        <div>
            Main menu element!
        </div>
    `;t.innerHTML=e,o(t)}function k(){const t=document.createElement("div");t.innerHTML=`
        <div>
            Battle element!
        </div>
        <button id="back-to-menu">Click</button>
    `,requestAnimationFrame(()=>{const e=t.querySelector("#back-to-menu");e&&e.addEventListener("click",()=>{s.setActiveScreen("mainMenu")})}),t.appendChild(A("mage")),t.appendChild(u()),o(t)}function P(){o(u())}function x(t){if(a){const e=document.createElement("input");e.type="text",e.id="inp",e.classList.add("inp"),e.style.display="none",a.appendChild(e),window.addEventListener("keydown",i=>{if(i.key==="`"||i.key==="ё"){i.preventDefault();const r=e.style.display==="none";e.style.display=r?"block":"none",r&&e.focus()}}),e.addEventListener("change",i=>{const r=i.target;t.getAllScene().has(r.value)&&t.setActiveScreen(r.value)})}}function C(t){const e=Array.from(t.getAllScene().keys()),i=t.getActiveScreen()||e[0],r=e.indexOf(i),n=e[(r+1)%e.length];t.setActiveScreen(n)}function H(t){const e=Array.from(t.getAllScene().keys()),i=t.getActiveScreen()||e[0],r=e.indexOf(i),n=e[(r-1+e.length)%e.length];t.setActiveScreen(n)}function D(t){window.addEventListener("keydown",e=>{const i=t[e.key];i&&(e.preventDefault(),i())})}const s=new h;async function O(){a&&(a.innerHTML="");const t=new m("mainMenu","mainMenu","Main Menu Here",E),e=new m("cardPick","cardPick","Choose wisely...",P),i=new m("battleScreen","battleScreen","Battle!",k);s.addNewScreen(t,e,i),s.setActiveScreen("mainMenu"),x(s),D({ArrowRight:()=>C(s),ArrowLeft:()=>H(s)})}document.addEventListener("DOMContentLoaded",O);
