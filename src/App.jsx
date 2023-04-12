import React, { Fragment } from 'react';
import '../styles/Global.css';

function App () {
  const title = 'My Blog Post';
  const body = 'This is my blog post';

  const comments = [
    {id: 1, text: 'Comment One'},
    {id: 2, text: 'Comment Two'},
    {id: 3, text: 'Comment Three'},
  ]

  const loading = false;

  const showComments = true

  if (loading) return <h1>Loading...</h1>

  const commentBlock = (
    <div className='Comments'>
      <h3>Comments ({comments.length})</h3>

      <ul>
        {comments.map((comment, index) => {
          return (
            <li key={index}> {comment.text} </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <Fragment>
      <h1>{title.toUpperCase()}</h1>
      
      <p>{body}</p>

      { showComments && commentBlock }

      
    </Fragment>
  )
}

export default App
