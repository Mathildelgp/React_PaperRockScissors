import React, { Component } from 'react'
import Button from '../components/Button'

class Body extends Component{
	render(){
		 const imgRender = this.props.img.map(illu => <Button  name={illu.img} img={illu.img} alt={illu.alt} addScore={this.props.addScore} btn={this.props.btn}/>)
		return(
			<div className="content">
				{imgRender}
			</div>
		)
	}
}

export default Body