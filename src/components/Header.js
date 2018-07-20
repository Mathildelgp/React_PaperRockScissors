import React from 'react'
import Score from './Score'

const Header = (props) => {
	return (
		<header>
			<div className="title">
				<h2>Rock Paper scissors</h2>
			</div>
			<Score score={props.score} scoreComputer={props.scoreComputer}/>
		</header>
	)
}
export default Header