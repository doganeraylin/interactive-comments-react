import './App.css'
import data from "./data"
import Comment from './components/Comment'
import AddComment from './components/AddComment'
import Reply from './components/Reply'
import TimeAgo from 'javascript-time-ago'
import en from "javascript-time-ago/locale/en"
import ru from "javascript-time-ago/locale/ru"
TimeAgo.locale(en)
TimeAgo.locale(ru)
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

function App() {
  return(
    <>
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
    </>
  )
}

export default App
