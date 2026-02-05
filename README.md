# ГИДСАМ — SVG Icons Pack v1

Минималистичные outline-иконки для web, mobile web и будущего mobile app.

## Стиль
- Формат SVG
- ViewBox: 0 0 24 24
- `stroke="currentColor"`
- `stroke-width="1.75"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`
- Без заливок (outline)

## Правила использования
- Держи размер 16-24px, масштабируй через CSS.
- Цвет задавай через `color` на родителе.
- Для hover/active меняй только `color`.

## Пример подключения (img)
<img src="/icons/v1/actions/phone.svg" width="24" height="24" alt="Phone">

## Пример подключения (inline SVG)
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.45 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/>
</svg>

## Рекомендации по цвету (CSS)
.icon{
	width:24px;
	height:24px;
	color:#1e7cf2;
}
.icon-muted{color:#6f7b8a;}
.icon-danger{color:#ef4444;}
