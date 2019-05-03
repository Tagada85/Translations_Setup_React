import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import translations from './i18n/'
import LanguageContext from './LanguageContext'
import NewComponent from './NewComponent'
let frenchCodes = ['fr-FR', 'fr-fr', 'fr']
let language = navigator.language || navigator.userLanguage
if (!frenchCodes.includes(language)) {
	language = 'en-US'
}

function App() {
	const [lng, setLng] = useState(language)
	return (
		<LanguageContext.Provider value={lng}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{translations[lng]['appTitle']}</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						{translations[lng]['appLink']}
					</a>
					<NewComponent />
					<button onClick={() => setLng('fr-FR')}>
						{translations[lng]['french']}
					</button>
					<button onClick={() => setLng('en-US')}>
						{translations[lng]['english']}
					</button>
				</header>
			</div>
		</LanguageContext.Provider>
	)
}

export default App
