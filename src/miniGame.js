import { useNavigate } from "react-router-dom"
import games from "./styles/games/games.module.css"
import { useEffect, useState } from "react";

export default function MiniGame(props) {

    let thisGame = props.gamesList.find((el) => (el.title == props.title));

    let [isMark, setIsMark] = useState(false);

    useEffect(() => {
        for (let el of props.myAccount.markGames){
            if(el.title == thisGame.title){
                setIsMark(true);
            }
        }
    }, [props.myAccount.markGames])

    function addGame(){
        let newAccount = {...props.myAccount, markGames: [...props.myAccount.markGames, thisGame]}
        props.setMyAccount(newAccount);
        let newUsers = props.usersList.map((el) => {
            if(el.email == props.myAccount.email){
                return newAccount;
            }
            else{
                return el;
            }
        })
        props.setUsersList(newUsers);
    }

    function removeMark(){
        let newGames = props.myAccount.markGames.filter((el) => (el.title !== thisGame.title));
        props.setMyAccount({...props.myAccount, markGames: newGames});
        let newUsers = props.usersList.map((el) => {
            if(el.email == props.myAccount.email){
                return {...props.myAccount, markGames: newGames};
            }
            else{
                return el;
            }
        })
        props.setUsersList(newUsers);

        setIsMark(false);
    }

    let nav = useNavigate();

    function avargeRate(){
        let game = props.gamesList.find((el) => (el.title == props.title));
        let rates = game.ratedUsers.map((el) => {return el.rate});
        let sum = 0;
        for(let rate of rates){
            sum = sum + rate;
        }
        return (Math.round((sum / props.rateCount) * 10) / 10);
    }

    return(
        <div className={games.game} onClick={() => {nav(`/games/${props.title}`)}}>
            <div className={games.mark} onClick={(e) => {{!isMark ? addGame() : removeMark()}; e.stopPropagation()}}>{!isMark ? "M" : "D"}</div>
            <div className={games.imgBlock}>
                <img src={props.images[0]} />
            </div>
            <h2>{props.title}</h2>
            <div className={games.infoBlock}>
                <div className={games.rate}>Rate: {props.rateCount == 0 ? "0" : avargeRate()}</div>
                <div className={games.price}>Price: ${props.price}</div>
            </div>
        </div>
    )
}