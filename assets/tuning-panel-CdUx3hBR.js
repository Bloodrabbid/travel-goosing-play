import{t as e}from"./lang-DslCBeCp.js";import{n as t}from"./catalog-BEOKT1XN.js";import{D as n,w as r}from"./cities-DMTnyjYL.js";import{C as i,N as a,P as o,S as s,T as c,_ as l,a as u,b as d,c as f,d as p,f as m,h,j as g,l as _,n as v,p as y,r as b,s as x,u as S,w as ee,x as C}from"./pack-bfown5kc.js";function w(e,t,n,r=!0){let i={...n,items:[...n.items.filter(e=>e!==t),t]},a={...n,items:n.items.filter(e=>e!==t)};for(let n of e.options)if(!(r&&n.when&&!n.when(i))){if(n.needs===t)return!0;for(let e of n.chance?.mods??[])if(e.slips>0&&e.when(i)&&!e.when(a))return!0}return!1}var T=e=>e.charAt(0).toLowerCase()+e.slice(1);function E(e,t){return!e.when||e.when(t)?!0:e.when({...t,flags:[...t.flags,`concert_tickets`,`inside`]})}function D(e,t,i,a){let o={},s={};for(let c of e){let e=n(c.id)?r[c.id]:null;if(e?e.requires&&!a.includes(e.requires):!E(c,t))continue;let l=e?e.risk:T(c.title),u=e?s:o;for(let n of i)w(c,n,t,!e)&&!(u[n]??=[]).includes(l)&&u[n].push(l)}return Object.fromEntries(i.map(e=>[e,[...o[e]??[],...s[e]??[]]]))}var O=null;function te(e,r=3){if(!O){O={};let e={night:{},concert:{},city:{},incident:{}};for(let r of t()){let t=n(r.id)?`incident`:r.chapter,i=T(r.ev.title);for(let n of r.ev.options){let r=new Set(n.needs?[n.needs]:[]);for(let n of r)(e[t][n]??=[]).includes(i)||e[t][n].push(i)}}let r=new Set(Object.values(e).flatMap(e=>Object.keys(e)));for(let t of r){let n=[`night`,`concert`,`city`,`incident`].map(n=>[...e[n][t]??[]]),r=[];for(let e=0;r.length<8&&n.some(e=>e.length);e++){let t=n[e%n.length].shift();t&&!r.includes(t)&&r.push(t)}O[t]=r}}return(O[e]??[]).slice(0,r)}var k=3,A=[`#f3dfb6`,`#d9ecdf`,`#ead9e6`,`#d8e4ef`,`#f1d5c5`,`#e9e4c4`,`#dfe8cf`],j=e=>{let t=Object.keys(o).indexOf(e);return A[(t>=0?t:[...e].reduce((e,t)=>e+t.charCodeAt(0),0))%A.length]},M=e=>g(e).checkedOnly?`🧳`:g(e).cabinOnly?`🎒`:``,N=(e,t)=>t===`carry`?!!g(e).checkedOnly:!!g(e).cabinOnly,ne=(t,n)=>n===`carry`?e?`⚠ ${g(t).name.toLowerCase()} in the backpack will be confiscated at security — suitcase only 🧳`:`⚠ ${g(t).name.toLowerCase()} в рюкзаке изымут на досмотре — только в чемодан 🧳`:e?`⚠ ${g(t).name.toLowerCase()} in a checked suitcase will be confiscated — batteries go in the backpack only 🎒`:`⚠ ${g(t).name.toLowerCase()} в сданном чемодане изымут — батареи только в рюкзак 🎒`;function re(t,n,r,i=``){let a=C(t,n),o=Math.max(...a.map(e=>e[0]))+1,s=Math.max(...a.map(e=>e[1]))+1,c=g(t),l=M(t),u=new Set(a.map(([e,t])=>`${e},${t}`)),d=(e,t)=>!u.has(`${e},${t}`),f=a.length===o*s,p=a.reduce((e,t)=>e+t[0],0)/a.length+.5,m=a.reduce((e,t)=>e+t[1],0)/a.length+.5;if(!u.has(`${Math.min(o-1,Math.floor(p))},${Math.min(s-1,Math.floor(m))}`)){let e=([e,t])=>(e+.5-p)**2+(t+.5-m)**2,t=a.reduce((t,n)=>e(n)<e(t)?n:t,a[0]);[p,m]=[t[0]+.5,t[1]+.5]}let h=f&&Math.min(o,s)>1?.95:a.length>=5?.8:.62,_=a.reduce((e,t,n)=>t[1]<a[e][1]||t[1]===a[e][1]&&t[0]>a[e][0]?n:e,0),v=a.map(([t,n],r)=>{let i=d(t,n-1),a=d(t+1,n),o=d(t,n+1),s=d(t-1,n);return`<span class="pk-sq" style="left:calc(var(--u) * ${t});top:calc(var(--u) * ${n});${`--et:${+i};--er:${+a};--eb:${+o};--el:${+s};border-radius:${i&&s?`4px`:0} ${i&&a?`4px`:0} ${o&&a?`4px`:0} ${o&&s?`4px`:0}`}">${r===_&&l?`<b class="pk-rule" title="${l===`🧳`?e?`checked suitcase only`:`только в сданный чемодан`:e?`carry-on only — backpack`:`только в ручную кладь — рюкзак`}">${l}</b>`:``}</span>`}).join(``),y=`<i class="pk-ico" style="left:calc(var(--u) * ${p.toFixed(3)});top:calc(var(--u) * ${m.toFixed(3)});font-size:calc(var(--u) * ${h})">${c.icon}</i>`;return`<div class="pk-item ${r}${t.startsWith(`sv_`)?` sv`:``}" data-item="${t}" style="--w:${o};--h:${s};--tint:${j(t)};${i}" title="${c.name}">${v}${y}</div>`}function ie(e){let t=a[e].fixed,n=l(t.shape),r=new Set(n.map(([e,t])=>`${e},${t}`)),i=(e,t)=>+!r.has(`${e},${t}`),o=e=>n.filter(t=>t[1]===e).length,s=n.map(e=>e[1]).reduce((e,t)=>o(t)>o(e)?t:e,n[0][1]),c=Math.min(...n.filter(e=>e[1]===s).map(e=>e[0])),u=n.find(e=>e[1]!==s);return`${n.map(([e,n])=>{let r=i(e,n-1),a=i(e+1,n),o=i(e,n+1),s=i(e-1,n),c=t.x+e,l=t.y+n;return`<span class="pk-fsq" style="left:calc(var(--c) * ${c});top:calc(var(--c) * ${l});--gx:${c};--gy:${l};--et:${r};--er:${a};--eb:${o};--el:${s};border-radius:${r&&s?`4px`:0} ${r&&a?`4px`:0} ${o&&a?`4px`:0} ${o&&s?`4px`:0}">${u&&u[0]===e&&u[1]===n?t.icon:``}</span>`}).join(``)}<div class="pk-fixed" style="left:calc(var(--c) * ${t.x+c});top:calc(var(--c) * ${t.y+s});--w:${o(s)};--h:1">${u?``:t.icon}<small>${t.label}</small></div>`}function P(t,n){let r=44,l=null,w=null,T=!1,E=null,D=[],O=null,A=!1,j=!1,M=0,P=0,F=()=>matchMedia(`(pointer: coarse)`).matches,ae=e=>{let n=Math.max(240,t.clientWidth||340)-8,i=a[e],o=Math.floor(window.innerHeight*(F()?.31:.4)/(i.rows+k));r=Math.max(window.innerHeight<600?24:28,Math.min(F()?60:50,Math.floor(n/i.cols),o)),t.style.setProperty(`--c`,`${r}px`),t.style.setProperty(`--tc`,`${F()?30:22}px`)},I=e=>{let n=t.closest(`.card`);if(n)for(let i=0;i<3;i++){let i=n.scrollHeight-n.clientHeight,o=Math.max(22,r-Math.ceil(i/(a[e].rows+k)));if(i<=1||o>=r)return;r=o,t.style.setProperty(`--c`,`${r}px`)}},L=()=>n.floor?.()??Object.values(o).filter(e=>e.packable).map(e=>e.id),R=()=>{let e=new Set(n.pack().map(e=>e.id)),t=n.home();return L().filter(n=>!e.has(n)&&!t[n])},oe=()=>{let e=R();!l||!e.length?w=null:!w||!e.includes(w.id)?w=S(e[0],l):w.bag!==l&&(w=S(w.id,l,w.r,w.x))},se=(t=``)=>{if(t)return`<span class="pk-warn">${t}</span>`;if(!w)return`<span class="pk-hint-text">${n.empty??(e?`the table's empty — everything's coming with you`:`стол пуст — всё едет с вами`)}</span>`;if(N(w.id,w.bag))return`<span class="pk-warn">${ne(w.id,w.bag)}</span>`;if(n.describe)return n.describe(w.id);let r=o[w.id],i=te(w.id,3);return`${r.icon} <b>${r.name}</b> · ${m(r.kg)} — ${r.hint}${i.length?e?`<small class="pk-uses">useful for: ${i.join(` · `)}</small>`:`<small class="pk-uses">пригодится: ${i.join(` · `)}</small>`:``}`},z=()=>{let e=w&&n.act?.label(w.id);return e?` <button type="button" class="pk-act" data-k="act">${e}</button>`:``},B=(e=``,n=!0)=>{let r=t.querySelector(`.pk-info`);r&&(r.innerHTML=se(e)+(n?z():``))},ce=(t,r)=>{let i=v(r,t,n.tuning),o=h(r,[t],n.tuning).length>0,s=t===`carry`?e?`Backpack`:`Рюкзак`:t===`goose`?e?`Goose's`:`Гуся`:t===`llama`?e?`Llama's`:`Ламы`:e?`New`:`Новый`;return`<button type="button" class="pk-tab${t===l?` on`:``}${o?` over`:``}" data-tab="${t}">${a[t].icon} ${s} <b>${m(i).replace(e?` kg`:` кг`,``)}/${y(t,n.tuning)}</b></button>`},le=(t,r)=>{let i=y(r,n.tuning),o=h(t,[r],n.tuning)[0],s=r===`carry`?e?`backpack`:`рюкзак`:a[r].name.toLowerCase();return o?r===`carry`?o.pockets?e?`overweight ${m(o.over)} — Goose will stuff it in his pockets`:`перевес ${m(o.over)} — Гусь рассуёт по карманам`:e?`overweight ${m(o.over)} — check it at the gate ${n.ramen(o.yen)}`:`перевес ${m(o.over)} — сдать у выхода ${n.ramen(o.yen)}`:e?`overweight ${m(o.over)} — surcharge ${n.ramen(o.yen)}`:`перевес ${m(o.over)} — доплата ${n.ramen(o.yen)}`:e?`${m(v(t,r,n.tuning))} of ${i} kg · ${r===`carry`?e?`the budget airline will weigh it`:`лоукостер взвесит`:s}`:`${m(v(t,r,n.tuning))} из ${i} кг · ${r===`carry`?e?`the budget airline will weigh it`:`лоукостер взвесит`:s}`};function V(){let r=n.bags();(!l||!r.includes(l))&&(l=r.find(e=>e!==`carry`)??`carry`);let i=l,o=a[i],s=n.pack(),c=n.home();ae(i),A&&(!w||!R().includes(w.id))&&(A=j=!1,window.clearTimeout(P)),oe();let u=s.filter(e=>e.bag===i).map(e=>re(e.id,e.r,`in${e.id===E?` landed`:``}${N(e.id,e.bag)?` wrong`:``}`,`left:calc(var(--c) * ${e.x});top:calc(var(--c) * ${e.y})`)).join(``),d=p(s,n.tight()).filter(e=>e.startsWith(`${i}:`)).map(e=>Number(e.split(`:`)[1])).map(t=>e?`<i class="pk-row${D.includes(t)?` fresh`:``}" style="top:calc(var(--c) * ${t})"><span>perfect!</span></i>`:`<i class="pk-row${D.includes(t)?` fresh`:``}" style="top:calc(var(--c) * ${t})"><span>идеально!</span></i>`).join(``),f=h(s,[i],n.tuning).length>0,m=L().filter(e=>!s.some(t=>t.id===e)).map(e=>re(e,0,`table${c[e]?` home`:``}${w?.id===e?` sel`:``}`)).join(``),g=w?``:` disabled`;t.innerHTML=`<div class="pk-tabs n${r.length}">${r.map(e=>ce(e,s)).join(``)}</div><div class="pk-well ${i}${f?` over`:``}" style="--cols:${o.cols};--rows:${o.rows};--air:${k}"><div class="pk-air"></div><div class="pk-grid" data-grid="${i}">${ie(i)}${u}${d}</div></div><div class="pk-note${f?` over`:``}">${le(s,i)}${s.some(e=>e.bag===i)?e?` · <button type="button" class="pk-out" data-k="empty">↥ take everything out</button>`:` · <button type="button" class="pk-out" data-k="empty">↥ вытащить всё</button>`:``}</div><div class="pk-ctl">`+(e?`<button type="button" data-k="left" aria-label="left"${g}>←</button>`:`<button type="button" data-k="left" aria-label="влево"${g}>←</button>`)+(e?`<button type="button" data-k="turn" aria-label="rotate"${g}>⟳</button>`:`<button type="button" data-k="turn" aria-label="повернуть"${g}>⟳</button>`)+(e?`<button type="button" data-k="right" aria-label="right"${g}>→</button>`:`<button type="button" data-k="right" aria-label="вправо"${g}>→</button>`)+(e?`<button type="button" data-k="drop" class="drop" aria-label="drop"${g}>↓</button>`:`<button type="button" data-k="drop" class="drop" aria-label="бросить"${g}>↓</button>`)+(e?`<button type="button" data-k="skip" aria-label="leave on the table"${g}>✕</button>`:`<button type="button" data-k="skip" aria-label="оставить на столе"${g}>✕</button>`)+(e?`<button type="button" data-k="auto" class="auto">Auto-pack</button>`:`<button type="button" data-k="auto" class="auto">Сложить само</button>`)+`</div><p class="pk-info">${se()}${z()}</p><div class="pk-table">${m||`<span class="pk-empty">${n.empty??(e?`the table's empty — everything's coming with you`:`стол пуст — всё едет с вами`)}</span>`}</div>`,I(i),xe();let _=E!==null;E=null,D=[],H(_)}function H(r=!0){let i=t.querySelector(`.pk-well`),a=t.querySelector(`.pk-grid`);if(!i||!a)return;a.querySelectorAll(`.pk-ghostcell`).forEach(e=>e.remove());let o=i.querySelector(`.pk-item.fall`);if(!w){o?.remove();return}let s=w;if(!o||o.dataset.item!==s.id||o.dataset.r!==String(s.r)){let e=o?.dataset.item;o?.remove(),i.insertAdjacentHTML(`beforeend`,re(s.id,s.r,`fall${r&&e!==s.id?` enter`:``}`)),o=i.querySelector(`.pk-item.fall`),o.dataset.r=String(s.r)}o.style.transition=A?`top ${n.tuning.fallMsPerRow}ms linear, left 0.1s ease-out`:``,o.classList.toggle(`lock`,j);let c=t.querySelector(`[data-k="drop"]`);c&&(c.textContent=A?`⤓`:`↓`,c.setAttribute(`aria-label`,A?e?`straight down`:`сразу вниз`:e?`let go — it falls cell by cell`:`отпустить — падает по клетке`)),o.style.left=`calc(var(--c) * ${s.x})`,o.style.top=`calc(var(--c) * ${k+s.y})`;let l=O?{at:O,ok:!0}:u(n.pack(),s),d=b(l.at).filter(([,e])=>e>=0),f=new Set(d.map(([e,t])=>`${e},${t}`)),p=(e,t)=>+!f.has(`${e},${t}`);for(let[e,t]of d){let n=document.createElement(`i`);n.className=`pk-ghostcell ${l.ok?N(s.id,s.bag)?`warn`:`ok`:`bad`}`,n.style.cssText=`left:calc(var(--c) * ${e});top:calc(var(--c) * ${t});--et:${p(e,t-1)};--er:${p(e+1,t)};--eb:${p(e,t+1)};--el:${p(e-1,t)}`,a.appendChild(n)}}let U=e=>{e&&l&&R().includes(e)&&(w=S(e,l)),O=null,B(),t.querySelectorAll(`.pk-item.table.sel`).forEach(e=>e.classList.remove(`sel`)),w&&t.querySelector(`.pk-item.table[data-item="${w.id}"]`)?.classList.add(`sel`),H()},W=()=>{let e=t.querySelector(`.pk-item.fall`);e&&(e.classList.remove(`wiggle`,`enter`),e.offsetWidth,e.classList.add(`wiggle`))},ue=()=>t.querySelector(`.pk-item.fall`),G=()=>{A=!1,j=!1,window.clearTimeout(P)},K=t=>{W(),n.fail(t.id),B(e?`↑ doesn't fit — the lid won't close: rotate it or try another bag`:`↑ не влезает — крышка не закроется: поверните или в другую сумку`)},de=(e,t)=>{let r=n.pack(),i=_(r,t.bag),a=[...r.filter(t=>t.id!==e.id),t];E=e.id,D=_(a,t.bag).filter(e=>!i.includes(e));let o=R(),s=o.filter(t=>t!==e.id);w=s.length?S(s[Math.max(0,o.indexOf(e.id))%s.length],t.bag):null,n.change(a,{id:e.id,kind:`place`,bag:t.bag,x:t.x,y:t.y,rows:D}),N(e.id,t.bag)&&B(ne(e.id,t.bag),!1)},fe=e=>{if(!w)return;let r=w;G(),O=null,T=!0;let i=ue(),a=Math.max(160,(e.y-r.y)*n.tuning.dropMsPerRow);t.querySelectorAll(`.pk-ghostcell`).forEach(e=>e.remove()),i&&(i.classList.remove(`enter`,`wiggle`),i.style.transition=`top ${a}ms cubic-bezier(0.5, 0, 0.85, 0.55), left ${Math.min(a,220)}ms ease-out`,i.style.left=`calc(var(--c) * ${e.x})`,i.style.top=`calc(var(--c) * ${k+e.y})`),window.setTimeout(()=>{T=!1,de(r,e)},a)},q=()=>{if(!A||!w)return G();let e={...w,y:w.y+1};if(x(n.pack(),e))w=e,j=!1,H(!1),P=window.setTimeout(q,n.tuning.fallMsPerRow);else if(!j)j=!0,H(!1),P=window.setTimeout(q,n.tuning.lockMs);else{let e=w;if(G(),b(e).some(([,e])=>e<0))return K(e),w=S(e.id,e.bag,e.r,e.x),H();T=!0,window.setTimeout(()=>{T=!1,de(e,e)},60)}},pe=()=>{A&&w&&j&&(window.clearTimeout(P),x(n.pack(),{...w,y:w.y+1})?(j=!1,P=window.setTimeout(q,n.tuning.fallMsPerRow/2)):P=window.setTimeout(q,M++<12?n.tuning.lockMs:0),H(!1))},J=(e,t=!1)=>{if(!w)return!1;let r={...w,x:w.x+e};return x(n.pack(),r)?(w=r,H(!1),pe(),!0):(t||W(),!1)},Y=e=>{if(!w||T)return;if(A){J(e);return}let t=s(w,e);t.x===w.x&&W(),w=t,O=null,H()},X=()=>{if(!w||T)return;if(A){let e=(w.r+1)%4;for(let[t,r]of[[0,0],[-1,0],[1,0],[-2,0],[0,-1]]){let i={...w,r:e,x:w.x+t,y:w.y+r};if(x(n.pack(),i)){w=i,H(!1),pe();return}}return W()}let e=ee(w);e.r!==w.r&&JSON.stringify(C(e.id,e.r))===JSON.stringify(C(w.id,w.r))&&W(),w=e,O=null,H()},me=()=>{if(!w||T)return;let e=R();if(e.length<2)return W();G(),U(e[(e.indexOf(w.id)+1)%e.length])},he=()=>{if(!w||T)return;let e=u(n.pack(),w);if(!e.ok)return G(),K(w),w=S(w.id,w.bag,w.r,w.x),H();fe(e.at)},Z=e=>{if(w&&!T){if(O=null,e)return fe(e);if(A)return he();x(n.pack(),{...w,y:w.y+1})?(A=!0,j=!1,M=0,H(!1),P=window.setTimeout(q,n.tuning.fallMsPerRow*.6)):K(w)}},ge=e=>{if(T||A)return;let t=n.pack(),r=t.find(t=>t.id===e);r&&(w=S(e,r.bag,r.r,r.x),n.change(d(t.filter(t=>t.id!==e),r.bag),{id:e,kind:`remove`,bag:r.bag}))},_e=()=>{if(T||A||!l)return;let e=n.pack(),t=e.filter(e=>e.bag===l);t.length&&(O=null,w&&=S(w.id,l,w.r,w.x),n.change(e.filter(e=>e.bag!==l),{id:t[0].id,kind:`clear`,bag:l}))},ve=(e,n)=>{let i=t.querySelector(`.pk-grid`)?.getBoundingClientRect();if(!i||!l)return null;let o=Math.floor((e-i.left)/r),s=Math.floor((n-i.top)/r);return o>=0&&s>=0&&o<a[l].cols&&s<a[l].rows?[o,s]:null},ye=([e,t])=>!!l&&![...f(l),...n.pack().filter(e=>e.bag===l).flatMap(b)].some(([n,r])=>n===e&&r===t),be=(e,t)=>{let r=ve(e,t);return r&&w?i(n.pack(),w,r[0],r[1]):null},Q=0;function xe(){let e=t.querySelector(`.pk-table`);if(!e)return;e.querySelectorAll(`.pk-tray-nav`).forEach(e=>e.remove());let n=[...e.querySelectorAll(`.pk-item.table`)];for(let e of n)e.hidden=!1;if(!n.length||e.scrollWidth<=e.clientWidth+1)return void(Q=0);let r=(e,t)=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`pk-tray-nav`,n.dataset.k=e<0?`tray-prev`:`tray-next`,n.textContent=t,n},i=r(-1,`◀`),a=r(1,`▶`);e.prepend(i),e.append(a);let o=t=>{for(let e of n)e.hidden=!0;let r=t;for(let i=t;i<n.length;i++){if(n[i].hidden=!1,i>t&&e.scrollWidth>e.clientWidth+1){n[i].hidden=!0;break}r=i}return r};Q=Math.max(0,Math.min(Q,n.length-1));let s=o(Q),c=n.findIndex(e=>e.classList.contains(`sel`));c>=0&&(c<Q||c>s)&&(Q=c,s=o(Q)),i.disabled=Q===0,a.disabled=s>=n.length-1,e.dataset.per=String(Math.max(1,s-Q+1))}t.addEventListener(`click`,e=>{let r=e.target,i=r.closest(`.pk-tray-nav`);if(i){let e=Number(t.querySelector(`.pk-table`)?.dataset.per)||1;Q=Math.max(0,Q+(i.dataset.k===`tray-prev`?-e:e)),xe();return}let a=r.closest(`[data-tab]`);if(a){if(T||A)return;l=a.dataset.tab,w&&=S(w.id,l,w.r,w.x),V();return}let o=r.closest(`[data-k]`)?.dataset.k;if(o){o===`left`?Y(-1):o===`right`?Y(1):o===`turn`?X():o===`drop`?Z():o===`skip`?me():o===`auto`&&!T&&!A?n.auto():o===`empty`?_e():o===`act`&&w&&!T&&n.act?.run(w.id);return}let s=r.closest(`.pk-item.table`);if(!s||T)return;if(A)return W();let c=s.dataset.item,u=n.home()[c];u?(B(`${g(c).icon} <b>${g(c).name}</b> — ${u}`,!1),n.fail(c)):U(c)});let $=null,Se=e=>{if(!w||T)return;let n=t.querySelector(`.pk-grid`)?.getBoundingClientRect();if(!n)return;let i=Math.floor((e-n.left)/r)-Math.floor((c(w.id,w.r)-1)/2);if(A){i!==w.x&&J(Math.sign(i-w.x),!0);return}let a=S(w.id,w.bag,w.r,i);a.x!==w.x&&(w=a,H())};return t.addEventListener(`pointerdown`,e=>{if(!e.target.closest(`.pk-well`)||T)return;if(e.preventDefault(),e.pointerType===`mouse`&&e.button===2)return X();if(e.button>0)return;let t=e.target.closest(`.pk-item.in`)?.dataset.item??null;$={sx:e.clientX,sy:e.clientY,x0:w?.x??0,moved:!1,dropped:!1,item:t,mouse:e.pointerType===`mouse`}}),t.addEventListener(`pointermove`,e=>{if(!$){if(e.pointerType===`mouse`&&e.target.closest(`.pk-well`)&&!T){Se(e.clientX);let t=A?null:be(e.clientX,e.clientY);JSON.stringify(t)!==JSON.stringify(O)&&(O=t,H(!1))}return}let t=$,n=e.clientX-t.sx,i=e.clientY-t.sy;if(!(!t.moved&&Math.hypot(n,i)<10)){if(t.moved=!0,t.mouse)return Se(e.clientX);if(w&&!T){if(Math.abs(n)>=Math.abs(i)){let e=t.x0+Math.round(n/(r*.8));if(A)for(;e!==w.x&&J(Math.sign(e-w.x),!0););else e!==w.x&&(w=S(w.id,w.bag,w.r,e),H())}else i>r*.8&&!t.dropped&&(t.dropped=!0,he())}}}),t.addEventListener(`pointerup`,t=>{let r=$;if($=null,!r||r.moved||T)return;if(r.item)return ge(r.item);let a=ve(t.clientX,t.clientY);if(a&&w&&!A&&ye(a)){let t=i(n.pack(),w,a[0],a[1]);return t?Z(t):(W(),n.fail(w.id),B(e?`doesn't fit here — rotate ⟳ or choose another cell`:`сюда не влезает — поверните ⟳ или выберите другую клетку`))}r.mouse?Z():X()}),t.addEventListener(`pointercancel`,()=>$=null),t.addEventListener(`contextmenu`,e=>{e.target.closest(`.pk-well`)&&e.preventDefault()}),window.addEventListener(`keydown`,e=>{if(t.hidden||!t.isConnected||!t.offsetParent||e.metaKey||e.ctrlKey||e.altKey||e.target?.closest?.(`input, textarea, select`))return;let n=e.code;if(n===`ArrowLeft`)Y(-1);else if(n===`ArrowRight`)Y(1);else if(n===`ArrowUp`||n===`KeyR`)X();else if(n===`ArrowDown`)Z();else if(n===`Space`)he();else if(n===`KeyX`||n===`Backspace`||n===`Delete`)me();else return;e.preventDefault()}),{render:V,info:U}}var F=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ae=class extends F{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function I(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var L={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:I,toHexString:I},R={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},oe=[L,R,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=R.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return R.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=R.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return R.toHexString(i)}}];function se(e){return oe.find(t=>t.match(e))}var z=class extends F{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=se(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=I(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},B=class extends F{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},ce=class extends F{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},le=class extends F{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},V=class extends F{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},H=`.lil-gui {
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
}`;function U(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var W=!1,ue=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!W&&o&&(U(H),W=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a)}add(e,t,n,r,i){if(Object(n)===n)return new le(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new ce(this,e,t,n,r,i);case`boolean`:return new ae(this,e,t);case`string`:return new V(this,e,t);case`function`:return new B(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new z(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof B||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof B)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};function G(t,n,r,i){let a=new ue({title:e?`${t} · tuning (Tab, save — P)`:`${t} · настройка (Tab, сохранить — P)`});a.domElement.classList.add(`tuning`);for(let e of document.querySelectorAll(`style`))e.textContent?.includes(`.lil-gui`)&&e.textContent.includes(`@font-face`)&&(e.textContent=e.textContent.replace(/@font-face\s*{[^}]*}/g,``));for(let e of Object.keys(r)){let t=r[e];a.add(n,e,t.min,t.max,t.step).name(t.label).onChange(()=>i?.())}a.hide();let o=()=>{let e=JSON.stringify(n,null,2);return console.log(`TUNING ${t}`,e),window.__tuning={id:t,...n},navigator.clipboard?.writeText(e).catch(()=>void 0),e},s=()=>{a._hidden?a.show():a.hide()};return a.add({"сохранить (P)":o},`сохранить (P)`),location.hash.startsWith(`#trip`)?(a.domElement.remove(),{gui:a,dump:o,toggle:()=>void 0}):(window.addEventListener(`keydown`,e=>{e.code===`Tab`?(e.preventDefault(),s()):e.code===`KeyP`&&o()}),{gui:a,dump:o,toggle:s})}export{D as i,P as n,N as r,G as t};