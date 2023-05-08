import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const addFeedback = (newFeedback) => {
    
    newFeedback.id = uuidv4(); // this will generate the random ID for newFeedback item

    setFeedback([newFeedback, ...feedback]); // Get already added feedback Items and add a new one to the existing array 

    console.log(newFeedback);
  }

  return (
    <Fragment>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        
        <FeedbackStats feedback={feedback} />

        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </Fragment>
  )
}

export default App
