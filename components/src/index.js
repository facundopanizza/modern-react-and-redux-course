import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          date={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          date={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          date={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          date={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.firstName()}
        comment={faker.lorem.sentence()}
        date={faker.date.recent().toDateString()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
