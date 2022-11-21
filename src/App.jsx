import './App.css'
import data from "./data"
import Card from './components/Card'

function App() {

    console.log(data)
   
    return(
        data.comments.map(({id, content, createdAt, score, user, replies}) => 
        <>
            <Card
                key={id}
                content={content}
                createdAt={createdAt}
                score={score}
                username={user.username}
                img={user.image.png}
            />
        </>    
        )    
    )
}

export default App
