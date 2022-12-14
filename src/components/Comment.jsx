import { useState } from "react"
import AddReply from "./AddReply"

const Comment = (
    {content,
    createdAt,
    img,
    username,
    incrementScore,
    counter
    }
) => {

    const [isReply, setIsReply] = useState(false)

    const [newScore, setNewScore] = useState(counter)

    function incrementScore() {
        return setNewScore((prevScore) => prevScore + 1)
    }

    function decrementScore() {
        return setNewScore((prevScore) => prevScore - 1)
    }

    function clickReply () {
       setIsReply(true)
    }


    return (
    <>
    <div className="card-container">
        <div className="vote-container">
            <p className="vote" onClick={incrementScore}>+</p>
            <p className="score">{newScore}</p>
            <p className="vote" onClick={decrementScore}>-</p>
        </div>
        <div className="card-content">
            <div className="card-top-container">
                <div className="card-top-info">  
                    <img src={img} className="icon"></img>
                    <p className="username">{username}</p>
                    <p className="createdAt">{createdAt}</p>
                </div>
                <div className="reply-btn-container">
                    <img src="../../public/images/icon-reply.svg" className="reply-icon"></img>
                    <p className="reply-text" onClick={clickReply}>Reply</p>
                </div>
            </div>
            <div className="card-text">
                <p className="content">{content}</p>
            </div>
        </div>
    </div>
    {isReply && <AddReply/>}
    </>
    )
}

export default Comment