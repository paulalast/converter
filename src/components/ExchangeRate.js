const API_URL = "https://api.exchangerate-api.com/v4"

async function fetchExchangeRates(baseCurrency) {
	try {
		const response = await fetch(`${API_URL}/latest/${baseCurrency}`)
		const exchangeRateData = await response.json()
		const exchangeRates = exchangeRateData.rates
		return exchangeRates
	} catch (error) {
		console.error(error)
	}
}

export { fetchExchangeRates }
