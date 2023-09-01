const checkbox = document.getElementById('example-checkbox')

// You can change the state
checkbox.checked = true

// ...and detect changes
checkbox.onchange = e => {
	// ...and get the state
	console.log(e.target.checked)
}

// Note: just like with a normal checkbox, changes made through JS don't emit an event
