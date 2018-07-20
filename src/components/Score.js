import React from 'react'

const Score = (props) => {
	return (
		<div className="blocScore">
			<div className="score">
				<h4>You</h4>
				<p>{props.score}</p>
			</div>
			<div className="score">
				<h4>Mickey</h4>
				<p>{props.scoreComputer}</p>
			</div>
		</div>
	)
}

export default Score