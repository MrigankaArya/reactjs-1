import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard';

const App = () => {
	return(
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4> Warning! </h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 14:40" 
					comment="A" 
					imgsrc={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex"
					timeAgo="Today at 3:40" 
					comment="B" 
					imgsrc={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Max" 
					timeAgo="Today at 12:40" 
					comment="C" 
					imgsrc={faker.image.avatar()}/>
			</ApprovalCard>
		</div>	

		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));