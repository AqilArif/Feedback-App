import React, { Fragment, useState } from 'react';
import '../styles/Global.css';
import '../styles/index.css';
import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

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
        <FeedbackForm />
        
        <FeedbackStats feedback={feedback} />

        <FeedbackList feedback={feedback}  handleDelete={deleteFeedback} />
      </div>
    </Fragment>
  )
}

export default App
