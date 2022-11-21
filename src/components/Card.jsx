const Card = (
    {content,
    createdAt,
    score,
    img,
    username,
    replyingTo}
) => <>
    <div className="card-container">
        <div className="voting">
            <p className="vote">+</p>
            <p className="score">{score}</p>
            <p className="vote">-</p>
        </div>
        <div className="card-content">
            <div className="card-top-container">
                <div className="card-top-info">  
                    <img src={img} className="icon"></img>
                    <p className="username">{username}</p>
                    <p className="createdAt">{createdAt}</p>
                </div>
                <div className="reply-container">
                    <img src="../../src/assets/icon-reply.svg" className="reply-icon"></img>
                    <p className="reply-text">Reply</p>
                </div>
            </div>
            <div className="card-text">
                <p className="content">{content}</p>
            </div>
        </div>
    </div> 
    </>

export default Card