import React from 'react';
import './QuestionCard.css';

class QuestionCard extends React.Component {
	constructor(props){
		super(props);
		this.correct = this.props.cor;
		this.selectedAnswer = '';
	}

	onChooseAnswer = (selected) => {
		this.selectedAnswer = selected;
	}

	onSubmit = () => {
		if(this.selectedAnswer === this.correct){
			alert("Your answer is correct");
		}
		else{
			alert("Your answer is incorrect");
		}
	}


	render(){
		return(
			<div className='pa4'>
				<h3>{this.props.q}</h3>
				<p onClick={() => this.onChooseAnswer(this.props.c1)}>{this.props.c1}</p>
				<p onClick={() => this.onChooseAnswer(this.props.c2)}>{this.props.c2}</p>
				<p onClick={() => this.onChooseAnswer(this.props.c3)}>{this.props.c3}</p>
				<p onClick={() => this.onChooseAnswer(this.props.c4)}>{this.props.c4}</p>
				<button onClick={this.onSubmit} className='pa3 br2'>Submit answer</button>
			</div>
		)
	}
}


export default QuestionCard;