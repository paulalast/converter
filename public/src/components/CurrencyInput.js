import React from "react"

const CurrencyInput = ({
	label,
	currency,
	value,
	onCurrencyChange,
	onValueChange,
}) => {
	return (
		<div>
			<label>{label}</label>
			<input
				type='number'
				value={value}
				onChange={event => {
					const value = parseFloat(event.target.value)
					onValueChange(value)
				}}
			/>
			<select value={currency} onChange={onCurrencyChange}>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='PLN'>PLN</option>
			</select>
		</div>
	)
}

export default CurrencyInput
