import React from 'react'

const QuoteItem = ({quote: {quote, author}}) => (
	<blockquote>
		<h5>{quote}</h5>
		<h6>- {author}</h6>
	</blockquote>
)

export default QuoteItem