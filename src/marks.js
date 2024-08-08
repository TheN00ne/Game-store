import { useEffect, useState } from "react";
import games from "./styles/games/games.module.css";
import MiniGame from "./miniGame.js";
import gamePage from "./styles/gamePage/gamePage.module.css"

export function Marks(props){

    let [searchInput, setSerchInput] = useState("");
    let [searchArr, setSearchArr] = useState(props.myAccount.markGames);

    function search(){
        let newGamesArr = props.myAccount.markGames.filter((el) => {
            if((el.title.trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.describe.trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.ganres.join(" ").trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.price.toString().trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase()))
            ){
                return el;
            }
        })

        let newAuthorsArr = props.myAccount.markGames.filter((el) => {
            let isOk = false;
            el.authors.map((auth) => {
                if(auth.name.trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())){
                    isOk = true;
                }
            })
            if(isOk){
                return el;
            }
        })

        let newArr = [...newGamesArr, ...newAuthorsArr];

        newArr = newArr.filter((el, id) => {
            for(let i = id + 1; i < newArr.length; i++){
                if(el.title == newArr[i].title){
                    return undefined;
                }
            }
            return el;
        })
        
        setSearchArr(newArr);
    }

    useEffect(() => {
        search();
    }, [props.myAccount.markGames])

    return(
        <div>
            <div className={games.searchBlock}>
                <div className={games.searchPost}>
                    <input className={games.search} value={searchInput} type="search" onInput={(e) => {setSerchInput(e.currentTarget.value)}} onKeyDown={(e) => {if(e.code == 'Enter'){search()}}}></input>
                    <div className={games.post} onClick={() => search()}>→</div>
                </div>
            </div>
            {searchArr.length == 0 ? 
                <h2 style={{textAlign: "center", fontWeight: "bold"}}>Games don't found!</h2> : 
                <div className={games.gameBlock}>
                    {searchArr.map((el) => (
                        <MiniGame key={el.id} title={el.title} images={el.images} price={el.price} gamesList={props.gamesList} rateCount={el.rateCount} myAccount={props.myAccount} setMyAccount={props.setMyAccount} usersList={props.usersList} setUsersList={props.setUsersList} />
                    ))}
                </div>
            }
        </div>
    )
}