import{n as e}from"./catalog-BxXGgzqa.js";import{D as t,w as n}from"./cities-CELnO10E.js";import{C as r,N as i,P as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as f,f as p,h as m,j as h,l as g,n as _,p as v,r as y,s as b,u as x,w as ee,x as S}from"./pack-DYhoRVJz.js";function C(e,t,n,r=!0){let i={...n,items:[...n.items.filter(e=>e!==t),t]},a={...n,items:n.items.filter(e=>e!==t)};for(let n of e.options)if(!(r&&n.when&&!n.when(i))){if(n.needs===t)return!0;for(let e of n.chance?.mods??[])if(e.slips>0&&e.when(i)&&!e.when(a))return!0}return!1}var w=e=>e.charAt(0).toLowerCase()+e.slice(1);function T(e,t){return!e.when||e.when(t)?!0:e.when({...t,flags:[...t.flags,`concert_tickets`,`inside`]})}function E(e,r,i,a){let o={},s={};for(let c of e){let e=t(c.id)?n[c.id]:null;if(e?e.requires&&!a.includes(e.requires):!T(c,r))continue;let l=e?e.risk:w(c.title),u=e?s:o;for(let t of i)C(c,t,r,!e)&&!(u[t]??=[]).includes(l)&&u[t].push(l)}return Object.fromEntries(i.map(e=>[e,[...o[e]??[],...s[e]??[]]]))}var D=null;function te(n,r=3){if(!D){D={};let n={night:{},concert:{},city:{},incident:{}};for(let r of e()){let e=t(r.id)?`incident`:r.chapter,i=w(r.ev.title);for(let t of r.ev.options){let r=new Set(t.needs?[t.needs]:[]);for(let t of r)(n[e][t]??=[]).includes(i)||n[e][t].push(i)}}let r=new Set(Object.values(n).flatMap(e=>Object.keys(e)));for(let e of r){let t=[`night`,`concert`,`city`,`incident`].map(t=>[...n[t][e]??[]]),r=[];for(let e=0;r.length<8&&t.some(e=>e.length);e++){let n=t[e%t.length].shift();n&&!r.includes(n)&&r.push(n)}D[e]=r}}return(D[n]??[]).slice(0,r)}var O=3,k=[`#f3dfb6`,`#d9ecdf`,`#ead9e6`,`#d8e4ef`,`#f1d5c5`,`#e9e4c4`,`#dfe8cf`],A=e=>{let t=Object.keys(a).indexOf(e);return k[(t>=0?t:[...e].reduce((e,t)=>e+t.charCodeAt(0),0))%k.length]},j=e=>h(e).checkedOnly?`🧳`:h(e).cabinOnly?`🎒`:``,M=(e,t)=>t===`carry`?!!h(e).checkedOnly:!!h(e).cabinOnly,ne=(e,t)=>t===`carry`?`⚠ ${h(e).name.toLowerCase()} в рюкзаке изымут на досмотре — только в чемодан 🧳`:`⚠ ${h(e).name.toLowerCase()} в сданном чемодане изымут — батареи только в рюкзак 🎒`;function N(e,t,n,r=``){let i=S(e,t),a=Math.max(...i.map(e=>e[0]))+1,o=Math.max(...i.map(e=>e[1]))+1,s=h(e),c=j(e),l=new Set(i.map(([e,t])=>`${e},${t}`)),u=(e,t)=>!l.has(`${e},${t}`),d=i.length===a*o,f=i.reduce((e,t)=>e+t[0],0)/i.length+.5,p=i.reduce((e,t)=>e+t[1],0)/i.length+.5;if(!l.has(`${Math.min(a-1,Math.floor(f))},${Math.min(o-1,Math.floor(p))}`)){let e=([e,t])=>(e+.5-f)**2+(t+.5-p)**2,t=i.reduce((t,n)=>e(n)<e(t)?n:t,i[0]);[f,p]=[t[0]+.5,t[1]+.5]}let m=d&&Math.min(a,o)>1?.95:i.length>=5?.8:.62,g=i.reduce((e,t,n)=>t[1]<i[e][1]||t[1]===i[e][1]&&t[0]>i[e][0]?n:e,0),_=i.map(([e,t],n)=>{let r=u(e,t-1),i=u(e+1,t),a=u(e,t+1),o=u(e-1,t);return`<span class="pk-sq" style="left:calc(var(--u) * ${e});top:calc(var(--u) * ${t});${`--et:${+r};--er:${+i};--eb:${+a};--el:${+o};border-radius:${r&&o?`4px`:0} ${r&&i?`4px`:0} ${a&&i?`4px`:0} ${a&&o?`4px`:0}`}">${n===g&&c?`<b class="pk-rule" title="${c===`🧳`?`только в сданный чемодан`:`только в ручную кладь — рюкзак`}">${c}</b>`:``}</span>`}).join(``),v=`<i class="pk-ico" style="left:calc(var(--u) * ${f.toFixed(3)});top:calc(var(--u) * ${p.toFixed(3)});font-size:calc(var(--u) * ${m})">${s.icon}</i>`;return`<div class="pk-item ${n}${e.startsWith(`sv_`)?` sv`:``}" data-item="${e}" style="--w:${a};--h:${o};--tint:${A(e)};${r}" title="${s.name}">${_}${v}</div>`}function re(e){let t=i[e].fixed,n=c(t.shape),r=new Set(n.map(([e,t])=>`${e},${t}`)),a=(e,t)=>+!r.has(`${e},${t}`),o=e=>n.filter(t=>t[1]===e).length,s=n.map(e=>e[1]).reduce((e,t)=>o(t)>o(e)?t:e,n[0][1]),l=Math.min(...n.filter(e=>e[1]===s).map(e=>e[0])),u=n.find(e=>e[1]!==s);return`${n.map(([e,n])=>{let r=a(e,n-1),i=a(e+1,n),o=a(e,n+1),s=a(e-1,n),c=t.x+e,l=t.y+n;return`<span class="pk-fsq" style="left:calc(var(--c) * ${c});top:calc(var(--c) * ${l});--gx:${c};--gy:${l};--et:${r};--er:${i};--eb:${o};--el:${s};border-radius:${r&&s?`4px`:0} ${r&&i?`4px`:0} ${o&&i?`4px`:0} ${o&&s?`4px`:0}">${u&&u[0]===e&&u[1]===n?t.icon:``}</span>`}).join(``)}<div class="pk-fixed" style="left:calc(var(--c) * ${t.x+l});top:calc(var(--c) * ${t.y+s});--w:${o(s)};--h:1">${u?``:t.icon}<small>${t.label}</small></div>`}function P(e,t){let n=44,c=null,C=null,w=!1,T=null,E=[],D=null,k=!1,A=!1,j=0,P=0,F=()=>matchMedia(`(pointer: coarse)`).matches,ie=t=>{let r=Math.max(240,e.clientWidth||340)-8,a=i[t],o=Math.floor(window.innerHeight*(F()?.35:.4)/(a.rows+O));n=Math.max(28,Math.min(F()?60:50,Math.floor(r/a.cols),o)),e.style.setProperty(`--c`,`${n}px`),e.style.setProperty(`--tc`,`${F()?30:22}px`)},I=()=>t.floor?.()??Object.values(a).filter(e=>e.packable).map(e=>e.id),L=()=>{let e=new Set(t.pack().map(e=>e.id)),n=t.home();return I().filter(t=>!e.has(t)&&!n[t])},R=()=>{let e=L();!c||!e.length?C=null:!C||!e.includes(C.id)?C=x(e[0],c):C.bag!==c&&(C=x(C.id,c,C.r,C.x))},ae=(e=``)=>{if(e)return`<span class="pk-warn">${e}</span>`;if(!C)return`<span class="pk-hint-text">${t.empty??`стол пуст — всё едет с вами`}</span>`;if(M(C.id,C.bag))return`<span class="pk-warn">${ne(C.id,C.bag)}</span>`;if(t.describe)return t.describe(C.id);let n=a[C.id],r=te(C.id,3);return`${n.icon} <b>${n.name}</b> · ${p(n.kg)} — ${n.hint}${r.length?`<small class="pk-uses">пригодится: ${r.join(` · `)}</small>`:``}`},oe=()=>{let e=C&&t.act?.label(C.id);return e?` <button type="button" class="pk-act" data-k="act">${e}</button>`:``},z=(t=``,n=!0)=>{let r=e.querySelector(`.pk-info`);r&&(r.innerHTML=ae(t)+(n?oe():``))},B=(e,n)=>{let r=_(n,e,t.tuning),a=m(n,[e],t.tuning).length>0,o=e===`carry`?`Рюкзак`:e===`goose`?`Гуся`:e===`llama`?`Ламы`:`Новый`;return`<button type="button" class="pk-tab${e===c?` on`:``}${a?` over`:``}" data-tab="${e}">${i[e].icon} ${o} <b>${p(r).replace(` кг`,``)}/${v(e,t.tuning)}</b></button>`},se=(e,n)=>{let r=v(n,t.tuning),a=m(e,[n],t.tuning)[0],o=n===`carry`?`рюкзак`:i[n].name.toLowerCase();return a?n===`carry`?a.pockets?`перевес ${p(a.over)} — Гусь рассуёт по карманам`:`перевес ${p(a.over)} — сдать у выхода ${t.ramen(a.yen)}`:`перевес ${p(a.over)} — доплата ${t.ramen(a.yen)}`:`${p(_(e,n,t.tuning))} из ${r} кг · ${n===`carry`?`лоукостер взвесит`:o}`};function V(){let n=t.bags();(!c||!n.includes(c))&&(c=n.find(e=>e!==`carry`)??`carry`);let r=c,a=i[r],o=t.pack(),s=t.home();ie(r),k&&(!C||!L().includes(C.id))&&(k=A=!1,window.clearTimeout(P)),R();let l=o.filter(e=>e.bag===r).map(e=>N(e.id,e.r,`in${e.id===T?` landed`:``}${M(e.id,e.bag)?` wrong`:``}`,`left:calc(var(--c) * ${e.x});top:calc(var(--c) * ${e.y})`)).join(``),u=f(o,t.tight()).filter(e=>e.startsWith(`${r}:`)).map(e=>Number(e.split(`:`)[1])).map(e=>`<i class="pk-row${E.includes(e)?` fresh`:``}" style="top:calc(var(--c) * ${e})"><span>идеально!</span></i>`).join(``),d=m(o,[r],t.tuning).length>0,p=I().filter(e=>!o.some(t=>t.id===e)).map(e=>N(e,0,`table${s[e]?` home`:``}${C?.id===e?` sel`:``}`)).join(``),h=C?``:` disabled`;e.innerHTML=`<div class="pk-tabs n${n.length}">${n.map(e=>B(e,o)).join(``)}</div><div class="pk-well ${r}${d?` over`:``}" style="--cols:${a.cols};--rows:${a.rows};--air:${O}"><div class="pk-air"></div><div class="pk-grid" data-grid="${r}">${re(r)}${l}${u}</div></div><div class="pk-note${d?` over`:``}">${se(o,r)}${o.some(e=>e.bag===r)?` · <button type="button" class="pk-out" data-k="empty">↥ вытащить всё</button>`:``}</div><div class="pk-ctl"><button type="button" data-k="left" aria-label="влево"${h}>←</button><button type="button" data-k="turn" aria-label="повернуть"${h}>⟳</button><button type="button" data-k="right" aria-label="вправо"${h}>→</button><button type="button" data-k="drop" class="drop" aria-label="бросить"${h}>↓</button><button type="button" data-k="skip" aria-label="оставить на столе"${h}>✕</button><button type="button" data-k="auto" class="auto">Сложить само</button></div><p class="pk-info">${ae()}${oe()}</p><div class="pk-table">${p||`<span class="pk-empty">${t.empty??`стол пуст — всё едет с вами`}</span>`}</div>`;let g=T!==null;T=null,E=[],H(g)}function H(n=!0){let r=e.querySelector(`.pk-well`),i=e.querySelector(`.pk-grid`);if(!r||!i)return;i.querySelectorAll(`.pk-ghostcell`).forEach(e=>e.remove());let a=r.querySelector(`.pk-item.fall`);if(!C){a?.remove();return}let o=C;if(!a||a.dataset.item!==o.id||a.dataset.r!==String(o.r)){let e=a?.dataset.item;a?.remove(),r.insertAdjacentHTML(`beforeend`,N(o.id,o.r,`fall${n&&e!==o.id?` enter`:``}`)),a=r.querySelector(`.pk-item.fall`),a.dataset.r=String(o.r)}a.style.transition=k?`top ${t.tuning.fallMsPerRow}ms linear, left 0.1s ease-out`:``,a.classList.toggle(`lock`,A);let s=e.querySelector(`[data-k="drop"]`);s&&(s.textContent=k?`⤓`:`↓`,s.setAttribute(`aria-label`,k?`сразу вниз`:`отпустить — падает по клетке`)),a.style.left=`calc(var(--c) * ${o.x})`,a.style.top=`calc(var(--c) * ${O+o.y})`;let c=D?{at:D,ok:!0}:l(t.pack(),o),u=y(c.at).filter(([,e])=>e>=0),d=new Set(u.map(([e,t])=>`${e},${t}`)),f=(e,t)=>+!d.has(`${e},${t}`);for(let[e,t]of u){let n=document.createElement(`i`);n.className=`pk-ghostcell ${c.ok?M(o.id,o.bag)?`warn`:`ok`:`bad`}`,n.style.cssText=`left:calc(var(--c) * ${e});top:calc(var(--c) * ${t});--et:${f(e,t-1)};--er:${f(e+1,t)};--eb:${f(e,t+1)};--el:${f(e-1,t)}`,i.appendChild(n)}}let U=t=>{t&&c&&L().includes(t)&&(C=x(t,c)),D=null,z(),e.querySelectorAll(`.pk-item.table.sel`).forEach(e=>e.classList.remove(`sel`)),C&&e.querySelector(`.pk-item.table[data-item="${C.id}"]`)?.classList.add(`sel`),H()},W=()=>{let t=e.querySelector(`.pk-item.fall`);t&&(t.classList.remove(`wiggle`,`enter`),t.offsetWidth,t.classList.add(`wiggle`))},G=()=>e.querySelector(`.pk-item.fall`),K=()=>{k=!1,A=!1,window.clearTimeout(P)},q=e=>{W(),t.fail(e.id),z(`↑ не влезает — крышка не закроется: поверните или в другую сумку`)},ce=(e,n)=>{let r=t.pack(),i=g(r,n.bag),a=[...r.filter(t=>t.id!==e.id),n];T=e.id,E=g(a,n.bag).filter(e=>!i.includes(e));let o=L(),s=o.filter(t=>t!==e.id);C=s.length?x(s[Math.max(0,o.indexOf(e.id))%s.length],n.bag):null,t.change(a,{id:e.id,kind:`place`,bag:n.bag,x:n.x,y:n.y,rows:E}),M(e.id,n.bag)&&z(ne(e.id,n.bag),!1)},le=n=>{if(!C)return;let r=C;K(),D=null,w=!0;let i=G(),a=Math.max(160,(n.y-r.y)*t.tuning.dropMsPerRow);e.querySelectorAll(`.pk-ghostcell`).forEach(e=>e.remove()),i&&(i.classList.remove(`enter`,`wiggle`),i.style.transition=`top ${a}ms cubic-bezier(0.5, 0, 0.85, 0.55), left ${Math.min(a,220)}ms ease-out`,i.style.left=`calc(var(--c) * ${n.x})`,i.style.top=`calc(var(--c) * ${O+n.y})`),window.setTimeout(()=>{w=!1,ce(r,n)},a)},J=()=>{if(!k||!C)return K();let e={...C,y:C.y+1};if(b(t.pack(),e))C=e,A=!1,H(!1),P=window.setTimeout(J,t.tuning.fallMsPerRow);else if(!A)A=!0,H(!1),P=window.setTimeout(J,t.tuning.lockMs);else{let e=C;if(K(),y(e).some(([,e])=>e<0))return q(e),C=x(e.id,e.bag,e.r,e.x),H();w=!0,window.setTimeout(()=>{w=!1,ce(e,e)},60)}},ue=()=>{k&&C&&A&&(window.clearTimeout(P),b(t.pack(),{...C,y:C.y+1})?(A=!1,P=window.setTimeout(J,t.tuning.fallMsPerRow/2)):P=window.setTimeout(J,j++<12?t.tuning.lockMs:0),H(!1))},Y=(e,n=!1)=>{if(!C)return!1;let r={...C,x:C.x+e};return b(t.pack(),r)?(C=r,H(!1),ue(),!0):(n||W(),!1)},X=e=>{if(!C||w)return;if(k){Y(e);return}let t=o(C,e);t.x===C.x&&W(),C=t,D=null,H()},Z=()=>{if(!C||w)return;if(k){let e=(C.r+1)%4;for(let[n,r]of[[0,0],[-1,0],[1,0],[-2,0],[0,-1]]){let i={...C,r:e,x:C.x+n,y:C.y+r};if(b(t.pack(),i)){C=i,H(!1),ue();return}}return W()}let e=ee(C);e.r!==C.r&&JSON.stringify(S(e.id,e.r))===JSON.stringify(S(C.id,C.r))&&W(),C=e,D=null,H()},de=()=>{if(!C||w)return;let e=L();if(e.length<2)return W();K(),U(e[(e.indexOf(C.id)+1)%e.length])},fe=()=>{if(!C||w)return;let e=l(t.pack(),C);if(!e.ok)return K(),q(C),C=x(C.id,C.bag,C.r,C.x),H();le(e.at)},Q=e=>{if(C&&!w){if(D=null,e)return le(e);if(k)return fe();b(t.pack(),{...C,y:C.y+1})?(k=!0,A=!1,j=0,H(!1),P=window.setTimeout(J,t.tuning.fallMsPerRow*.6)):q(C)}},pe=e=>{if(w||k)return;let n=t.pack(),r=n.find(t=>t.id===e);r&&(C=x(e,r.bag,r.r,r.x),t.change(u(n.filter(t=>t.id!==e),r.bag),{id:e,kind:`remove`,bag:r.bag}))},me=()=>{if(w||k||!c)return;let e=t.pack(),n=e.filter(e=>e.bag===c);n.length&&(D=null,C&&=x(C.id,c,C.r,C.x),t.change(e.filter(e=>e.bag!==c),{id:n[0].id,kind:`clear`,bag:c}))},he=(t,r)=>{let a=e.querySelector(`.pk-grid`)?.getBoundingClientRect();if(!a||!c)return null;let o=Math.floor((t-a.left)/n),s=Math.floor((r-a.top)/n);return o>=0&&s>=0&&o<i[c].cols&&s<i[c].rows?[o,s]:null},ge=([e,n])=>!!c&&![...d(c),...t.pack().filter(e=>e.bag===c).flatMap(y)].some(([t,r])=>t===e&&r===n),_e=(e,n)=>{let i=he(e,n);return i&&C?r(t.pack(),C,i[0],i[1]):null};e.addEventListener(`click`,e=>{let n=e.target,r=n.closest(`[data-tab]`);if(r){if(w||k)return;c=r.dataset.tab,C&&=x(C.id,c,C.r,C.x),V();return}let i=n.closest(`[data-k]`)?.dataset.k;if(i){i===`left`?X(-1):i===`right`?X(1):i===`turn`?Z():i===`drop`?Q():i===`skip`?de():i===`auto`&&!w&&!k?t.auto():i===`empty`?me():i===`act`&&C&&!w&&t.act?.run(C.id);return}let a=n.closest(`.pk-item.table`);if(!a||w)return;if(k)return W();let o=a.dataset.item,s=t.home()[o];s?(z(`${h(o).icon} <b>${h(o).name}</b> — ${s}`,!1),t.fail(o)):U(o)});let $=null,ve=t=>{if(!C||w)return;let r=e.querySelector(`.pk-grid`)?.getBoundingClientRect();if(!r)return;let i=Math.floor((t-r.left)/n)-Math.floor((s(C.id,C.r)-1)/2);if(k){i!==C.x&&Y(Math.sign(i-C.x),!0);return}let a=x(C.id,C.bag,C.r,i);a.x!==C.x&&(C=a,H())};return e.addEventListener(`pointerdown`,e=>{if(!e.target.closest(`.pk-well`)||w)return;if(e.preventDefault(),e.pointerType===`mouse`&&e.button===2)return Z();if(e.button>0)return;let t=e.target.closest(`.pk-item.in`)?.dataset.item??null;$={sx:e.clientX,sy:e.clientY,x0:C?.x??0,moved:!1,dropped:!1,item:t,mouse:e.pointerType===`mouse`}}),e.addEventListener(`pointermove`,e=>{if(!$){if(e.pointerType===`mouse`&&e.target.closest(`.pk-well`)&&!w){ve(e.clientX);let t=k?null:_e(e.clientX,e.clientY);JSON.stringify(t)!==JSON.stringify(D)&&(D=t,H(!1))}return}let t=$,r=e.clientX-t.sx,i=e.clientY-t.sy;if(!(!t.moved&&Math.hypot(r,i)<10)){if(t.moved=!0,t.mouse)return ve(e.clientX);if(C&&!w){if(Math.abs(r)>=Math.abs(i)){let e=t.x0+Math.round(r/(n*.8));if(k)for(;e!==C.x&&Y(Math.sign(e-C.x),!0););else e!==C.x&&(C=x(C.id,C.bag,C.r,e),H())}else i>n*.8&&!t.dropped&&(t.dropped=!0,fe())}}}),e.addEventListener(`pointerup`,e=>{let n=$;if($=null,!n||n.moved||w)return;if(n.item)return pe(n.item);let i=he(e.clientX,e.clientY);if(i&&C&&!k&&ge(i)){let e=r(t.pack(),C,i[0],i[1]);return e?Q(e):(W(),t.fail(C.id),z(`сюда не влезает — поверните ⟳ или выберите другую клетку`))}n.mouse?Q():Z()}),e.addEventListener(`pointercancel`,()=>$=null),e.addEventListener(`contextmenu`,e=>{e.target.closest(`.pk-well`)&&e.preventDefault()}),window.addEventListener(`keydown`,t=>{if(e.hidden||!e.isConnected||!e.offsetParent||t.metaKey||t.ctrlKey||t.altKey||t.target?.closest?.(`input, textarea, select`))return;let n=t.code;if(n===`ArrowLeft`)X(-1);else if(n===`ArrowRight`)X(1);else if(n===`ArrowUp`||n===`KeyR`)Z();else if(n===`ArrowDown`)Q();else if(n===`Space`)fe();else if(n===`KeyX`||n===`Backspace`||n===`Delete`)de();else return;t.preventDefault()}),{render:V,info:U}}var F=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ie=class extends F{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function I(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var L={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:I,toHexString:I},R={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},ae=[L,R,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=R.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return R.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=R.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return R.toHexString(i)}}];function oe(e){return ae.find(t=>t.match(e))}var z=class extends F{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=oe(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=I(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},B=class extends F{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},se=class extends F{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},V=class extends F{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},H=class extends F{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},U=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function W(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var G=!1,K=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!G&&o&&(W(U),G=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a)}add(e,t,n,r,i){if(Object(n)===n)return new V(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new se(this,e,t,n,r,i);case`boolean`:return new ie(this,e,t);case`string`:return new H(this,e,t);case`function`:return new B(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new z(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof B||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof B)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};function q(e,t,n,r){let i=new K({title:`${e} · настройка (Tab, сохранить — P)`});i.domElement.classList.add(`tuning`);for(let e of document.querySelectorAll(`style`))e.textContent?.includes(`.lil-gui`)&&e.textContent.includes(`@font-face`)&&(e.textContent=e.textContent.replace(/@font-face\s*{[^}]*}/g,``));for(let e of Object.keys(n)){let a=n[e];i.add(t,e,a.min,a.max,a.step).name(a.label).onChange(()=>r?.())}i.hide();let a=()=>{let n=JSON.stringify(t,null,2);return console.log(`TUNING ${e}`,n),window.__tuning={id:e,...t},navigator.clipboard?.writeText(n).catch(()=>void 0),n},o=()=>{i._hidden?i.show():i.hide()};return i.add({"сохранить (P)":a},`сохранить (P)`),window.addEventListener(`keydown`,e=>{e.code===`Tab`?(e.preventDefault(),o()):e.code===`KeyP`&&a()}),{gui:i,dump:a,toggle:o}}export{E as i,P as n,M as r,q as t};