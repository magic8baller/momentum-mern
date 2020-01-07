import React from 'react'

const Section = ({title, content}) => (

				<article className="services__single-service">
					<h2 className="services__single-service-title">
						{title}
					</h2>
					<p className="services__single-service-text">
						{content}
					</p>
				</article>
	)


export default Section