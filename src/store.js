import { useEffect, useMemo, useState } from "react";
import games from "./styles/games/games.module.css"
import MiniGame from "./miniGame.js";
import Ganre from "./ganre.js";

export function Store(props){

    let [searchInput, setSerchInput] = useState("");
    let [searchArr, setSearchArr] = useState(props.gamesList);

    function search(){
        let chosenArr = props.ganresList.filter((el) => (el.isChose == true));
        let newGanresArr = props.gamesList.filter((el) => {
            let isOk = false;

                for (let ganre of chosenArr){
                    if(el.ganres.join(" ").includes(ganre.ganre)){
                        isOk = true;
                    }
                }
                
                if(isOk){
                    return el;
                }
        })

        if(newGanresArr.length == 0){
            newGanresArr = props.gamesList;
        }

        let newGamesArr = newGanresArr.filter((el) => {
            if((el.title.trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.describe.trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.ganres.join(" ").trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase())) ||
                (el.price.toString().trim().toLowerCase().includes(searchInput.trim().toLocaleLowerCase()))
            ){
                return el;
            }
        })

        let newAuthorsArr = newGamesArr.filter((el) => {
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


    return(
        <div>
            <div className={games.searchBlock}>
                <div className={games.searchPost}>
                    <input className={games.search} value={searchInput} type="search" onInput={(e) => {setSerchInput(e.currentTarget.value)}} onKeyDown={(e) => {if(e.code == 'Enter'){search()}}}></input>
                    <div className={games.post} onClick={() => {search()}}>→</div>
                </div>
                <details>
                    <summary>Ganres</summary>
                    <div className={games.ganres}>
                        {props.ganresList.map((ganre) => (
                           <Ganre ganresList={props.ganresList} setGanresList={props.setGanresList} key={ganre.ganre} ganre={ganre.ganre}/>
                        ))}
                    </div>
                </details>
            </div>
            {searchArr.length == 0 ? 
                <h2 style={{textAlign: "center", fontWeight: "bold"}}>Games don't found!</h2> : 
                <div className={games.gameBlock}>
                    {searchArr.map((el) => (
                        <MiniGame key={el.id} title={el.title} images={el.images} price={el.price} rateCount={el.rateCount} gamesList={props.gamesList} myAccount={props.myAccount} setMyAccount={props.setMyAccount} usersList={props.usersList} setUsersList={props.setUsersList} />
                    ))}
                </div>
            }
        </div>
    )
}