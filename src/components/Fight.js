import React from 'react'

const Fight = (props) => {
	return (
		<div className="fight">
			<img src={props.name} />
			<img src={props.value} />
		</div>
	)
}
export default Fight