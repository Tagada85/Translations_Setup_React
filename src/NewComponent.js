import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'
import translations from './i18n'

const NewComponent = function() {
	const lng = useContext(LanguageContext)
	return (
		<div>
			<h1>{translations[lng]['newPageTitle']}</h1>
		</div>
	)
}

export default NewComponent
