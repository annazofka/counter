const increaseButtonEl = document.querySelector('#increase')
const decreaseButtonEl = document.querySelector('#decrease')
const resetButtonEl = document.querySelector('#reset-button')
const counterValueEl = document.querySelector('#counter-value')

resetButtonEl.addEventListener('click', event => {
	counterValueEl.textContent = 0
})

const incrementCounter = () => {
	// get current value
	const currentValue = counterValueEl.textContent

	//  convert to number
	const currentValueAsNumber = +currentValue

	// increment by 1
	const newValue = currentValueAsNumber + 1

	// set counter element with new value
	counterValueEl.textContent = newValue
}

increaseButtonEl.addEventListener('click', incrementCounter)

decreaseButtonEl.addEventListener('click', () => {
	// get current Value
	const currentValue = counterValueEl.textContent

	// convert to number
	const currentValueAsNumber = +currentValue

	// decrement by 1
	let newValue = currentValueAsNumber - 1

	// check if new value is less than zero
	if (newValue < 0) {
		// force it to zero
		newValue = 0
	}

	// return new value
	counterValueEl.textContent = newValue
})
