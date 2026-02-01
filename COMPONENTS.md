````
# GIDSAM UI SYSTEM — COMPONENTS (Design System v1.1)

Этот файл — каноническое описание HTML-структуры всех базовых компонентов проекта «ГИДСАМ».
Любая верстка, любой блок, любая витрина ОБЯЗАНЫ использовать ТОЛЬКО эти структуры.
Изменения, вариации и «улучшения от себя» запрещены.

TOKENS.md определяет ЧЕМ мы красим.
COMPONENTS.md определяет КАК мы собираем.

---

## 1) Grid Wrapper (обязательный контейнер)

```html
<div class="gidsam-grid">
  <!-- cards -->
</div>
````

Используется для ВСЕХ списков:
компании, акции, афиши, вакансии, новости, подборки, таблицы, вилки.
Минимум 2 колонки всегда.

---

## 2) Card (базовая карточка)

```html
<article class="gds-card">
  <div class="gds-img gds-ar-16x9">
    <img src="" alt="">
  </div>

  <div class="gds-card-body">
    <h3 class="gds-card-title">Заголовок карточки</h3>
    <div class="gds-meta">Мета-информация</div>
  </div>
</article>
```

Карточка ВСЕГДА кликабельна целиком.
Высота карточек одного типа — одинаковая.

---

## 3) Card Body (контентная часть)

```html
<div class="gds-card-body">
  <h3 class="gds-card-title">Название</h3>
  <div class="gds-meta">Адрес / дата / категория</div>
</div>
```

Допустимо:
– 1 заголовок
– 1–2 строки мета-информации
Без переполнения и «резины».

---

## 4) Image Block (фиксированный контейнер)

```html
<div class="gds-img gds-ar-1x1">
  <img src="" alt="">
</div>
```

Допустимые aspect-ratio:
gds-ar-1x1
gds-ar-4x3
gds-ar-16x9
gds-ar-16x6
gds-ar-9x16

Другие запрещены.

---

## 5) Buttons

### Primary

```html
<button class="gds-btn gds-btn--primary">
  Основное действие
</button>
```

### Secondary

```html
<button class="gds-btn gds-btn--secondary">
  Вторичное действие
</button>
```

Кнопки всегда одного размера внутри одного блока.

---

## 6) Pills (фильтры / теги)

```html
<button class="gds-pill">Категория</button>
<button class="gds-pill gds-pill--active">Активно</button>
<button class="gds-pill gds-pill--ghost">Сброс</button>
```

Используются для фильтров и быстрых переключений.

---

## 7) Filters Container

```html
<div class="gds-filters">
  <button class="gds-pill gds-pill--active">Все</button>
  <button class="gds-pill">Сегодня</button>
  <button class="gds-pill">Неделя</button>
</div>
```

Фильтры всегда отдельным контейнером над grid.

---

## 8) Inputs / Selects

```html
<input class="gds-input" type="text" placeholder="Поиск">

<select class="gds-select">
  <option>Выбрать</option>
</select>
```

---

## 9) Empty State

```html
<div class="gds-empty">
  <div class="gds-empty-title">Ничего не найдено</div>
  <div class="gds-meta">Попробуйте изменить фильтры</div>
</div>
```

---

## 10) Loading State

```html
<div class="gds-loading">
  <div class="gds-meta">Загрузка…</div>
</div>
```

---

## 11) Error State

```html
<div class="gds-error">
  <div class="gds-error-title">Ошибка загрузки</div>
  <div class="gds-meta">Попробуйте позже</div>
</div>
```

---

## 12) Section Header

```html
<div class="gds-section-head">
  <h2 class="gds-title">Заголовок секции</h2>
</div>
```

---

## ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА

– Один тип карточек = одна структура
– Никаких inline-стилей
– Никаких кастомных классов вне системы
– Никаких изменений без обновления этого файла

Если структура не описана здесь — её не существует.

КОНЕЦ COMPONENTS.md

```
```
