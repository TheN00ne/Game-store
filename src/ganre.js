import { useState } from "react"
import games from "./styles/games/games.module.css"

export default function Ganre(props){

    let [isChose, setIsChose] = useState(false);

    function chose(){
        let newGanresArr = props.ganresList.map((el) => {
            if(el.ganre == props.ganre){
                return {...el, isChose: !el.isChose}
            }
            return el; 
        })

        props.setGanresList(newGanresArr);
    }

    return( <div onClick={() => {setIsChose(!isChose); chose()}} className={isChose ? games.chosenGanre : games.ganre}> {props.ganre} </div> )
}