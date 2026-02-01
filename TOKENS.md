````md
# GIDSAM UI SYSTEM — TOKENS (Design System v1.1)

Единый набор токенов для проекта «ГИДСАМ».
Используется ВЕЗДЕ: все блоки, все страницы, все виджеты, все локальные страницы.
Никаких других цветов, теней, радиусов и размеров — только отсюда.

---

## 1) CSS Variables (вставлять в :root или в .gds-scope)

```css
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
  --g-r-16: 16px;  /* mobile bottom-sheet */
  --g-r-12: 12px;  /* cards, filters, modals (main) */
  --g-r-10: 10px;  /* buttons, inputs, selects */
  --g-r-8:  8px;   /* icons, tiny controls */

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

  --g-fs-card-title: 18px;   /* 18–20px допустимо, но по умолчанию 18 */
  --g-fw-card-title: 800;

  --g-fs-body: 14px;
  --g-fw-body: 400;          /* допускается 500 локально для акцента */

  --g-fs-btn: 14px;
  --g-fw-btn: 700;           /* 600–700 допустимо */

  --g-fs-meta: 13px;
  --g-fw-meta: 600;          /* 500–600 допустимо */

  --g-fs-badge: 12px;         /* 10–12 допустимо, по умолчанию 12 */
  --g-fw-badge: 600;

  /* === FOCUS === */
  --g-focus: rgba(30,124,242,.60);
  --g-focus-ring: 0 0 0 2px rgba(30,124,242,.15);

  /* === BORDERS === */
  --g-border: 1px solid var(--g-line);

  /* === SHADOWS (Apple / iOS) === */
  --g-shadow-1: 0 1px 3px rgba(0,0,0,.06), 0 4px 8px rgba(0,0,0,.08);     /* light */
  --g-shadow-2: 0 2px 4px rgba(0,0,0,.08), 0 8px 16px rgba(0,0,0,.10);    /* card */
  --g-shadow-3: 0 4px 8px rgba(0,0,0,.12), 0 12px 24px rgba(0,0,0,.15);   /* hover */
  --g-shadow-4: 0 5px 5px -3px rgba(0,0,0,.20), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12); /* modal */
  --g-shadow-blue: 0 2px 4px rgba(30,124,242,.12), 0 6px 12px rgba(30,124,242,.15); /* accent hover */

  /* === TRANSITIONS === */
  --g-tr-fast: .15s ease;
  --g-tr: .20s ease;
  --g-tr-slow: .30s ease-in-out;

  /* === Z-INDEX (общая логика) === */
  --g-z-overlay: 995;
  --g-z-modal: 1000;
  --g-z-toast: 1100;
}
````

---

## 2) Breakpoints (единый стандарт)

```css
/* Mobile: default (0+) */
@media (min-width: 768px){ /* Tablet */ }
@media (min-width: 1024px){ /* Desktop */ }
```

---

## 3) Grid Tokens (минимум 2 колонки всегда)

```css
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
```

---

## 4) Component Primitives (база для копипасты)

### 4.1 Card (базовая карточка)

```css
.gds-card{
  border-radius: var(--g-r-12);
  background: var(--g-white);
  border: 1px solid rgba(0,0,0,.08); /* допускается, если нужен более “видимый” контур */
  box-shadow: var(--g-shadow-2);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow var(--g-tr), transform var(--g-tr);
}

.gds-card:hover{
  box-shadow: var(--g-shadow-3);
}
```

### 4.2 Image container (фиксированное изображение)

```css
.gds-img{
  width: 100%;
  aspect-ratio: 16 / 9; /* менять только по типу карточки (1:1, 4:3, 16:6, 9:16) */
  background: #f0f0f0;
  overflow: hidden;
}

.gds-img img{
  width:100%;
  height:100%;
  object-fit: cover;
  display:block;
}
```

### 4.3 Buttons

```css
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
```

### 4.4 Inputs / Selects

```css
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
```

### 4.5 Pills (таблетки)

```css
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
```

### 4.6 Filters container

```css
.gds-filters{
  border-radius: var(--g-r-12);
  border: var(--g-border);
  background: var(--g-white);
  padding: var(--g-p-10);
  margin: 8px 0 12px;
  box-shadow: var(--g-shadow-1);
}
```

---

## 5) Aspect Ratio Tokens (по типам карточек)

```css
/* Companies / Assort: */
.gds-ar-1x1{ aspect-ratio: 1 / 1; }

/* Events / Afisha: */
.gds-ar-4x3{ aspect-ratio: 4 / 3; }

/* Featured / Reco: */
.gds-ar-16x9{ aspect-ratio: 16 / 9; }

/* Promos (узкие баннеры): */
.gds-ar-16x6{ aspect-ratio: 16 / 6; }

/* Clips / Video: */
.gds-ar-9x16{ aspect-ratio: 9 / 16; }
```

---

## 6) Accessibility (минимум обязательный)

* Интерактивные элементы имеют `aria-label`, если нет текста.
* На мобиле не полагаться на hover.
* Везде есть состояния: loading / empty / error (визуально и текстом).
* Фокус видимый: outline 2px + мягкий ring через `--g-focus-ring`.

---

## 7) Copy-Paste Block (быстрый старт для любого блока)

```css
.gds-scope{
  font-family: var(--g-font);
  color: var(--g-text-secondary);
}

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
```

```
```
