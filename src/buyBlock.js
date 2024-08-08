import { useState } from "react";
import buyBlock from "./styles/buyBlock/buyBlock.module.css";

export default function BuyBlock(props){

    let [cardValue, setCardValue] = useState("");
    let [accept, isAccept] = useState(false);

    function addGame(){
        let newAccount = {...props.myAccount, libraryGames: [...props.myAccount.libraryGames, {...props.thisGame, isBuy: true}]};
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

    function buy(){
        if((cardValue.length == 4) && (accept)){
            addGame();
            props.setIsOpen(false);
        }
    }

    return(
        <div className={buyBlock.background}>
            <div className={buyBlock.block}>
                <div className={buyBlock.cross} onClick={() => {props.setIsOpen(false)}}>x</div>
                <form>
                    <legend>Buy {props.thisGame.title}</legend>
                    <p className={buyBlock.price}>Price: ${props.price}</p>
                    <br/>
                    <label className={buyBlock.card}>
                        Card
                        <input value={cardValue} maxLength={4} onInput={(e) => {setCardValue(e.currentTarget.value)}} placeholder="Enter card number"></input>
                    </label>
                    <div className={buyBlock.cond}>
                        <h2>Purchase condition</h2>
                        <p>Purchase conditionPurchase conditionPurchase conditionPurchase conditionPurchase condition</p>
                    </div>
                    <label className={buyBlock.accept}>
                        Accept
                        <input type="checkbox" onClick={() => {isAccept(!accept)}}></input>
                    </label>
                    {((cardValue.length == 4) && (accept)) ? 
                     <button type="button" className= {buyBlock.btnOpen} onClick={() => {buy()}}>Buy</button> :
                     <button type="button" className={buyBlock.btnClose}>Buy</button>
                     }
                </form>
            </div>
        </div>
    )
}