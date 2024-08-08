import gamePage from "./styles/gamePage/gamePage.module.css"; 
import { useNavigate } from "react-router-dom";

export default function MiniAuthor(props){

    let nav = useNavigate();

    return(
        <div className={gamePage.author} onClick={() => {nav(`/authors/${props.name}/${props.id}`)}}> 
            <h2>{props.name}</h2>
            <p>{props.stage}</p>
            <div className={gamePage.imgDiv}>
                <img src={props.img}></img>
            </div>
        </div>
    )
}