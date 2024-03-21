import { useState } from 'react'
import './App.css'

const GetFeedback = () => {
  const [feedback, setFeedback] = useState('')
  const [getFeedback, setGetFeedback] = useState('')

  const clickHandler = () => {
    setGetFeedback(feedback)
  }
  
  return (
    <div>
      <label>Give Your Feedback:</label>
      <textarea rows='5' onChange={(e) => setFeedback(e.target.value)}/>
      <button onClick={clickHandler}>Submit</button>
      {
        getFeedback && <p>Your Feedback: {getFeedback}</p>
      }
    </div>
  )
}

const MovieReview = () => {
  const [movieReview, setMovieReview] = useState('');
  const [getRiview, setGetRiview] = useState('');

  const clickHandler = () => {
    setGetRiview(movieReview);
  }
  
  return (
    <div>
      <label>Write your Movie Review: </label>
      <textarea rows='5' onChange={(e) => setMovieReview(e.target.value)}/>
      <button onClick={clickHandler}>Submit Review</button>
      {
        getRiview && <p>Your Review: {getRiview}</p>
      }
    </div>
  )
}

const Message = () => {
  const [message, setMessage] = useState('');

  const clickHandler = () => {
    let modifyMessage = message.toUpperCase() + '!'
    alert(modifyMessage);
  }
  return(
    <div>
      <label>Enter Your Message: </label>
      <textarea rows='5' onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={clickHandler}>Display Message</button>
      
    </div>
  )
}

const TakeYourNotes = () => {
  const [notes, setNotes] = useState('');
  const [getNotes, setGetNotes] = useState('');

  const clickHandler = () => {
    setGetNotes(notes)
  }
  return (
    <div>
      <label>Take Your Noted: </label>
      <textarea rows='5' onChange={(e) => setNotes(e.target.value)}/>
      <button onClick={clickHandler}>Save Notes</button>
      {
        getNotes && <p>Your Notes: {getNotes}</p>
      }
    </div>
  )
}

const AskYourQuestion = () => {
  const [askQuestion, setAskQuestion] = useState('')
  const [getQuestion, setGetQuestion] = useState('');

  const clickHandler = () => {
    askQuestion.includes('?') ? setGetQuestion(askQuestion) : setGetQuestion(askQuestion + '?')
  }
  return (
    <div>
      <label>Ask Your Question: </label>
      <textarea rows='5' onChange={(e) => setAskQuestion(e.target.value)}/>
      <button onClick={clickHandler}>Submit Question</button>
      {
        getQuestion && <p>Your Question: {getQuestion}</p>
      }
    </div>
  )
}

const CommentHere = () => {
  const [comment, setComment] = useState('');
  const [modifyComment, setModifyComment] = useState('');

  const clickHandler = () => {
    let modifyedComment = "// " + comment;
    setModifyComment(modifyedComment)
  }

  return (
    <div>
      <label>Leave Your Comment: </label>
      <textarea rows='5' onChange={(e) => setComment(e.target.value)}/>
      <button onClick={clickHandler}>Submit Comment</button>
      {
        modifyComment && <p>{modifyComment}</p>
      }
    </div>
  )
}

export default function App() {
  return (
    <main>
      <GetFeedback/>
      <br/>
      <MovieReview/>
      <br/>
      <Message/>
      <br/>
      <TakeYourNotes/>
      <br/>
      <AskYourQuestion/>
      <br/>
      <CommentHere/>
    </main>
  )
}
