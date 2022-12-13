import { useState } from 'react'
import './App.css'
import data from "./data"
import Comment from './components/Comment'
import AddComment from './components/AddComment'
import Reply from './components/Reply'
import DeleteModal from './components/DeleteModal'

function App() {
  return(
    <div>
        {data.comments.map((comment) => {
            return (
                <>
                    <Comment
                        key={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        username={comment.user.username}
                        img={comment.user.image.png}
                        counter={comment.score}
                    />

                    {comment.replies.map((reply) => 
                        <Reply
                            key={reply.id}
                            content={reply.content}
                            createdAt={reply.createdAt}
                            username={reply.user.username}
                            img={reply.user.image.png}
                            counter={reply.score}
                            replyingTo={reply.replyingTo}
                        />  
                    )}                    
                </>   
            )
        })}
        <AddComment/>
    </div>
  )
}

export default App
