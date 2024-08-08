import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gamePage from "./styles/gamePage/gamePage.module.css";
import MiniAuthor from "./miniAuthor";
import Comment from "./comment";
import BuyBlock from "./buyBlock";
import { click } from '@testing-library/user-event/dist/click';

export default function GameStore(props){

    const buyBlock = document.getElementById("buyBlock");

    
    const {title} = useParams();
    
    const game = props.gamesList.find((el) => (el.title == title))

    let [isBuy, setIsBuy] = useState(false);
    
    useEffect(() => {
        for(let el of props.myAccount.libraryGames){
            if(el.title == game.title){
                setIsBuy(true);
            }
        }
    }, [props.myAccount.libraryGames])

    let [imgId, setimgId] = useState(0);
    let [authorId, setAuthorId] = useState(0);
    
    let [inputValue, setInputValue] = useState("");

    let [stars, setStars] = useState([{id: 1, col: "gray",}, {id: 2, col: "gray",}, {id: 3, col: "gray",}, {id: 4, col: "gray",}, {id: 5, col: "gray",}])

    let [rates, setRates] = useState([]);

    let [isOpen, setIsOpen] = useState(false);

    function starsCheck(){
        for (let el of game.ratedUsers){
            if(el.email == props.myAccount.email){
              setStars([
                {id: 1, col: game.ratedUsers.find((el) => (el.email == props.myAccount.email)).rate == undefined ? "gray" : "gold",},
                {id: 2, col: game.ratedUsers.find((el) => (el.email == props.myAccount.email)).rate < 2 ? "gray" : "gold",},
                {id: 3, col: game.ratedUsers.find((el) => (el.email == props.myAccount.email)).rate < 3 ? "gray" : "gold",},
                {id: 4, col: game.ratedUsers.find((el) => (el.email == props.myAccount.email)).rate < 4 ? "gray" : "gold",},
                {id: 5, col: game.ratedUsers.find((el) => (el.email == props.myAccount.email)).rate < 5 ? "gray" : "gold",}]);
                {break}
            }
            else{
                setStars([{id: 1, col: "gray"}, {id: 2, col: "gray"}, {id: 3, col: "gray"}, {id: 4, col: "gray"}, {id: 5, col: "gray"}])
            }
         }
    }

    useEffect(() => {
        let ratesArr = game.ratedUsers.map((el) => {
            return el.rate;
        })

        setRates(ratesArr);
    }, [game.ratedUsers]);

    useEffect(() => { starsCheck() }, []);

    function fill(id){
        let newArr = stars.map((el) => {
            if(el.id <= id){
                return {id: el.id, col: "gold"}
            }
            return {id: el.id, col: "gray"};
        })

        setStars(newArr);
    }

    function avargeRate(){
        let sum = 0;
        for(let rate of rates){
            sum = sum + rate;
        }
        return (Math.round((sum / game.rateCount) * 10) / 10);
    }

    function imgBack(){
        if(imgId == 0){
            setimgId(game.images.length - 1);
        }

        else{
            setimgId(imgId - 1);
        }
    }

    function imgForward(){
        if(imgId == game.images.length - 1){
            setimgId(0);
        }
        
        else{
            setimgId(imgId + 1);
        }
    }

    function isImgId(num){
        
        let id;

        if(imgId + num >= game.images.length){
            id = imgId + num - game.images.length;
        }

        else{
            id = imgId + num;
        }

        return id;
    }

    function authorBack(){
        if(authorId == 0){
            setAuthorId(game.authors.length - 1);
        }

        else{
            setAuthorId(authorId - 1);
        }
    }

    function authorForward(){
        if(authorId == game.authors.length - 1){
            setAuthorId(0);
        }
        
        else{
            setAuthorId(authorId + 1);
        }
    }

    function isAuthorId(num){
        
        let id;

        if(authorId + num >= game.authors.length){
            id = authorId + num - game.authors.length;
        }

        else{
            id = authorId + num;
        }

        return id;
    }

    function addComment(text){
            let newArr = props.gamesList.map((el) => {
                if(el == game){
                    return {...el, comments: [...el.comments, {elTitle: game.title, id: `${new Date().getTime()}`, name: props.myAccount.name, cont: text, ratedUsers: [], likes:0, hates:0,}]};
                }
                return el;
            });
            props.setGamesList(newArr);
            setInputValue("");
    }

    function rate(id){
        
        let users = game.ratedUsers.map((el) => {
            return el.email;
        })

        if(users.includes(props.myAccount.email)){
            let newArr = props.gamesList.map((el) => {
                if(el.id == game.id){

                    let newRatesUsers = el.ratedUsers.map((el) => {
                        if(el.email == props.myAccount.email){
                            return {email: el.email, rate: id}
                        }
                        return el;
                    });

                    return {...el, ratedUsers: newRatesUsers};
                }
                return el;
            })

            props.setGamesList(newArr);
        }
        else{
            let newArr = props.gamesList.map((el) => {
                if(el.id == game.id){
                    return {...el, rateCount: el.rateCount + 1, ratedUsers: [...el.ratedUsers, {email: props.myAccount.email, rate: id}]};
                }
                return el;
            })
    
            props.setGamesList(newArr);
        }
    }

    return (
        <div className={gamePage.gamePage}>
            <div className={gamePage.gameBlock}>
                <div className={gamePage.gameInfo}>
                    <div className={gamePage.imgBlock} style={{backgroundImage: `URL(${game.images[imgId]})`}}>
                        <div className={`${gamePage.moveArrow} ${gamePage.moveBack}`} onClick={() => imgBack()}>←</div>
                        <div className={`${gamePage.moveArrow} ${gamePage.moveForward}`} onClick={() => imgForward()}>→</div>
                    </div>
                    <div className={gamePage.imgsBar}>
                        <div className={gamePage.miniImg} style={{backgroundImage: `URL(${game.images[isImgId(1)]})`}} onClick={() => {setimgId(isImgId(1))}}></div>
                        <div className={gamePage.miniImg} style={{backgroundImage: `URL(${game.images[isImgId(2)]})`}} onClick={() => {setimgId(isImgId(2))}}></div>
                        <div className={gamePage.miniImg} style={{backgroundImage: `URL(${game.images[isImgId(3)]})`}} onClick={() => {setimgId(isImgId(3))}}></div>
                    </div>
                    <h1 className={gamePage.title}>{game.title}</h1>
                </div>
                
                <h2 className={gamePage.asideHead}>Describe</h2>
                <p className={gamePage.describe}>{game.describe}</p>

                <h2 className={gamePage.centerHead}>Ganres</h2>
                <div className={gamePage.ganres}>{game.ganres.map((el) => (
                    <div key={el} className={gamePage.ganre}>{el}</div>
                ))}</div>

                <div className={gamePage.rateBlock}>
                    <div>
                        <h2 className={gamePage.centerHead}>Rate</h2>
                        <b className={gamePage.rateMark}>{rates.length == 0 ? "0" : avargeRate()}/5</b>
                        <b className={gamePage.rateCount}>Rate count: {game.rateCount}</b>
                    </div>
                    <div>
                        <div><b className={gamePage.star}>1</b>⭐: {rates.filter((el) => (el == 1)).length}</div>
                        <div><b className={gamePage.star}>2</b>⭐: {rates.filter((el) => (el == 2)).length}</div>
                        <div><b className={gamePage.star}>3</b>⭐: {rates.filter((el) => (el == 3)).length}</div>
                        <div><b className={gamePage.star}>4</b>⭐: {rates.filter((el) => (el == 4)).length}</div>
                        <div><b className={gamePage.star}>5</b>⭐: {rates.filter((el) => (el == 5)).length}</div>
                    </div>
                </div>

                <div className={gamePage.rate}>
                    <div onMouseLeave={() => { starsCheck() }}>
                            {stars.map((el) => (
                                <svg onMouseEnter={() => {!game.isRated ? fill(el.id) : console.log("")}} onClick={() => {rate(el.id)}} key={el.id} id={el.id} fill={`${el.col}`} width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                                </svg>
                            ))}
                    </div>
                </div>
                
                {!isBuy ?
                    <div className={gamePage.priceBlock}>
                        <div>
                            <div className={gamePage.price}>Price: ${game.price}</div>
                        </div>
                        <div>
                            <div className={gamePage.buy} onClick={() => {setIsOpen(true)}}>Buy</div>
                        </div>
                    </div>
                :
                    <h3 className={gamePage.centerHead}>{game.title} is Bought</h3>
            }

                <div>
                    <h2 className={gamePage.centerHead}>Autors</h2>
                    <div className={gamePage.authorsBlock}>
                        <div className={`${gamePage.moveArrow} ${gamePage.moveBack}`} onClick={() => authorForward()}>←</div>
                        <div className={gamePage.authors}>
                            <MiniAuthor id={game.authors[authorId].id} name={game.authors[authorId].name} stage={game.authors[authorId].stage} img={game.authors[authorId].img}/>
                            <MiniAuthor id={game.authors[isAuthorId(1)].id} name={game.authors[isAuthorId(1)].name} stage={game.authors[isAuthorId(1)].stage} img={game.authors[isAuthorId(1)].img}/>
                            <MiniAuthor id={game.authors[isAuthorId(2)].id} name={game.authors[isAuthorId(2)].name} stage={game.authors[isAuthorId(2)].stage} img={game.authors[isAuthorId(2)].img}/>
                            <MiniAuthor id={game.authors[isAuthorId(3)].id} name={game.authors[isAuthorId(3)].name} stage={game.authors[isAuthorId(3)].stage} img={game.authors[isAuthorId(3)].img}/>
                        </div>
                        <div className={`${gamePage.moveArrow} ${gamePage.moveForward}`} onClick={() => authorBack()}>→</div>
                    </div>
                </div>

                <div>
                    <h2 className={gamePage.asideHead}>Comments</h2>
                    <input className={gamePage.write} value={inputValue} onInput={(e) => {setInputValue(e.currentTarget.value)}} onKeyDown={(e) => {if(e.code == "Enter"){addComment(inputValue)}}}></input>
                    {inputValue.trim() == "" && <div className={gamePage.closePost}>→</div>}
                    {inputValue.trim() !== "" && <div className={gamePage.post} onClick={() => {addComment(inputValue)}}>→</div>}

                    <div>
                        {game.comments.map((el) => (
                            <Comment myAccount={props.myAccount} usersList={props.usersList} setUsersList={props.setUsersList} key={el.id} elTitle={el.elTitle} id={el.id} name={el.name} cont={el.cont} ratedUsers={el.ratedUsers} likes={el.likes} hates={el.hates} gamesList={props.gamesList} setGamesList={props.setGamesList} />
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && ReactDOM.createPortal(<BuyBlock thisGame={game} isOpen={isOpen} setIsOpen={setIsOpen} price={game.price} myAccount={props.myAccount} setMyAccount={props.setMyAccount} usersList={props.usersList} setUsersList={props.setUsersList} />, buyBlock)}
        </div>
    )
}
