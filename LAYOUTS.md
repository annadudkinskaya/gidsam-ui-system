````md
# GIDSAM UI SYSTEM — LAYOUTS (Design System v1.1)

Этот файл фиксирует КОМПОЗИЦИЮ СТРАНИЦ и ПОРЯДОК БЛОКОВ проекта «ГИДСАМ».
Любая страница собирается ТОЛЬКО по этим схемам.
Никаких перестановок, пропусков и «улучшений от себя».

TOKENS.md — чем красим  
COMPONENTS.md — как собираем компоненты  
LAYOUTS.md — как собираем страницы

---

## ОБЩИЕ ПРАВИЛА ДЛЯ ВСЕХ СТРАНИЦ

— Каждая страница обёрнута в `.gds-scope`
— Каждый контентный блок имеет свой `<section>`
— Списки ТОЛЬКО через `.gidsam-grid`
— Минимум 2 колонки всегда
— Порядок блоков имеет значение
— Если блока нет в списке — его нельзя добавлять

---

## 1) ГЛАВНАЯ СТРАНИЦА (HOME)

Порядок блоков строго такой:

```html
<div class="gds-scope">

  <section class="gds-hero">
    <!-- Баннер / Hero / App Splash -->
  </section>

  <section class="gds-section">
    <div class="gds-section-head">
      <h2 class="gds-title">Рекомендуем</h2>
    </div>
    <div class="gidsam-grid">
      <!-- featured cards -->
    </div>
  </section>

  <section class="gds-section">
    <div class="gds-section-head">
      <h2 class="gds-title">Афиши</h2>
    </div>
    <div class="gidsam-grid">
      <!-- events -->
    </div>
  </section>

  <section class="gds-section">
    <div class="gds-section-head">
      <h2 class="gds-title">Акции</h2>
    </div>
    <div class="gidsam-grid">
      <!-- promos -->
    </div>
  </section>

  <section class="gds-section">
    <div class="gds-section-head">
      <h2 class="gds-title">Компании</h2>
    </div>
    <div class="gidsam-grid">
      <!-- companies -->
    </div>
  </section>

</div>
````

Главная — витрина.
Никаких фильтров.
Только подборки и входы в каталоги.

---

## 2) КАТАЛОГ (СПИСОК СУЩНОСТЕЙ)

Используется для:
компаний, акций, афиш, вакансий, новостей, товаров.

```html
<div class="gds-scope">

  <section class="gds-section-head">
    <h1 class="gds-title">Заголовок каталога</h1>
  </section>

  <section class="gds-filters">
    <!-- pills / selects / search -->
  </section>

  <section class="gds-section">
    <div class="gidsam-grid">
      <!-- cards -->
    </div>
  </section>

  <section class="gds-section">
    <!-- load more / pagination -->
  </section>

</div>
```

Фильтры ВСЕГДА над grid.
Grid ВСЕГДА один.

---

## 3) ЛОКАЛЬНАЯ СТРАНИЦА (КАРТОЧКА ОБЪЕКТА)

Используется для:
компании, события, акции, вакансии, товара.

```html
<div class="gds-scope">

  <section class="gds-listing-hero">
    <!-- большое изображение / галерея -->
  </section>

  <section class="gds-section">
    <h1 class="gds-title">Название объекта</h1>
    <div class="gds-meta">Мета-информация</div>
  </section>

  <section class="gds-section">
    <!-- описание -->
  </section>

  <section class="gds-section">
    <!-- CTA кнопки -->
  </section>

  <section class="gds-section">
    <div class="gds-section-head">
      <h2 class="gds-title">Связанные объекты</h2>
    </div>
    <div class="gidsam-grid">
      <!-- related cards -->
    </div>
  </section>

</div>
```

Один объект — одна страница.
Никаких сайдбаров.

---

## 4) СТРАНИЦА КОМПАНИИ (SEO-HUB)

Страница компании — агрегатор всего связанного контента.

```html
<div class="gds-scope">

  <section class="gds-listing-hero">
    <!-- логотип / фото -->
  </section>

  <section class="gds-section">
    <h1 class="gds-title">Название компании</h1>
    <div class="gds-meta">Адрес / рейтинг / контакты</div>
  </section>

  <section class="gds-section">
    <!-- описание компании -->
  </section>

  <section class="gds-section">
    <h2 class="gds-title">Акции</h2>
    <div class="gidsam-grid"></div>
  </section>

  <section class="gds-section">
    <h2 class="gds-title">События</h2>
    <div class="gidsam-grid"></div>
  </section>

  <section class="gds-section">
    <h2 class="gds-title">Вакансии</h2>
    <div class="gidsam-grid"></div>
  </section>

</div>
```

Порядок блоков сохраняется.
Если данных нет — блок скрывается.

---

## 5) ПОДБОРКИ (COLLECTIONS)

```html
<div class="gds-scope">

  <section class="gds-section-head">
    <h1 class="gds-title">Название подборки</h1>
    <div class="gds-meta">Описание</div>
  </section>

  <section class="gds-section">
    <div class="gidsam-grid">
      <!-- mixed cards -->
    </div>
  </section>

</div>
```

Внутри могут быть разные типы карточек.
Сетка остаётся единой.

---

## 6) EMPTY / ERROR / LOADING (ГЛОБАЛЬНО)

Используются ВМЕСТО grid, а не вместе с ним.

```html
<div class="gds-empty"></div>
<div class="gds-loading"></div>
<div class="gds-error"></div>
```

---

## ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА

— Страница = один layout
— Никаких произвольных блоков
— Grid всегда `.gidsam-grid`
— Section header всегда `.gds-section-head`
— Нет данных — нет блока

Если страница не описана здесь — она не существует.

КОНЕЦ LAYOUTS.md

```
```
