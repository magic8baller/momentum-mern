import React, {Component} from 'react'
import {quotesData} from '../quotesData'
import QuoteItem from '../components/QuoteItem'
class QuotesContainer extends Component {

	state = {
		quotes: quotesData
	}

	renderQuote = () => {
		let randomNumber = Math.floor(Math.random() * (this.state.quotes.length))
		return <QuoteItem quote={this.state.quotes[randomNumber]}/>
		}

	render() {
		return (
			<div>
				{this.renderQuote()}
			</div>
		)
	}
}

export default QuotesContainer