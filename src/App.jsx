import React, { Fragment, useState } from 'react';
import '../styles/Global.css';
import '../styles/index.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App () {

  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Fragment>
      <Header />

      <div className="container">
        <FeedbackList 
          feedback={feedback} 
          handleDelete={deleteFeedback} 
        />
      </div>
    </Fragment>
  )
}

export default App
