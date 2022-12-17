import { useState } from "react"
import data from "../data.json"
import UserReply from "./UserReply"
import DeleteModal from "./DeleteModal"


const AddReply = ()  => {

    const [value, setTextareaValue] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [comments, setComments] = useState(data.comments.slice())
    const [submittedComments, setSubmittedComments] = useState([])
    const [isReplyOpen, setIsReplyOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)


    function handleSubmit(event) {
      event.preventDefault()
  
      const newComment = {
        content: value,
        img: "/images/avatars/image-juliusomo.png",
        // img: "../../public/images/avatars/image-juliusomo.png",
        username: "Juliusomo",
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

    function toggleReplyOpen () {
      setIsReplyOpen(false)
    }
    
    function handleModalToggle () {
      setIsModalOpen(!isModalOpen)
  }

  
    return (
      <>
        <div>
          {isReplyOpen && submittedComments.map((comment, index) => (
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
            
        <div className={isReplyOpen ? "card-container" : "card-container-closed"}>
          <img src="../../public/images/avatars/image-juliusomo.png" className="comment-user-icon"></img>
    
          <form className="add-comment-form" onSubmit={handleSubmit}>
            <textarea
              className="textarea"
              cols="50"
              rows="4"
              placeholder="Add a comment..."
              onChange={(event) => setTextareaValue(event.target.value)}
              value={value}
            >
            </textarea>
            <button type="submit"  disabled={!value} className={!value ? "disabled-btn" : "send-btn"}>REPLY</button>
          </form>
          <p className="cancel-reply-icon" onClick={toggleReplyOpen}>x</p>
        </div>
      </>
    )
  }
 
  export default AddReply
  



