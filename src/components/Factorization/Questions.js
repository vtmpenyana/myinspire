import React from 'react';
import QuestionBank from './QuestionBank';
import QuestionCard from './QuestionCard';


class Questions extends React.Component {
	render(){
		return(
			<QuestionCard 
			q={QuestionBank[0].q} 
			c1={QuestionBank[0].c1} 
			c2={QuestionBank[0].c2} 
			c3={QuestionBank[0].c3}
			cor={QuestionBank[0].cor} 
			c4={QuestionBank[0].c4}/>
		)
	}
}


export default Questions;