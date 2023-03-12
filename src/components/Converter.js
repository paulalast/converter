import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import { fetchExchangeRates } from "./ExchangeRate"
import "./converter.css"

class Converter extends Component {
	state = {
		baseCurrency: "USD",
		fromCurrency: "USD",
		toCurrency: "EUR",
		fromValue: 0,
		toValue: 0,
		exchangeRates: {},
	}

	async componentDidMount() {
		const exchangeRates = await fetchExchangeRates(this.state.baseCurrency)
		this.setState({ exchangeRates })
	}

	handleFromCurrencyChange = event => {
		const fromCurrency = event.target.value
		this.setState({ fromCurrency }, this.convertCurrency)
	}

	handleToCurrencyChange = event => {
		const toCurrency = event.target.value
		this.setState({ toCurrency }, this.convertCurrency)
	}

	handleFromValueChange = value => {
		this.setState({ fromValue: value }, this.convertCurrency)
	}

	convertCurrency = () => {
		const { fromCurrency, toCurrency, fromValue, exchangeRates } = this.state

		const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency]
		const toValue = (fromValue * exchangeRate).toFixed(2)

		this.setState({ toValue })
	}

	render() {
		const { fromCurrency, toCurrency, fromValue, toValue } = this.state

		return (
			<div className='converter'>
				<CurrencyInput
					label='Przelicz z:'
					currency={fromCurrency}
					value={fromValue}
					onCurrencyChange={this.handleFromCurrencyChange}
					onValueChange={this.handleFromValueChange}
				/>
				<CurrencyInput
					label='Przelicz na:'
					currency={toCurrency}
					value={toValue}
					onCurrencyChange={this.handleToCurrencyChange}
					onValueChange={() => {}}
					disabled
				/>
			</div>
		)
	}
}

export default Converter
