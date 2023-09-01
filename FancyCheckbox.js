class FancyCheckbox extends HTMLButtonElement {
	#checked = false
	#constructed = false
	#checkMarkSVG

	constructor() {
		super()

		this.role = 'checkbox'
		this.classList.add('fancy-checkbox')

		/* -------------------------------- Checkmark ------------------------------- */
		const SVGNamespace = 'http://www.w3.org/2000/svg'

		this.#checkMarkSVG = document.createElementNS(SVGNamespace, 'svg')
		this.#checkMarkSVG.setAttribute('viewBox', '0 0 100 100')
		const checkMarkPath = document.createElementNS(SVGNamespace, 'path')
		checkMarkPath.setAttribute('d', 'M 10 50 L 42 80 L 90 18')
		checkMarkPath.setAttribute('stroke', 'white')
		checkMarkPath.setAttribute('stroke-width', '14px')
		checkMarkPath.setAttribute('fill', 'none')
		this.#checkMarkSVG.append(checkMarkPath)

		this.append(this.#checkMarkSVG)

		/* --------------------------------- Styling -------------------------------- */
		this.#checkMarkSVG.style.width = '78%'
		this.#checkMarkSVG.style.height = '78%'

		Object.assign(this.style, {
			border: 'none',
			padding: '0',
			width: '1.4rem',
			height: '1.4rem',
			display: 'inline grid',
			placeItems: 'center'
		})


		/* ---------------------------------- State --------------------------------- */
		const updateStuff = () => {
			this.ariaChecked = this.#checked
			if (this.#checked) {
				this.#checkMarkSVG.style.opacity = '1'
				this.classList.add('active')
			} else {
				this.#checkMarkSVG.style.opacity = '0'
				this.classList.remove('active')
			}
		}

		updateStuff()

		this.addEventListener('click', () => {
			this.#checked = !this.#checked
			updateStuff()

			const event = new InputEvent('change')

			this.dispatchEvent(event)


		})

		this.#constructed = true
	}

	set checked(value) {
		this.#checked = value

		if (!this.#constructed) {
			return
		}
		
		this.ariaChecked = this.#checked
		if (this.#checked) {
			this.#checkMarkSVG.style.opacity = '1'
			this.classList.add('active')
		} else {
			this.#checkMarkSVG.style.opacity = '0'
			this.classList.remove('active')
		}
	}

	get checked() {
		return this.#checked
	}
}

customElements.define('fancy-checkbox', FancyCheckbox, { extends: 'button' })
