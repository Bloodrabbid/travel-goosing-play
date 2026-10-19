import{F as e,M as t}from"./minigames-qBLB8toT.js";import{n,r}from"./state-DTYdNmo5.js";import{i}from"./outcome-vYZ6WxCr.js";import{c as a}from"./rumor-ui-DzwEWmZE.js";var o=e=>r(e.minute),s=e=>e.wet.goose<.06&&e.wet.llama<.06?``:` Гусь ${i(e.wet.goose,!1)}, Лама ${i(e.wet.llama,!0)}.`;function c(e,t,n,r){let i=Math.abs(e)%100,a=i%10;return i>10&&i<20?r:a===1?t:a>=2&&a<=4?n:r}var l=e=>`${e} ${c(e,`минута`,`минуты`,`минут`)}`,u=e=>String(Math.round(e)).replace(/\B(?=(\d{3})+(?!\d))/g,` `),d=e=>Math.round((17e3+(10-e.energy)*900+Math.max(0,e.minute-1320)*20)/100)*100,f=e=>({label:e,slips:2,when:e=>n(e,`phrasebook`)}),p=e=>e.flags.includes(`heavy_bags`),m={id:`discount`,place:`konbini`,title:`Охота за скидкой`,text:e=>`${o(e)}. ${t[e.stay??`ryokan`].goal} Ужина не было. Продавец выходит с рулоном жёлтых наклеек — к ночи бэнто вдвое дешевле. Гусь замер у холодильника, как цапля. Лама голодна сейчас.`+(n(e,`snacks`)?` В рюкзаке шуршат сухари.`:``)+(e.yen<1800?` Денег — впритык.`:``),options:[{id:`wait_sticker`,label:`Дождаться наклейки`,kind:`risk`,act:`wait`,cost:{yen:-900,minutes:8},chance:{slips:5,mods:[f(`разговорник: спросить, когда наклейки`)]},win:{delta:{goose:2,llama:1,energy:1,flags:[`half_price`]},text:()=>`Шлёп — наклейка! Два горячих бэнто за ¥900 вместо ¥1 800. Гусь: «Скупой платит дважды, а умный — половину».`,goose:`полцены!`,llama:`ням`},lose:{delta:{minutes:5,goose:-1,flags:[`onigiri_pudding`]},text:()=>`Наклейки легли на всё, кроме бэнто: последние два унёс саларимэн. На ¥900 — онигири и пудинг. Гусь: «Охота не удалась».`,goose:`эх…`,llama:`пудинг ✓`}},{id:`bento_now`,label:`Бэнто сразу, без скидки`,kind:`pay`,act:`eat`,cost:{yen:-1800,minutes:5},win:{delta:{goose:-1,llama:2,energy:1},text:()=>`Два горячих бэнто сразу. Лама счастлива. Гусь жуёт и смотрит, как через минуту такие же получают жёлтую наклейку.`,goose:`за полную…`,llama:`✦ горячее`}},{id:`shopping_bag`,label:`Уценку — в свою сумку, и на завтрак`,kind:`item`,act:`shop`,needs:`shopping_bag`,cost:{yen:-1300,minutes:12},win:{delta:{goose:2,llama:1,energy:1,flags:[`half_price`]},text:()=>`Пока ждали наклейки, Гусь набил складную сумку уценкой: два бэнто на сейчас, булочки и йогурт на утро. Пакет не купили — ещё ¥5 сэкономлено. Гусь счастлив дважды.`,goose:`и на завтрак!`,llama:`хозяйственный`}},{id:`snacks`,label:`Сухари из дома`,kind:`item`,act:`eat`,needs:`snacks`,cost:{minutes:2},win:{delta:{goose:-1,removeItems:[`snacks`]},text:()=>`Гусь хрустит сухарём под взглядом жёлтых наклеек. «Я экономлю, — говорит он бэнто. — Не смотри на меня так».`,goose:`хрум…`}},{id:`skip`,label:`Не ужинать`,kind:`free`,act:`walk`,cost:{},win:{delta:{goose:-2,llama:-1,energy:-1},text:()=>`Сэкономили всё. Гусь провожает взглядом наклейки, Лама — бэнто. В животах — гром.`,goose:`урррр…`,llama:`гром`}}]},h={id:`alleys`,place:`konbini`,title:`Синяя точка прыгает`,text:t=>`${o(t)}. Переулки как близнецы: автомат, фонарь, автомат. Синяя точка на карте прыгает между домами — до ${e(t.stay)} то пять минут, то пятнадцать.${s(t)}`,options:[{id:`offline_map`,label:`Офлайн-карта`,kind:`item`,act:`phone`,needs:`offline_map`,cost:{minutes:3},win:{delta:{llama:1},text:()=>`Офлайн-карта не прыгает: два поворота — и знакомая вывеска. Лама: «По плану». Гусь делает вид, что вёл сам.`,llama:`по плану`,goose:`я так и шёл`}},{id:`ask_clerk`,label:`Спросить продавца комбини`,kind:`risk`,act:`talk`,cost:{minutes:4},chance:{slips:5,mods:[f(`разговорник`)]},win:{delta:{minutes:2,goose:1,llama:1,flags:[`clerk_map`]},text:t=>`Продавец распечатал карту на принтере у кассы и нарисовал стрелку до ${e(t.stay)}. Сервис уровня «комбини».`,goose:`аригато!`,llama:`✦`},lose:{delta:{minutes:12,llama:-1},text:()=>`Продавец очень старался: показывал руками прямо, направо, налево — и снова прямо. Двенадцать минут кругами, пока не нашли сами.`,goose:`?!`,llama:`эээ…`}},{id:`wander`,label:`Идти по наитию`,kind:`free`,act:`walk`,walk:!0,cost:{minutes:14},win:{delta:{llama:1,goose:-1,flags:[`back_streets`]},text:e=>`Четверть часа по тихим улочкам: бельё на балконах, кот на капоте, бабушка поливает цветы в ${o(e)}. Лама: «Такие улицы говорят о стране больше». Гусь: «Они говорят, что мы заблудились».`,llama:`✦ щёлк ✦`,goose:`где мы?`}}]},g={id:`toilet`,place:`konbini`,title:`Пульт управления полётами`,enter:()=>({minutes:4}),enterNote:()=>`Гусь четыре минуты не выходил из туалета комбини.`,text:e=>`${o(e)}. Гусь выбегает из туалета комбини: «Там пульт на двенадцать кнопок, и все по-японски! Я должен разобраться». Лама смотрит на часы.`+(e.energy<=3?` Гусь так устал, что готов там жить.`:``),options:[{id:`phrasebook`,label:`Кнопки — по разговорнику`,kind:`item`,act:`search`,needs:`phrasebook`,cost:{minutes:5},win:{delta:{goose:2,flags:[`toilet_love`]},text:()=>`По разговорнику: 暖 — тепло, 止 — стоп. Сиденье с подогревом, тихая музыка. Гусь выходит просветлённым: «Любовь с первого присяда».`,goose:`любовь ♥`,llama:`наконец-то`}},{id:`random_button`,label:`Жать кнопки наугад`,kind:`risk`,act:`search`,cost:{minutes:3},chance:{slips:5,mods:[{label:`совет сороки: «волны — музыка»`,slips:-2,when:a(`washlet_waves`)}]},win:{delta:{goose:2,flags:[`toilet_love`]},text:()=>`Первая же кнопка — подогрев сиденья. Гусь выходит другим гусем: «Любовь с первого присяда».`,goose:`любовь ♥`},lose:{delta:{minutes:5,goose:-1,llama:1,flags:[`toilet_fountain`]},text:()=>`Кнопка с волнами оказалась фонтанчиком. Гусь пять минут сушится салфетками и выходит с достоинством. Лама плачет от смеха.`,goose:`…`,llama:`ха-ха-ха`}},{id:`hurry`,label:`Не разбираться — идём`,kind:`free`,act:`walk`,cost:{minutes:1},win:{delta:{goose:-1,llama:1},text:()=>`Гусь вздыхает: так и не узнает, на что способен этот трон. Лама уводит его за крыло: «Зато по графику».`,goose:`эх, трон…`,llama:`по графику`}}]},_={id:`feet`,place:`konbini`,title:`Двадцать тысяч шагов`,text:e=>`${o(e)}. Морось стихла, но с залива тянет холодным ветром. Шагомер Ламы: ${u(d(e))}. Силы — ${e.energy} из 10, а до станции ещё квартал${p(e)?` с чемоданом`:``}. Гусь бодрится: «10 000 шагов — это как за хлебом сходить».`,options:[{id:`windbreaker`,label:`Ветровки из рюкзака`,kind:`item`,act:`walk`,needs:`windbreaker`,cost:{minutes:4},win:{delta:{goose:1,llama:1},text:()=>`Ветровки застёгнуты до клюва — ветер мимо, идти сразу легче. Лама: «Не раз спасали — и опять».`,goose:`тепло ✓`,llama:`по плану`}},{id:`offline_map`,label:`Короче по офлайн-карте`,kind:`item`,act:`phone`,needs:`offline_map`,cost:{minutes:5},win:{delta:{energy:1},text:()=>`Офлайн-карта знает тропинку через двор — на 800 шагов короче. Лама: «По плану». Ноги говорят спасибо.`,llama:`по плану`}},{id:`plasters`,label:`Пластырь на мозоли`,kind:`item`,act:`rest`,needs:`plasters`,cost:{minutes:3},win:{delta:{energy:1,goose:1},text:()=>`Пластырь на мозоль — и Гусь снова марширует первым. Лама: «Кто его клал в рюкзак? Я его клала».`,goose:`как новый!`,llama:`я клала`}},{id:`socks`,label:`Сухие носки`,kind:`item`,act:`rest`,needs:`socks`,cost:{minutes:4},win:{delta:{wet:-.5,goose:1,llama:1,energy:1,removeItems:[`socks`]},text:e=>`Сухие носки на скамейке у комбини — лучший подарок на двадцатитысячном шаге.${s(e)} Мокрые — в пакет, до отеля.`,goose:`сухо!`,llama:`♥`}},{id:`foot_sheets`,label:`Охлаждающие пластыри для ног`,kind:`pay`,act:`buy`,cost:{yen:-500,minutes:8},win:{delta:{energy:1,llama:2,goose:-1},text:()=>`Пластыри для ног из комбини — холодок до самых пяток. Лама блаженствует. Гусь подсчитывает: «¥500, чтобы ногам было холодно?»`,llama:`блаженство`,goose:`¥500?!`}},{id:`bench`,label:`Посидеть на скамейке`,kind:`free`,act:`rest`,cost:{minutes:12},win:{delta:{energy:1,goose:1,llama:-1},text:e=>`Двенадцать минут на скамейке под навесом. Ноги оттаяли, Гусь сочинил пост про шагомер. Лама смотрит на часы: уже ${o(e)}.`,goose:`пост готов`,llama:`время…`}},{id:`push_on`,label:`Дойти на гордости`,kind:`free`,act:`walk`,walk:!0,cost:{minutes:4,energy:-1},win:{delta:{goose:1,llama:-2},text:()=>`Гусь марширует первым и сообщает, что совсем не устал. Лама считает, сколько раз он поморщился, — семь.`,goose:`как за хлебом!`,llama:`семь…`}}]},v={id:`izakaya`,place:`crossing`,title:`Салариманы зовут на тост`,text:e=>`${o(e)}. У переезда — крошечная идзакая под красным фонарём. Из дверей вываливаются салариманы с галстуками на лбу и машут Гусю: «Кампай!» Гусь уже улыбается. Лама смотрит на часы.${s(e)}`,options:[{id:`toast`,label:`Один тост — и бежим`,kind:`risk`,act:`eat`,cost:{minutes:8},chance:{slips:5,mods:[f(`разговорник: «спасибо, нам пора»`)]},win:{delta:{goose:2,flags:[`kanpai`]},text:()=>`Один тост лимонадом, три поклона, визитка на память — и вас отпускают. Гусь: «Трудоголики? Да они душевнее нас». Лама вежливо пригубила и смотрит на часы.`,goose:`кампай!`,llama:`✦`},lose:{delta:{minutes:12,llama:-1,flags:[`izakaya_karaoke`]},text:()=>`Тост перерос в караоке. Гусь спел припев любимой группы, салариманы прослезились. Вырвались через двенадцать минут.`,goose:`♪ ♪ ♪`,llama:`пора!!`}},{id:`photo`,label:`Фото с салариманами`,kind:`free`,act:`photo`,cost:{minutes:5},win:{delta:{llama:2,goose:-1,flags:[`photo_salarymen`]},text:()=>`Салариманы выстроились, как на корпоративе, и показали «V». Гусь в центре — с чужим галстуком на лбу, но без тоста.`,llama:`✦ щёлк ✦`,goose:`а тост?`}},{id:`magnet`,label:`Подарить магнитик из Хабаровска`,kind:`item`,act:`talk`,needs:`souvenirs`,cost:{minutes:6},win:{delta:{goose:2,llama:1,flags:[`kanpai`,`gift_magnet`]},text:()=>`Гусь торжественно вручает магнитик с Амуром. Салариманы передают его по кругу, кланяются, дарят визитки — и отпускают без тоста. «Дипломатия», — шепчет Гусь.`,goose:`дипломатия!`,llama:`✦`}},{id:`bow`,label:`Поклониться и пройти`,kind:`free`,act:`talk`,cost:{minutes:3},win:{delta:{goose:-1,llama:1},text:()=>`Поклон, ещё поклон, ответный поклон — и вы уже у шлагбаума. Гусь оглядывается на красный фонарь.`,goose:`эх…`,llama:`по плану`}}]},y={id:`lost_phone`,place:`crossing`,title:`Где телефон Гуся?`,text:e=>`${o(e)}. У турникетов Гусь хлопает себя по карманам: телефона нет! Последний раз он снимал полки в комбини. Там все фото дня и черновик поста.${s(e)}`,options:[{id:`powerbank`,label:`Пауэрбанк и «найти устройство»`,kind:`item`,act:`phone`,needs:`powerbank`,cost:{minutes:4},win:{delta:{minutes:4,goose:1,llama:1,flags:[`phone_returned`]},text:()=>`Пауэрбанк к телефону Ламы, «найти устройство» — точка мигает в комбини. Звонок — и продавец уже несёт телефон двумя руками.`,goose:`мой!`,llama:`по плану`}},{id:`call`,label:`Позвонить на его номер`,kind:`risk`,act:`phone`,cost:{minutes:3},chance:{slips:5,mods:[f(`разговорник: ответить продавцу`)]},win:{delta:{minutes:6,goose:1,llama:1,flags:[`phone_returned`]},text:()=>`Трубку взял продавец. Через шесть минут он у турникета — протягивает телефон двумя руками и кланяется. Все фото на месте.`,goose:`мой!`,llama:`✦`},lose:{delta:{minutes:14,energy:-1,llama:-1,flags:[`phone_returned`]},text:()=>`Продавец долго и вежливо объяснял что-то по-японски. Побежали сами — телефон ждал у кассы, ни царапины.`,goose:`фух…`,llama:`бегом…`}},{id:`run_back`,label:`Бегом назад в комбини`,kind:`free`,act:`run`,walk:!0,cost:{minutes:12,energy:-1},win:{delta:{goose:1,llama:-1,flags:[`phone_returned`]},text:()=>`Бегом обратно: телефон лежит у кассы, продавец сторожит его, как реликвию. В Японии потерянное возвращают.`,goose:`мой!`,llama:`ноги…`}},{id:`tomorrow`,label:`Заберём завтра утром`,kind:`free`,act:`walk`,cost:{minutes:1},win:{delta:{goose:-2,llama:1},text:()=>`Лама: «В Японии не пропадёт, утром заберём». Гусь соглашается и до самой платформы тянется к пустому карману.`,goose:`мой пост…`,llama:`не пропадёт`}}]},b={id:`corn_soup`,place:`konbini`,title:`Горячий автомат`,text:e=>`${o(e)}. У комбини — автомат с красной надписью «あったか〜い»: красные кнопки — горячее. Среди банок — кукурузный суп. Лама зябнет, Гусь пересчитывает монеты.`+(e.cash!==void 0&&e.cash<260?` В конверте почти пусто.`:``),options:[{id:`soup`,label:`Две банки супа`,kind:`pay`,act:`eat`,cash:!0,cost:{yen:-260,minutes:4},win:{delta:{goose:1,llama:1,flags:[`corn_soup`]},text:()=>`Горячие банки греют лапы. Последние зёрнышки кукурузы застревают на дне — Гусь стучит по банке, как по барабану. Лама снимает.`,goose:`тук-тук`,llama:`✦ щёлк ✦`}},{id:`random_can`,label:`Одну банку наугад`,kind:`risk`,act:`buy`,cash:!0,cost:{yen:-130,minutes:2},chance:{slips:6,mods:[f(`разговорник: прочитать надписи`),{label:`сорока: «красное — горячее»`,slips:1,when:a(`vending_hot`)}]},win:{delta:{goose:1,llama:1},text:()=>`Наугад — горячий сладкий кофе с молоком. Одна банка на двоих, ¥130. Гусь горд экономией, Лама греет лапы.`,goose:`экономно!`,llama:`тепло`},lose:{delta:{goose:-1},text:()=>`Синяя полоска — ледяное. Гусь дрожит, но пьёт холодный чай: «Не пропадать же ¥130».`,goose:`брр…`,llama:`хи-хи`}},{id:`pass`,label:`Пройти мимо`,kind:`free`,act:`walk`,cost:{},win:{delta:{goose:-1,llama:-1},text:()=>`Гусь: «¥260 за суп из банки? Дома из кукурузы сварим». Мёрзнут оба — Гусь ещё и из принципа.`,goose:`сварим!`,llama:`брр`}}]},x={id:`cat_billboard`,place:`crossing`,title:`Кот на экране`,text:e=>`${o(e)}. Над улицей у станции — огромный экран. Говорят, из него каждые пятнадцать минут высовывается 3D-кот. Лама уже держит телефон наготове. Гусь помнит про последний поезд.${s(e)}`,options:[{id:`wait_cat`,label:`Дождаться кота`,kind:`free`,act:`wait`,cost:{minutes:12},win:{delta:{llama:2,goose:-1,flags:[`cat_billboard`]},text:e=>`Двенадцать минут — и огромный рыжий кот высовывается из экрана над головами, зевает и машет лапой. Лама сняла. Гусь смотрит на часы: ${o(e)}.`,llama:`✦ КОТ ✦`,goose:`поезд…`}},{id:`catch_cat`,label:`Поймать кота с первой попытки`,kind:`risk`,act:`photo`,cost:{minutes:4},chance:{slips:4,mods:[{label:`пауэрбанк: снимать без пауз`,slips:2,when:e=>n(e,`powerbank`)},{label:`мыльница Ламы: без задержки затвора`,slips:2,when:e=>n(e,`camera`)},{label:`силы есть`,slips:1,when:e=>e.energy>=6}]},win:{delta:{llama:2,goose:1,flags:[`cat_billboard`]},text:()=>`Кот высунулся точно в кадр, будто позировал. Четыре минуты — и вы уже идёте дальше. Гусь: «Вот это эффективность».`,llama:`✦ КОТ ✦`,goose:`эффективно`},lose:{delta:{minutes:11,llama:-1,flags:[`cat_billboard`]},text:()=>`Кот выглянул, пока Лама протирала объектив. Ждали следующего круга — ещё одиннадцать минут.`,llama:`ну кот!`,goose:`поезд…`}},{id:`walk_by`,label:`Не ждать, идти дальше`,kind:`free`,act:`walk`,cost:{minutes:2},win:{delta:{llama:-1,goose:1},text:()=>`Кот так и не показался. Гусь: «Кот — реклама, а поезд — настоящий». Лама оглядывается до самого переезда.`,goose:`поезд!`,llama:`кот…`}}]},S={id:`sleepy_salaryman`,place:`crossing`,title:`Саларимэн спит`,text:e=>`${o(e)}. На скамейке у станции спит саларимэн-тануки: галстук набок, портфель сползает в лужу. Последний поезд скоро — похоже, и его тоже.${s(e)}`,options:[{id:`wake`,label:`Разбудить: поезд же!`,kind:`risk`,act:`talk`,cost:{minutes:2},chance:{slips:5,mods:[f(`разговорник: «последний поезд»`)]},win:{delta:{goose:1,llama:1,flags:[`salaryman_woke`]},text:()=>`Саларимэн вскакивает, смотрит на часы, кланяется трижды — и машет: «Сюда, короткая лестница!» Теперь вы знаете путь к платформе.`,goose:`спасибо!`,llama:`✦`},lose:{delta:{minutes:5,llama:-1},text:()=>`Саларимэн бормочет что-то вежливое и спит дальше. Пять минут неловких поклонов спящему тануки.`,goose:`…`,llama:`неловко`}},{id:`briefcase`,label:`Убрать портфель из лужи`,kind:`free`,act:`search`,cost:{minutes:3},win:{delta:{goose:1},text:()=>`Гусь задвинул портфель под скамейку, подальше от лужи. Саларимэн, не открывая глаз, кивнул сквозь сон.`,goose:`доброе дело`}},{id:`mask`,label:`Надеть ему свою маску для сна`,kind:`item`,act:`search`,needs:`sleep_mask`,cost:{minutes:2},win:{delta:{llama:2,goose:1,removeItems:[`sleep_mask`],flags:[`salaryman_mask`]},text:()=>`Гусь бережно надевает на тануки свою маску для сна и задвигает портфель под скамейку. Тануки улыбается во сне. Лама: «Самый японский кадр поездки». Маска осталась у него — на память.`,goose:`спи, друг`,llama:`✦ щёлк ✦`}},{id:`tiptoe`,label:`Тихо пройти мимо`,kind:`free`,act:`walk`,cost:{minutes:1},win:{delta:{llama:-1},text:()=>`Тихо, на цыпочках. Гусь шепчет: «Трудоголики. Утром — строем на работу, ночью — вот так». Сзади — плюх: портфель всё-таки в луже.`,goose:`тсс…`,llama:`ой…`}}]},C=[{id:`dinner`,place:`konbini`,title:`Голод в комбини`,text:e=>`${o(e)}. ${t[e.stay??`ryokan`].goal} А ужина ещё не было`+(e.stay===`ryokan`?` — ужин из девяти блюд в рёкане подавали в семь, когда вы были над морем`:``)+`. Рестораны закрыты, комбини светится, как маяк: Гусь уже у онигири, Лама изучает бэнто.`+(n(e,`snacks`)?` В рюкзаке шуршат сухари из дома.`:``),options:[{id:`onigiri`,label:`Онигири на двоих`,kind:`pay`,act:`eat`,cost:{yen:-600,minutes:5},win:{delta:{goose:2,llama:-1,flags:[`onigiri`]},text:()=>`Четыре онигири с тунцом — Гусь в восторге. Лама: «Опять рис. Третий раз за день».`,goose:`ням!`,llama:`опять рис…`}},{id:`bento`,label:`Бэнто и десерт`,kind:`pay`,act:`eat`,cost:{yen:-1800,minutes:10},win:{delta:{goose:2,llama:2,energy:1},text:()=>`Бэнто греют прямо на кассе. Дорого для комбини — но оба сыты и довольны.`,goose:`горячее!`,llama:`✦ щёлк ✦`}},{id:`snacks`,label:`Сухари из дома`,kind:`item`,act:`eat`,needs:`snacks`,cost:{minutes:2},win:{delta:{goose:-2,llama:1,removeItems:[`snacks`]},text:()=>`Экономно. Гусь: «Мы в Японии, а ты предлагаешь сухари из дома? Я не для этого летел!»`,goose:`я не для этого летел!`,llama:`зато экономно`}},{id:`lucky_shelf`,label:`Схватить что-то наугад`,kind:`risk`,act:`eat`,cost:{yen:-700,minutes:3},chance:{slips:5,mods:[{label:`разговорник`,slips:1,when:e=>n(e,`phrasebook`)}]},win:{delta:{goose:2,llama:2,flags:[`found_tasty`]},text:()=>`Наугад — и в точку: сэндвич с клубникой и сливками. Лама снимает, Гусь просит второй.`,goose:`ещё!`,llama:`✦ щёлк ✦`},lose:{delta:{goose:-1,llama:1,flags:[`too_spicy`]},text:()=>`Наугад — острое до слёз. Гусь пьёт воду из горлышка, Лама снимает это для альбома.`,goose:`ОСТРО!`,llama:`это в альбом`}},{id:`skip`,label:`Не ужинать`,kind:`free`,act:`walk`,cost:{},win:{delta:{goose:-2,llama:-1,energy:-1},text:()=>`Сэкономили. Гусь урчит на всю улицу, Лама делает вид, что это гром.`,goose:`урррр…`,llama:`это гром`}}]},{id:`phone`,place:`konbini`,title:`Сел телефон`,text:t=>`${o(t)}. Карта до ${e(t.stay)} — в телефоне Ламы, а у телефона 1%. Он гаснет на полуслове.${s(t)}`,options:[{id:`powerbank`,label:`Пауэрбанк`,kind:`item`,act:`phone`,needs:`powerbank`,cost:{minutes:1},win:{delta:{llama:1},text:()=>`Щёлк — и карта снова светится. Лама: «Всё по плану». Гусь делает вид, что тоже знал.`,llama:`по плану`}},{id:`charge`,label:`Зарядить в комбини`,kind:`pay`,act:`wait`,cost:{yen:-300,minutes:15},win:{delta:{goose:-1},text:()=>`Аренда зарядки у кассы — работает, но четверть часа стоят у розетки. Гусь считает онигири на полке.`,goose:`скукота…`}},{id:`ask`,label:`Спросить дорогу`,kind:`risk`,act:`talk`,cost:{minutes:5},chance:{slips:5,mods:[{label:`разговорник`,slips:2,when:e=>n(e,`phrasebook`)}]},win:{delta:{minutes:5,goose:1,llama:1,flags:[`kind_stranger`]},text:()=>`Прохожий не просто объяснил — проводил до угла и поклонился. Стереотип о вежливости — правда.`,goose:`аригато!`,llama:`✦`},lose:{delta:{minutes:20,llama:-1},text:()=>`Прохожий очень старался — 20 минут жестов и рисунков на салфетке. Вежливо, но по-английски никто.`,goose:`?!`,llama:`эээ…`}}]},{id:`rain`,place:`konbini`,title:`Ливень у комбини`,text:t=>`${o(t)}. До ${e(t.stay)} 12 минут пешком${t.flags.includes(`heavy_bags`)?`, и чемодан грохочет колёсиками`:``}. Ливень стеной. В автомате у входа — красный зонт за ¥500.${s(t)}`,options:[{id:`umbrella`,label:`Купить зонт`,kind:`pay`,act:`buy`,cash:!0,cost:{yen:-500,minutes:13},win:{delta:{llama:1,addItems:[`umbrella`],flags:[`rain_dry`]},text:e=>`Под красным зонтом — сухими.${s(e)} Лама снимает капли на куполе.`,cue:`buy_umbrella`}},{id:`windbreaker`,label:`Достать ветровки`,kind:`item`,act:`walk`,needs:`windbreaker`,cost:{minutes:12},win:{delta:{goose:1,llama:1,flags:[`rain_dry`]},text:()=>`Ветровки, которые «не раз спасали», спасли и сейчас. Сухо и бесплатно.`,goose:`сухо ✓`,llama:`по плану`}},{id:`poncho`,label:`Дождевики-пончо`,kind:`item`,act:`walk`,needs:`raincoat`,cost:{minutes:12},win:{delta:{goose:1,wet:.1},text:e=>`Два шуршащих пончо — и вперёд под ливень.${s(e)} Гусь доволен: сухо и бесплатно. Лама в пончо «как мешок с ушами» и запретила себя снимать.`,goose:`сухо ✓`,llama:`не снимать!`}},{id:`wait`,label:`Переждать под козырьком`,kind:`risk`,act:`wait`,cost:{minutes:10},chance:{slips:4,mods:[{label:`офлайн-карта с радаром дождя`,slips:2,when:e=>n(e,`offline_map`)}]},win:{delta:{minutes:12,llama:1,flags:[`rain_dry`]},text:()=>`Через десять минут дождь стих. Идут по блестящему асфальту — Лама в восторге от отражений.`,llama:`✦ щёлк ✦`},lose:{delta:{minutes:9,wet:.6,goose:-1,llama:-1,flags:[`soaked`]},text:e=>`Ждали десять минут — дождь только сильнее. Пришлось бежать.${s(e)}`,goose:`брр!`,llama:`кап… кап…`,cue:`run_in_rain`}},{id:`run`,label:`Бежать так`,kind:`free`,act:`run`,walk:!0,cost:{minutes:9},win:{delta:{wet:.6,goose:-1,llama:-1,flags:[`soaked`]},text:e=>`9 минут бегом.${s(e)} Зато ¥500 целы.`,cue:`run_in_rain`}}]},{id:`crossing`,place:`crossing`,title:`Переезд закрыт`,text:e=>`${o(e)}. Кан-кан-кан — шлагбаум опустился. Японские переезды могут стоять закрытыми по несколько минут подряд.`,options:[{id:`wait`,label:`Ждать`,kind:`free`,act:`wait`,cost:{minutes:6},win:{delta:{llama:1,goose:-1},text:()=>`Поезд пролетел в полуметре — Лама поймала кадр. Гусь шесть минут смотрел на рельсы и думал о рамене.`,llama:`✦ щёлк ✦`,goose:`есть хочу`}},{id:`kairo`,label:`Ждать с грелками-кайро`,kind:`item`,act:`wait`,needs:`kairo`,cost:{minutes:6},win:{delta:{llama:1,goose:1,wet:-.2},text:()=>`Грелки-кайро — в карманы, ладони — на грелки. Шесть минут у шлагбаума в тепле: Лама снимает поезд, Гусь даже не ворчит.`,llama:`✦ щёлк ✦`,goose:`тепло…`}},{id:`underpass`,label:`Обойти через переход`,kind:`risk`,act:`walk`,walk:!0,cost:{energy:-1},chance:{slips:4,mods:[{label:`офлайн-карта`,slips:2,when:e=>n(e,`offline_map`)}]},win:{delta:{minutes:3,goose:1},text:()=>`Подземный переход в двух шагах — вынырнули с той стороны раньше поезда.`,goose:`ха!`},lose:{delta:{minutes:15,energy:-1,llama:-1},text:()=>`Ближайший переход оказался за два квартала. Вернулись к тому же переезду — он как раз открылся.`,goose:`ну вот…`,llama:`по плану было ждать`}}]},{id:`turnstile`,place:`crossing`,title:`Турникет на одного`,text:()=>`Станция. Одна транспортная карта на двоих: турникет пискнул, пустил Гуся и захлопнулся перед Ламой.`,options:[{id:`card2`,label:`Вторая карта`,kind:`item`,act:`walk`,needs:`ic_card_2`,cost:{minutes:1},win:{delta:{llama:1},text:()=>`Вторая карта — пик, и Лама рядом. Мелочь, которую на сборах легко забыть.`,llama:`по плану`}},{id:`ticket`,label:`Купить билет`,kind:`pay`,act:`pay`,cash:!0,cost:{yen:-200,minutes:6},win:{delta:{goose:-1},text:()=>`Автомат с билетами нашёлся — по-японски, но с картинками. Шесть минут и ¥200 за урок.`,goose:`кто знал…`}},{id:`coins`,label:`Билет мелочью из монетницы`,kind:`item`,act:`pay`,needs:`coin_purse`,cost:{yen:-200,minutes:2},win:{delta:{goose:1},text:()=>`Гусь отсчитал ровно ¥200 сотенными — монетница звякнула, как касса. Две минуты, и Лама за турникетом. «Монеты тяжёлые, зато вот», — сияет Гусь.`,goose:`звяк!`}},{id:`staff`,label:`Позвать дежурного`,kind:`free`,act:`talk`,cost:{minutes:10},win:{delta:{goose:-1,llama:-1,flags:[`one_card`]},text:()=>`Дежурный выслушал жесты Гуся, пропустил Ламу и показал, где доплатить на выходе. Вежливо — и очень долго.`,goose:`спасибо…`,llama:`неловко`}}]},{id:`last_train`,place:`platform`,title:`Последний поезд`,text:e=>`${o(e)}. Последний поезд уже у платформы, двери закроются через 8 минут — а до них лестница, переход и ещё лестница.${s(e)} Ноги гудят: силы ${e.energy} из 10.`+(e.flags.includes(`cat_billboard`)?` Кот на экране стоил того? Сейчас узнаем.`:``)+(e.flags.includes(`salaryman_woke`)?` Саларимэн машет с короткой лестницы.`:``),options:[{id:`dash`,label:`Бежать на платформу`,kind:`risk`,act:`run`,mini:`dash`,walk:!0,cost:{energy:-1},chance:{slips:4,mods:[{label:`силы есть`,slips:2,when:e=>e.energy>=6},{label:`налегке`,slips:2,when:e=>!e.flags.includes(`heavy_bags`)},{label:`офлайн-карта`,slips:1,when:e=>n(e,`offline_map`)},{label:`саларимэн показал лестницу`,slips:1,when:e=>e.flags.includes(`salaryman_woke`)},{label:`ноги гудят`,slips:-2,when:e=>e.energy<=2}]},win:{delta:{minutes:8,goose:1,llama:1},text:()=>`Двери закрылись прямо за хвостом Ламы. Оба тяжело дышат и смеются.`,goose:`успели!`,llama:`✦`},lose:{delta:{minutes:45,yen:-900,energy:-2,goose:1,llama:1,flags:[`missed_last_train`,`ramen_auntie`]},cash:!0,text:e=>`Двери закрылись перед клювом. Дальше — пешком, а по пути крошечная раменная, где тётушка варит домашний рамен. Лучшая еда поездки — но уже ${o(e)}.`,goose:`РАМЕН!`,llama:`✦ щёлк ✦`}},{id:`taxi`,label:`Такси`,kind:`pay`,act:`pay`,cost:{yen:-2800,minutes:15},win:{delta:{goose:-1,flags:[`taxi`]},text:()=>`Такси с белыми чехлами и дверью, которая открывается сама. Красиво — и ¥2 800 за 7 км.`,goose:`сколько?!`}},{id:`walk`,label:`Пешком 7 км`,kind:`free`,act:`walk`,walk:!0,cost:{minutes:90,energy:-3},win:{delta:{llama:1,goose:-1,flags:[`night_walk`]},text:()=>`Полтора часа по ночному Токио: тихие улочки, автоматы светятся, лиса перебежала дорогу. Лама счастлива, ноги — нет.`,llama:`✦ лиса! ✦`,goose:`ноги…`}}]}],w=e=>C.find(t=>t.id===e),T=[[w(`dinner`),m],[w(`phone`),h,g],[w(`rain`),_],[w(`crossing`),v],[w(`turnstile`),y]],E=[{ev:b,slots:[1,2]},{ev:x,slots:[3]},{ev:S,slots:[4]}];function D(e){let t=t=>t[Math.min(t.length-1,Math.floor(e()*t.length))],n=T.map(e=>t(e));if(e()<.4){let e=t(E);n[t(e.slots)]=e.ev}return[...n,w(`last_train`)]}var O=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},k=class extends O{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function A(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var j={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:A,toHexString:A},M={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},N=[j,M,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=M.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return M.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=M.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return M.toHexString(i)}}];function P(e){return N.find(t=>t.match(e))}var F=class extends O{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=P(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=A(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},I=class extends O{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},L=class extends O{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},R=class extends O{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},z=class extends O{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},B=`.lil-gui {
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
}`;function V(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var H=!1,U=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!H&&o&&(V(B),H=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a)}add(e,t,n,r,i){if(Object(n)===n)return new R(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new L(this,e,t,n,r,i);case`boolean`:return new k(this,e,t);case`string`:return new z(this,e,t);case`function`:return new I(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new F(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof I||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof I)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};function W(e,t,n,r){let i=new U({title:`${e} · настройка (Tab, сохранить — P)`});i.domElement.classList.add(`tuning`);for(let e of document.querySelectorAll(`style`))e.textContent?.includes(`.lil-gui`)&&e.textContent.includes(`@font-face`)&&(e.textContent=e.textContent.replace(/@font-face\s*{[^}]*}/g,``));for(let e of Object.keys(n)){let a=n[e];i.add(t,e,a.min,a.max,a.step).name(a.label).onChange(()=>r?.())}i.hide();let a=()=>{let n=JSON.stringify(t,null,2);return console.log(`TUNING ${e}`,n),window.__tuning={id:e,...t},navigator.clipboard?.writeText(n).catch(()=>void 0),n},o=()=>{i._hidden?i.show():i.hide()};return i.add({"сохранить (P)":a},`сохранить (P)`),window.addEventListener(`keydown`,e=>{e.code===`Tab`?(e.preventDefault(),o()):e.code===`KeyP`&&a()}),{gui:i,dump:a,toggle:o}}export{s as i,D as n,l as r,W as t};