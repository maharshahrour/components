import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App =() =>{
  return (
    <div className="ui container comments" >
    <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are you sue you want to do this?
        </div>
    </ApprovalCard>
    <ApprovalCard>
         <CommentDetail
          author="Mahar"
          timeAgo="Today at 5:00 pm"
          content="Nice a blog post"
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
           <CommentDetail
            author="Alex"
            timeAgo="Today at 6:00 pm"
            content="I like writing"
            avatar={faker.image.avatar()}
            />
      </ApprovalCard>
      <ApprovalCard>
           <CommentDetail
            author="Ghaidaa"
            timeAgo="Yesterday at 7:00 pm"
            content="I like swiming"
            avatar={faker.image.avatar()}
            />
      </ApprovalCard>
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
