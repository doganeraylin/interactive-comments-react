import { useState } from "react"
import data from "../data.json"
import UserReply from "./UserReply"

const AddReply = ()  => {
    // State variables
    const [value, setTextareaValue] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [comments, setComments] = useState(data.comments.slice())
    const [submittedComments, setSubmittedComments] = useState([])

    function handleSubmit(event) {
      event.preventDefault()
  
      const newComment = {
        content: value,
        img: "../../public/images/avatars/image-juliusomo.png",
        username: "Juliusomo",
        counter: 0
      }
  
      setComments([...comments, newComment])
      setSubmittedComments([])
      setSubmittedComments([...submittedComments, newComment])
      setFormSubmitted(true)
      setTextareaValue("")
    }

    function deleteComments (id) {
        const updatedComments = submittedComments.filter((comment) => comment.id !== id)
        setSubmittedComments(updatedComments)
    }

  
    return (
      <>
        <div>
          {submittedComments.map((comment, index) => (
            <UserReply
              key={index}
              content={comment.content}
              createdAt={comment.createdAt}
              img={comment.img}
              username={comment.username}
              counter={comment.counter}
              deleteComments={() => deleteComments(comment.id)}
             />
          ))}
        </div>
  
        <div className="card-container">
          <img src="../../public/images/avatars/image-juliusomo.png" className="comment-user-icon"></img>
          <form id="add-comment-form" onSubmit={handleSubmit}>
            <textarea
              id="textarea"
              className="add-comment-textarea"
              cols="50"
              rows="4"
              placeholder="Add a comment..."
              onChange={(event) => setTextareaValue(event.target.value)}
              value={value}
            >
            </textarea>
            <button type="submit" className="send-btn">REPLY</button>
          </form>
        </div>
      </>
    )
  }
  
  export default AddReply
  



