import gameAuthor from "./styles/gameAuthor/authorPage.module.css";
import { useParams } from "react-router-dom";
import MiniGame from "./miniGame";
import { useNavigate } from "react-router-dom";

export default function AuthorsPage(props){
    
    const {author, id} = useParams();

    const nav = useNavigate();

    const authorPerson = props.authorsList.find((el) => ((el.id == id) && (el.name == author)));

    let games = props.gamesList.map((el) => {
        let i = false;
        authorPerson.projectsNames.map((game) => {
            if(el.title == game){
                i = true;
            }
        })
        if(i){
            return el;
        }
    })

    games = games.filter((el) => (
        el != undefined
    ))

    return(
        <div className={gameAuthor.authorPage}>
            <div className={gameAuthor.authorBlock}>
                <div className={gameAuthor.personBlock}>
                    <img src={authorPerson.img}></img>
                    <h1>{authorPerson.name}</h1>
                    <p>{authorPerson.stage}</p>
                </div>
                <hr></hr>
                <div className={gameAuthor.infoBlock}>
                    <h3 className={gameAuthor.asideHeader}>Describe</h3>
                    <p>{authorPerson.describe}</p>
                    <div className={gameAuthor.projectsBlock}>{
                            games.map((el) => (
                                <div onClick={() => {nav(`/games/${el.title}`)}} key={el.id} className={gameAuthor.game}>
                                    <div className={gameAuthor.imgDiv}>
                                        <img src={el.images[0]}></img>
                                    </div>
                                    <h3>{el.title}</h3>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}