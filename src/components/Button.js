import React from 'react'

const Button = (props) => {
	return (
		<div className="clic">
			<img onClick={props.btn} alt={props.alt} src={props.img} name={props.img}/>
		</div>
		)
}

export default Button