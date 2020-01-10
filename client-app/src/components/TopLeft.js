import React from 'react';
// import 'Stylesheets/top-left.css';
const settings = require('../img/settings.svg');
const chrome= require('../img/chrome.svg');
// import '../img/search.svg';
// import '../img/nine-squares.svg';


export default class TopLeft extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			inputValue: '',
			showSearch: true,
			showChromeTab: true,
			showApps:'',
			isHidden: false
		};
	}

	showSearchInput () {
		this.setState({
			isHidden: !this.state.isHidden,
		});
	}

	googleSearch (e) {
		if (e.key === 'Enter') {
			const searchString = this.state.inputValue.split(' ').join('+');
			window.open(`http://www.google.com/search?q=${searchString}`);
			this.setState({
				inputValue: '',
			});
		}
	}

	updateInputValue (evt) {
		this.setState({
			inputValue: evt.target.value,
		});
	}

	// componentWillReceiveProps (nextProps) {
	// 	this.setState({
	// 		showChromeTab:'',
	// 		showApps: '',
	// 		showSearch: '',
	// 	});
	// }


	render () {
		return (
			<div>

					<a href="https://www.google.com" target="blank" rel="noopener noreferrer" id="chrome-tab-link" title="Chrome Tab"><i className="fa fa-chrome"></i></a>
&nbsp; &nbsp; &nbsp;
				{/* {this.state.showSearch && */}
					<a href="#" id="chrome-search-link" onClick={this.showSearchInput.bind(this)} title="Search"><i className="fa fa-search
					" style={{fontSize:'1em'}}></i></a>
					&nbsp;
				{/* } */}&nbsp;
				{this.state.isHidden &&
					<input type="text" id="chrome-search-input" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} autoFocus name="search" onKeyPress={this.googleSearch.bind(this)} onBlur={this.showSearchInput.bind(this)} />
				}
			</div>
		);
	}
}