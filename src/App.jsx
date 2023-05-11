import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/index.css';
import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

function App () {

  // ========= Browser Router ===========

  // Browser Router is also something called Hash Router
  
  // Browser Router uses HTML 5 History API to keep the User Interface in Sync with the URL
  
  // ========= HASH Router =============

  // On the other hand Hash Router uses the Hash portion of the URl to keep it in sync  

  // ========= Browser Router as Router + Route ===========

  // We just want to be able to do /about , So we are going to use Browser Router as Router
  
  // And then we also want to bring in root, which is specific component (Route) for rendering whatever you want to render 

  // whether it's component or just some output in a specific row 

  // =========== What is Routes? ================
  
  // Routes is actually replaced the <Switch /> element in React Router 5 

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
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route exact path='/' element={ 
            <>
              <FeedbackForm handleAdd={addFeedback} />
              
              <FeedbackStats feedback={feedback} />

              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </> 
          }>
          </Route>

          <Route path='/about' element={ <About /> } />
        </Routes>
        
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
