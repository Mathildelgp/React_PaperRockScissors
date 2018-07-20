import React from 'react'

const Refresh = (props) => {
	return (
		<div className='refresh'>
			<img alt="refresh" onClick={props.refresh} src={props.icon}/>
		</div>
	)
}
export default Refresh