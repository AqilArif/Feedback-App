import React, { Fragment, useState } from 'react';
import '../styles/Global.css';
import '../styles/index.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App () {

  const [feedback, setFeedback] = useState(feedbackData)

  return (
    <Fragment>
      <Header />

      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </Fragment>
  )
}

export default App
