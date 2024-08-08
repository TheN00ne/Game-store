import { useState } from "react";
import login from "./styles/login/login.module.css";

export default function LoginPage(props){

    let [singType, setSignType] = useState("up");
    
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [copyPassword, setCopyPassword] = useState("");
    let [email, setEmail] = useState("");

    function validUser(){
        if((name.length >= 2) && (password.length >= 8) && (password == copyPassword) && (email.includes("@gmail.com")) && (email.length > 10) && (email.split("").slice(0, email.length - 10).join("").includes("@") == false) && (email.length > 10) && (email.split("").slice(0, email.length - 10).join("").includes(".") == false)){
            switch (singType) {
                case "up":
                    let finded1 = props.usersList.find((el) => (
                        el.email == email
                    ))
                    if(finded1 == undefined){
                        props.setUsersList([...props.usersList, {name: name, password: password, email: email, libraryGames: [], markGames: []}]);
                        props.setMyAccount({name: name, password: password, email: email, libraryGames: [], markGames: []});
                    }
                break;
                case "in":
                    let finded2 = props.usersList.find((el) => {
                        if((el.name == name) && (el.password == password) && (el.email == email)) {
                            return el;
                        }
                    })
                    if(finded2 !==  undefined){
                        props.setMyAccount({name: finded2.name, password: finded2.password, email: finded2.email, libraryGames: finded2.libraryGames, markGames: finded2.markGames});
                    }
                        
                break;

            }

        }
    }

    return(
        <div className={login.loginPage}>
            <div className={login.signBlock}>
                <div onClick={() => {setSignType("up")}} className={singType == "up" ? login.upChose : login.up}>Sign up</div>
                <div onClick={() => {setSignType("in")}} className={singType == "in" ? login.inChose : login.in}>Sign in</div>
            </div>
            <form>
                <legend>Login</legend>

                <div className={login.inpustBlock}>
                    <input placeholder="Enter your name" required={true} value={name} onInput={(e) => {setName(e.currentTarget.value)}} ></input>
                    <input type="password" placeholder="Enter your password" required={true} value={password} onInput={(e) => {setPassword(e.currentTarget.value)}} ></input>
                    <input type="password" placeholder="Confirm your password" required={true} value={copyPassword} onInput={(e) => {setCopyPassword(e.currentTarget.value)}} ></input>
                    <input type="email" placeholder="Enter your email" required={true} value={email} onInput={(e) => {setEmail(e.currentTarget.value)}}></input>
                </div>

                <button type="button" className={login.button} onClick={() => {validUser()}}>Done</button>
            </form>
        </div>
    )
}