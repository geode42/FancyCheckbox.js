# FancyCheckbox.js

A checkbox custom element written in vanilla JS

Example HTML:
```html
	<button is="fancy-checkbox" id="example-checkbox"></button>

	<label for="example-checkbox">Fancy checkbox</label>
```

Example JS:
```js
checkbox.checked = true

checkbox.onchange = e => {
	console.log(e.target.checked)
}
```


Example CSS:
```css
button.fancy-checkbox {
	background: #DDD;
	cursor: pointer;
	border-radius: 0.4rem;
	transition: all 100ms;
}

button.fancy-checkbox > svg {
	transition: all 100ms;
}

button.fancy-checkbox.active {
	background: #006AFF;
}
```