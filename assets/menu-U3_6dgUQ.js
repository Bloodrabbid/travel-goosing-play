import{a as e,c as t,n,o as r,r as i,s as a,t as o,u as s}from"./music-q_O52PHp.js";import{c,n as l,o as u,r as d}from"./run-CwsoLSmW.js";var f={prologue:`копим на мечту`,prep:`сборы`,night:`ночь в Токио`,day:`день концерта`};async function p(){let p=document.getElementById(`ui`);p.classList.add(`menu`),e(),n(`home`);let m=c(),h=l();p.innerHTML=`
    <div class="menu-bg"></div>
    <section class="card menu-card">
      <h1>Travel Goosing</h1>
      <p class="menu-sub">Гусь и Лама копят на поездку мечты: Токио, осень, концерт любимой группы.<br>Всё, что не учтёте при сборах, Япония вам припомнит.</p>
      <div class="choices" id="choices"></div>
      <p class="menu-note">Одна поездка — один итог: переиграть день нельзя, можно отправиться в новую поездку.</p>
      <p class="menu-settings"><button type="button" data-set="music"></button><button type="button" data-set="sound"></button></p>
    </section>
    <section class="card credits-card" id="credits" hidden>
      <h2>Авторы</h2>
      <p><b>Идея, вкус и плейтесты</b> — Кирилл и Вика (по мотивам своих поездок в Японию)</p>
      <p><b>Сделано вместе с Claude</b> — студия studioigor: код, модели и задники в Blender, тексты событий</p>
      <p><b>Задники у комбини и переезда</b> — сгенерированы в Nano Banana Pro для этой игры</p>
      <p><b>Шрифты</b> — Caveat (Impallari Type), Golos Text (Paratype), Noto Sans CJK — SIL Open Font License 1.1</p>
      <p><b>Библиотеки</b> — three.js, PixiJS, inkjs — MIT</p>
      <p><b>Музыка и звуки</b> — временные, синтез прямо в игре; настоящая музыка будет своя</p>
      <div class="choices"><button type="button" class="choice" data-choice="credits-close"><span>Закрыть</span></button></div>
    </section>
    <p class="hint">тест-сцены: <a href="#prologue">пролог</a> · <a href="#m06">сборы</a> · <a href="#m01">ночь</a> · <a href="#day">день</a> · <a href="#lookdev">look-dev</a> · <a href="#credits" data-act="credits">авторы</a></p>`,p.querySelector(`.menu-bg`).style.backgroundImage=`url(img/bg-desk.webp)`;let g=p.querySelector(`#choices`),_=(e,t,n,r,i=``)=>{let o=document.createElement(`button`);o.type=`button`,o.className=`choice ${i}`,o.dataset.choice=e,o.innerHTML=`<span>${t}</span><small>${n}</small>`,o.addEventListener(`click`,()=>{s(),a(`paper`),r()}),g.append(o)},v=p.querySelector(`[data-set=music]`),y=p.querySelector(`[data-set=sound]`),b=()=>{v.textContent=`♪ музыка: ${o()?`вкл`:`выкл`}`,y.textContent=`весь звук: ${r()?`выкл`:`вкл`}`,v.classList.toggle(`off`,!o()),y.classList.toggle(`off`,r())};v.addEventListener(`click`,()=>{s(),i(!o()),b()}),y.addEventListener(`click`,()=>{s(),t(!r()),r()||a(`paper`),b()}),b(),m&&_(`continue`,`Продолжить поездку →`,`этап: ${m.stage===`prep`&&m.prep?f.night:f[m.stage]??m.stage}`,()=>d(m,m.stage),`go`),_(`new`,m?`Новая поездка`:`Новая поездка →`,m?`начать с копилки заново — прошлая поездка закончится`:`с самого начала: копилка, сборы, Токио`,()=>d(u(),`prologue`),m?``:`go`),h&&_(`album`,`Альбом прошлой поездки`,`как всё закончилось`,()=>d(h,`end`));let x=p.querySelector(`#credits`),S=p.querySelector(`.menu-card`),C=e=>{x.hidden=!e,S.hidden=e,a(`paper`)};p.querySelector(`[data-choice=credits-close]`).addEventListener(`click`,()=>C(!1)),p.querySelectorAll(`.hint a:not([data-act])`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),location.hash=e.getAttribute(`href`).slice(1),location.reload()})),p.querySelector(`[data-act=credits]`).addEventListener(`click`,e=>{e.preventDefault(),s(),C(!0)}),window.__GAME__={ready:!0,newTrip:e=>d(u(e),`prologue`)}}export{p as start};