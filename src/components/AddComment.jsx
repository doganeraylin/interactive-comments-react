import { useState, useContext, createContext } from "react"
import data from "../data.json"
import DeleteModal from "./DeleteModal"
import UserReply from "./UserReply"

const AddComment = ()  => {

    const [value, setTextareaValue] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [comments, setComments] = useState(data.comments.slice())
    const [submittedComments, setSubmittedComments] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleSubmit(event) {
      event.preventDefault()
  
      const newComment = {
        content: value,
        img: "../../public/images/avatars/image-juliusomo.png",
        username: "juliusomo",
        counter: 0
      }

      setComments([...comments, newComment])
      setSubmittedComments([])
      setSubmittedComments([...submittedComments, newComment])
      setFormSubmitted(true)
      setTextareaValue("")
      setIsModalOpen(false) 
     
    }

    function deleteComments (id) {
        const updatedComments = submittedComments.filter((comment) => comment.id !== id)
        setSubmittedComments(updatedComments)
    }

    function handleModalToggle () {
      setIsModalOpen(!isModalOpen)
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
              handleToggle={handleModalToggle}
             />
          ))}
        </div>

        {isModalOpen && submittedComments.map((comment, index) => (
            <DeleteModal 
              key={index}
              cancelDelete = {handleModalToggle}
              deleteComment={() => deleteComments(comment.id)}
            />
        ))}
            
        <div className="card-container">
          <img src="/images/avatars/image-juliusomo.png" className="comment-user-icon"></img>
          <form id="add-comment-form" onSubmit={handleSubmit}>
            <textarea
              className="textarea"
              cols="50"
              rows="4"
              placeholder="Add a comment..."
              onChange={(event) => setTextareaValue(event.target.value)}
              value={value}
            >
            </textarea>
            <button type="submit" disabled={!value} className={!value ? "disabled-btn" : "send-btn"}>SEND</button>
          </form>
        </div>
      </>
    )
  }
  
  export default AddComment
  



