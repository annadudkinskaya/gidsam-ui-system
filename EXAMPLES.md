```md
# CONVENTIONS.md — Naming, Rules, No-Custom Policy (Design System v1.1)

Этот файл фиксирует правила именования, файловую структуру, принципы сборки UI и запрет «самодеятельности» для проекта «ГИДСАМ».

TOKENS.md = ЧЕМ красим  
STYLES.css = КАК красим (канонические стили на токенах)  
COMPONENTS.md = ИЗ ЧЕГО собираем (HTML-структуры)  
LAYOUTS.md = КАК раскладываем (секции/страницы/паттерны)  
EXAMPLES.md = КОПИПАСТА (готовые блоки)

Если что-то не описано в этих файлах — в системе этого нет.

---

## 1) Общие правила (жёсткие)

1) Никаких inline-стилей (`style=""`) — запрещено.  
2) Никаких «уникальных» классов вне системы — запрещено.  
3) Никаких новых цветов, теней, радиусов, размеров — запрещено (только TOKENS.md).  
4) Никаких вариаций структуры карточки — запрещено (только COMPONENTS.md).  
5) Все списки/ленты всегда через `.gidsam-grid` (минимум 2 колонки).  
6) Все изображения только в фиксированном контейнере `.gds-img` + AR-класс.  
7) Все состояния UI обязательны: `loading / empty / error`.  
8) Любая доработка сначала фиксируется правкой в `TOKENS.md / STYLES.css / COMPONENTS.md / LAYOUTS.md`, и только потом применяется в коде блоков.

---

## 2) Именование файлов (репозиторий)

В корне:
- PROMPT.md — «закон системы», общий регламент
- TOKENS.md — токены (css vars, shadows, radii, typography)
- STYLES.css — канонический слой стилей на токенах
- COMPONENTS.md — канонические HTML-компоненты
- LAYOUTS.md — компоновка секций/страниц (паттерны)
- EXAMPLES.md — готовые «copy-paste» блоки
- CHECKLIST.md — чеклист приёмки

---

## 3) Именование классов (UI)

Префиксы:
- `gidsam-*` — контейнеры сетки/обёртки уровня «лента/раздел»
- `gds-*` — атомы и компоненты дизайн-системы
- `is-*` — состояния (если нужно): `is-loading`, `is-active` (предпочтительнее BEM-модификаторы на gds)

Разрешённые базовые классы системы:
- `.gidsam-grid`
- `.gds-card`, `.gds-card-body`, `.gds-card-title`
- `.gds-img` + `.gds-ar-*`
- `.gds-btn`, `.gds-btn--primary`, `.gds-btn--secondary`
- `.gds-pill`, `.gds-pill--active`, `.gds-pill--ghost`
- `.gds-input`, `.gds-select`
- `.gds-filters`
- `.gds-title`, `.gds-meta`
- `.gds-loading`, `.gds-empty`, `.gds-error`
- `.gds-section-head`

Любые новые классы допускаются только если:
- они добавлены в STYLES.css,
- и описаны в COMPONENTS.md/LAYOUTS.md,
- и не дублируют существующее.

---

## 4) Нейминг сущностей (данные → UI)

В UI названия сущностей:
- Companies: «Компании»
- Events/Afisha: «Афиши»
- Promos: «Акции»
- Jobs: «Вакансии»
- News/Articles: «Новости / Статьи»
- Featured/Reco: «Рекомендуем»
- Assort: «Ассортимент»
- Clips: «Клипсы»

Нельзя: «места», «объекты», «позиции» в UI-тексте без контекста.

---

## 5) Изображения и контейнеры (обязательное)

Всегда:
- фиксированный контейнер `.gds-img`
- внутри `img` с `object-fit: cover`
- AR-класс только из набора:
  - `.gds-ar-1x1`
  - `.gds-ar-4x3`
  - `.gds-ar-16x9`
  - `.gds-ar-16x6`
  - `.gds-ar-9x16`

---

## 6) Доступность (минимум)

- Если кнопка без текста → `aria-label` обязателен
- Фокус видимый (`outline` + ring из токенов)
- На мобиле нельзя строить UX на hover
- Все статусы (loading/empty/error) должны быть и визуально, и текстом

---

## 7) Политика изменений

Любая правка UI считается принятой только если:
- обновлён один из «канонических» файлов системы,
- и новая версия применена в блоках,
- и пройдён CHECKLIST.md.

КОНЕЦ CONVENTIONS.md
```

```md
# CHECKLIST.md — Acceptance Checklist (Design System v1.1)

Чеклист обязателен для приёмки любого блока/страницы/виджета «ГИДСАМ».
Если хотя бы один пункт не выполнен — работа не принимается.

---

## A) Сетка и компоновка

- [ ] Все ленты/списки собраны через `.gidsam-grid`
- [ ] На Mobile минимум 2 колонки (не допускается 1 колонка)
- [ ] Tablet ≥768: 3 колонки
- [ ] Desktop ≥1024: 5 колонок
- [ ] Gap соответствует токенам (`--g-gap-10` / `--g-gap-12`)
- [ ] Нет ручных grid-настроек вне системы

---

## B) Карточки и изображения

- [ ] Карточка использует `.gds-card`
- [ ] Карточка кликабельна целиком
- [ ] Изображение всегда в `.gds-img` + `.gds-ar-*`
- [ ] `img` внутри: `object-fit: cover`
- [ ] Высота карточек одного типа не «прыгает»
- [ ] Нет растяжения контейнера контентом

---

## C) Цвета / радиусы / тени

- [ ] Используются только токены из TOKENS.md
- [ ] Border-radius только из набора (`--g-r-16/12/10/8`)
- [ ] Тени только из набора (`--g-shadow-*`)
- [ ] Нет «случайных» цветов/теней/радиусов

---

## D) Типографика

- [ ] Шрифт: `--g-font`
- [ ] Размеры текста соответствуют токенам (page/card/body/meta/badge)
- [ ] Нет произвольных размеров шрифта вне системы

---

## E) Интерактив

- [ ] Кнопки используют `.gds-btn` и модификаторы
- [ ] У кнопок/пиллов есть hover/active/focus (по системе)
- [ ] Нет сценариев, завязанных только на hover (мобайл)

---

## F) Состояния UI (обязательно)

- [ ] Есть `loading` (пока ждём данные)
- [ ] Есть `empty` (нет данных/результатов)
- [ ] Есть `error` (ошибка загрузки)
- [ ] Состояния видны и имеют текст

---

## G) Доступность (минимум)

- [ ] `aria-label` у иконок/кнопок без текста
- [ ] Видимый focus (`outline` + ring)
- [ ] Достаточные размеры клика (touch-friendly)

---

## H) Запреты

- [ ] Нет inline-стилей (`style=""`)
- [ ] Нет кастомных классов вне системы
- [ ] Нет «уникальных» разовых решений
- [ ] Нет 1-колоночной выдачи

---

## Итог

- [ ] Соответствует PROMPT.md / TOKENS.md / STYLES.css / COMPONENTS.md / LAYOUTS.md
- [ ] Можно копировать этот блок и применять в других местах без изменений

КОНЕЦ CHECKLIST.md
```

```css
/* STYLES.css — Base Styling (Design System v1.1)
   Канонический слой стилей «ГИДСАМ».
   Только токены. Никаких кастомов вне системы.
*/

:root{
  /* === BRAND / ACCENT === */
  --g-blue: #1E7CF2;
  --g-blue-hover: #1666CC;
  --g-blue-soft: rgba(30,124,242,.10);

  /* === TEXT === */
  --g-ink: #000000;
  --g-text-primary: #111111;
  --g-text-secondary: #222222;
  --g-muted: #6F7B8A;

  /* === NEUTRALS === */
  --g-line: #eef1f4;
  --g-bg-light: #f7f8fa;
  --g-bg-hover: #f0f7ff;
  --g-white: #ffffff;

  /* === RADII === */
  --g-r-16: 16px;
  --g-r-12: 12px;
  --g-r-10: 10px;
  --g-r-8:  8px;

  /* === SPACING === */
  --g-gap-10: 10px;
  --g-gap-12: 12px;

  --g-p-10: 10px;
  --g-p-12: 12px;
  --g-p-14: 14px;
  --g-p-16: 16px;

  /* === TYPOGRAPHY === */
  --g-font: "TildaSans","Tilda Sans", Inter, Roboto, system-ui, -apple-system, "Segoe UI", Arial, sans-serif;

  --g-fs-page-title: 22px;
  --g-fw-page-title: 800;

  --g-fs-card-title: 18px;
  --g-fw-card-title: 800;

  --g-fs-body: 14px;
  --g-fw-body: 400;

  --g-fs-btn: 14px;
  --g-fw-btn: 700;

  --g-fs-meta: 13px;
  --g-fw-meta: 600;

  --g-fs-badge: 12px;
  --g-fw-badge: 600;

  /* === FOCUS === */
  --g-focus: rgba(30,124,242,.60);
  --g-focus-ring: 0 0 0 2px rgba(30,124,242,.15);

  /* === BORDERS === */
  --g-border: 1px solid var(--g-line);

  /* === SHADOWS (Apple / iOS) === */
  --g-shadow-1: 0 1px 3px rgba(0,0,0,.06), 0 4px 8px rgba(0,0,0,.08);
  --g-shadow-2: 0 2px 4px rgba(0,0,0,.08), 0 8px 16px rgba(0,0,0,.10);
  --g-shadow-3: 0 4px 8px rgba(0,0,0,.12), 0 12px 24px rgba(0,0,0,.15);
  --g-shadow-4: 0 5px 5px -3px rgba(0,0,0,.20), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  --g-shadow-blue: 0 2px 4px rgba(30,124,242,.12), 0 6px 12px rgba(30,124,242,.15);

  /* === TRANSITIONS === */
  --g-tr-fast: .15s ease;
  --g-tr: .20s ease;
  --g-tr-slow: .30s ease-in-out;
}

/* ===== Scope ===== */
.gds-scope{
  font-family: var(--g-font);
  color: var(--g-text-secondary);
}

/* ===== Titles / Meta ===== */
.gds-title{
  font-size: var(--g-fs-page-title);
  font-weight: var(--g-fw-page-title);
  color: var(--g-text-primary);
  margin: 0 0 12px;
}
.gds-meta{
  font-size: var(--g-fs-meta);
  font-weight: var(--g-fw-meta);
  color: var(--g-muted);
}

/* ===== Grid (minimum 2 columns always) ===== */
.gidsam-grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--g-gap-10);
}
@media (min-width: 768px){
  .gidsam-grid{
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--g-gap-12);
  }
}
@media (min-width: 1024px){
  .gidsam-grid{
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: var(--g-gap-12);
  }
}

/* ===== Card ===== */
.gds-card{
  border-radius: var(--g-r-12);
  background: var(--g-white);
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: var(--g-shadow-2);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow var(--g-tr), transform var(--g-tr);
}
.gds-card:hover{
  box-shadow: var(--g-shadow-3);
}
.gds-card-body{
  padding: var(--g-p-12);
}
.gds-card-title{
  margin: 0 0 6px;
  font-size: var(--g-fs-card-title);
  font-weight: var(--g-fw-card-title);
  color: var(--g-text-primary);
  line-height: 1.15;
}

/* ===== Image ===== */
.gds-img{
  width: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
.gds-img img{
  width:100%;
  height:100%;
  object-fit: cover;
  display:block;
}

/* Aspect ratios */
.gds-ar-1x1{ aspect-ratio: 1 / 1; }
.gds-ar-4x3{ aspect-ratio: 4 / 3; }
.gds-ar-16x9{ aspect-ratio: 16 / 9; }
.gds-ar-16x6{ aspect-ratio: 16 / 6; }
.gds-ar-9x16{ aspect-ratio: 9 / 16; }

/* ===== Buttons ===== */
.gds-btn{
  font-family: var(--g-font);
  border-radius: var(--g-r-10);
  height: 40px;
  padding: 0 14px;
  font-size: var(--g-fs-btn);
  font-weight: var(--g-fw-btn);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background var(--g-tr), border-color var(--g-tr), box-shadow var(--g-tr), transform var(--g-tr);
}
.gds-btn:focus{
  outline: 2px solid var(--g-focus);
  outline-offset: 2px;
  box-shadow: var(--g-focus-ring);
}

.gds-btn--primary{
  background: var(--g-blue);
  color: var(--g-white);
  border-color: var(--g-blue);
}
.gds-btn--primary:hover{
  background: var(--g-blue-hover);
  border-color: var(--g-blue-hover);
  box-shadow: var(--g-shadow-blue);
}

.gds-btn--secondary{
  background: var(--g-white);
  color: var(--g-blue);
  border-color: var(--g-blue);
}
.gds-btn--secondary:hover{
  background: var(--g-bg-hover);
  border-color: var(--g-blue-hover);
}

/* ===== Inputs / Selects ===== */
.gds-input,
.gds-select{
  font-family: var(--g-font);
  height: 44px;
  border-radius: var(--g-r-10);
  border: var(--g-border);
  background: var(--g-bg-light);
  padding: 0 12px;
  font-size: var(--g-fs-body);
  color: var(--g-text-primary);
  transition: border-color var(--g-tr), box-shadow var(--g-tr), background var(--g-tr);
}
.gds-input:focus,
.gds-select:focus{
  border-color: var(--g-blue);
  box-shadow: var(--g-focus-ring);
  outline: none;
}

/* ===== Pills ===== */
.gds-pill{
  height: 40px;
  padding: 0 12px;
  border-radius: var(--g-r-12);
  border: 1px solid rgba(30,124,242,.50);
  background: var(--g-white);
  color: var(--g-blue);
  font-size: var(--g-fs-btn);
  font-weight: 600;
  cursor: pointer;
  transition: background var(--g-tr), color var(--g-tr), border-color var(--g-tr), box-shadow var(--g-tr);
}
.gds-pill--active{
  background: var(--g-blue);
  color: var(--g-white);
  border-color: var(--g-blue);
  font-weight: 700;
}
.gds-pill--ghost{
  border-color: #ddd;
  background: var(--g-bg-light);
  color: #666;
  font-weight: 600;
}

/* ===== Filters container ===== */
.gds-filters{
  border-radius: var(--g-r-12);
  border: var(--g-border);
  background: var(--g-white);
  padding: var(--g-p-10);
  margin: 8px 0 12px;
  box-shadow: var(--g-shadow-1);
}

/* ===== States ===== */
.gds-loading,
.gds-empty,
.gds-error{
  border-radius: var(--g-r-12);
  border: var(--g-border);
  background: var(--g-white);
  padding: var(--g-p-12);
  box-shadow: var(--g-shadow-1);
}
.gds-error-title,
.gds-empty-title{
  font-size: var(--g-fs-card-title);
  font-weight: var(--g-fw-card-title);
  color: var(--g-text-primary);
  margin: 0 0 6px;
}

/* ===== Section head ===== */
.gds-section-head{
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin: 0 0 12px;
}
```

````md
# EXAMPLES.md — Reference Blocks for Copy-Paste (Design System v1.1)

Этот файл содержит готовые блоки для копипаста.
Все примеры используют только: TOKENS.md + STYLES.css + COMPONENTS.md + LAYOUTS.md.
Если пример отсюда скопирован — он считается «правильным по системе».

---

## 1) Минимальный раздел (заголовок + фильтры + сетка)

```html
<section class="gds-scope">
  <div class="gds-section-head">
    <h2 class="gds-title">Раздел</h2>
  </div>

  <div class="gds-filters" aria-label="Фильтры">
    <button class="gds-pill gds-pill--active" type="button">Все</button>
    <button class="gds-pill" type="button">Сегодня</button>
    <button class="gds-pill" type="button">Неделя</button>
    <button class="gds-pill gds-pill--ghost" type="button">Сброс</button>
  </div>

  <div class="gidsam-grid" aria-label="Лента карточек">
    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть карточку">
      <div class="gds-img gds-ar-16x9">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Заголовок</h3>
        <div class="gds-meta">Мета-информация</div>
      </div>
    </article>

    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть карточку">
      <div class="gds-img gds-ar-16x9">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Заголовок</h3>
        <div class="gds-meta">Мета-информация</div>
      </div>
    </article>
  </div>
</section>
````

---

## 2) Компании (1:1)

```html
<section class="gds-scope">
  <div class="gds-section-head">
    <h2 class="gds-title">Компании</h2>
  </div>

  <div class="gidsam-grid" aria-label="Лента компаний">
    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть компанию">
      <div class="gds-img gds-ar-1x1">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Название компании</h3>
        <div class="gds-meta">Адрес • Рейтинг • Телефон</div>
      </div>
    </article>
  </div>
</section>
```

---

## 3) Афиши (4:3)

```html
<section class="gds-scope">
  <div class="gds-section-head">
    <h2 class="gds-title">Афиши</h2>
  </div>

  <div class="gidsam-grid" aria-label="Лента афиш">
    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть афишу">
      <div class="gds-img gds-ar-4x3">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Событие</h3>
        <div class="gds-meta">Дата • Место</div>
      </div>
    </article>
  </div>
</section>
```

---

## 4) Акции (16:6)

```html
<section class="gds-scope">
  <div class="gds-section-head">
    <h2 class="gds-title">Акции</h2>
  </div>

  <div class="gidsam-grid" aria-label="Лента акций">
    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть акцию">
      <div class="gds-img gds-ar-16x6">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Оффер / Промокод</h3>
        <div class="gds-meta">До даты • Условия</div>
      </div>
    </article>
  </div>
</section>
```

---

## 5) Вакансии / табличный контент (всё равно карточки, всё равно 2+ колонки)

```html
<section class="gds-scope">
  <div class="gds-section-head">
    <h2 class="gds-title">Вакансии</h2>
  </div>

  <div class="gidsam-grid" aria-label="Лента вакансий">
    <article class="gds-card" role="button" tabindex="0" aria-label="Открыть вакансию">
      <div class="gds-img gds-ar-16x9">
        <img src="" alt="">
      </div>
      <div class="gds-card-body">
        <h3 class="gds-card-title">Должность</h3>
        <div class="gds-meta">от 80 000 до 130 000 ₽ • Город • График</div>
      </div>
    </article>
  </div>
</section>
```

---

## 6) Состояния UI (обязательные)

### Loading

```html
<div class="gds-loading" aria-live="polite">
  <div class="gds-meta">Загрузка…</div>
</div>
```

### Empty

```html
<div class="gds-empty">
  <div class="gds-empty-title">Ничего не найдено</div>
  <div class="gds-meta">Попробуйте изменить фильтры</div>
</div>
```

### Error

```html
<div class="gds-error" role="alert">
  <div class="gds-error-title">Ошибка загрузки</div>
  <div class="gds-meta">Попробуйте позже</div>
</div>
```

---

## 7) Кнопки и элементы формы (каноника)

```html
<div class="gds-scope">
  <button class="gds-btn gds-btn--primary" type="button">Primary</button>
  <button class="gds-btn gds-btn--secondary" type="button">Secondary</button>

  <div style="height:10px"></div>

  <input class="gds-input" type="text" placeholder="Поиск" aria-label="Поиск">
  <div style="height:10px"></div>

  <select class="gds-select" aria-label="Сортировка">
    <option>Выбрать</option>
    <option>По рейтингу</option>
    <option>По свежести</option>
  </select>
</div>
```

КОНЕЦ EXAMPLES.md

```
```

