import React from 'react'

const QuoteItem = ({quote: {quote, author}}) => (
		<div className='quote-container'>
			<div>{quote}</div>
			<div className='author-container'> {author}
			</div>
		</div>
)

export default QuoteItem