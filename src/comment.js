import gamePage from "./styles/gamePage/gamePage.module.css";

export default function Comment(props){

    function like(){
        if(props.ratedUsers.map((el) => {return el.email}).includes(props.myAccount.email)){

            if(props.ratedUsers.find((el) => (el.email == props.myAccount.email)).like == false){
                let newRatesUsers = props.ratedUsers.map((el) => {
                    if(el.email == props.myAccount.email){
                        return {email: el.email, like: true}
                    }
                        return el;
                })
    
                let newArr = props.gamesList.map((el) => {
                    if(el.title == props.elTitle){
                        let newComments = el.comments.map((com) => {
                            if(com.id == props.id){
                                return {...com, ratedUsers: newRatesUsers, hates: com.hates - 1, likes: com.likes + 1}
                            }
                            return com;
                        })
        
                        return {...el, comments: newComments};
                    }
        
                    return el;
                })
                props.setGamesList(newArr);
            }
            else{
                let newRatesUsers = props.ratedUsers.filter((el) => ( el.email !== props.myAccount.email ))
                let newArr = props.gamesList.map((el) => {
                    if(el.title == props.elTitle){
                        let newComments = el.comments.map((com) => {
                            if(com.id == props.id){
                                return {...com, ratedUsers: newRatesUsers, likes: com.likes - 1}
                            }
                            return com;
                        })
        
                        return {...el, comments: newComments};
                    }
        
                    return el;
                })
                props.setGamesList(newArr);
            }
        }
        else{
            let newArr = props.gamesList.map((el) => {
                if(el.title == props.elTitle){
                    let newComments = el.comments.map((com) => {
                        if(com.id == props.id){
                            return {...com, ratedUsers: [...com.ratedUsers, {email: props.myAccount.email, like: true}], likes: com.likes + 1}
                        }
                        return com;
                    })
    
                    return {...el, comments: newComments};
                }
                
                return el;
            })
            props.setGamesList(newArr);
        }
        
    }
    
    function hate(){
        if(props.ratedUsers.map((el) => {return el.email}).includes(props.myAccount.email)){
            
            if(props.ratedUsers.find((el) => (el.email == props.myAccount.email)).like == true){
                let newRatesUsers = props.ratedUsers.map((el) => {
                    if(el.email == props.myAccount.email){
                        return {email: el.email, like: false}
                    }
                    return el;
                })
                
                let newArr = props.gamesList.map((el) => {
                    if(el.title == props.elTitle){
                        let newComments = el.comments.map((com) => {
                            if(com.id == props.id){
                                return {...com, ratedUsers: newRatesUsers, hates: com.hates + 1, likes: com.likes - 1}
                            }
                            
                            return com;
                        })
                        
                        return {...el, comments: newComments};
                    }
                    
                    return el;
                })
                props.setGamesList(newArr);
            }
            else{
                let newRatesUsers = props.ratedUsers.filter((el) => ( el.email !== props.myAccount.email ))
                let newArr = props.gamesList.map((el) => {
                    if(el.title == props.elTitle){
                        let newComments = el.comments.map((com) => {
                            if(com.id == props.id){
                                return {...com, ratedUsers: newRatesUsers, hates: com.hates - 1}
                            }
                            
                            return com;
                        })
                        
                        return {...el, comments: newComments};
                    }
                    
                    return el;
                })
                props.setGamesList(newArr);
            }
        }
        else{
            let newArr = props.gamesList.map((el) => {
                if(el.title == props.elTitle){
                    let newComments = el.comments.map((com) => {
                        if(com.id == props.id){
                            return {...com, ratedUsers: [...com.ratedUsers, {email: props.myAccount.email, like: false}], hates: com.hates + 1}
                        }
                        
                        return com;
                    })
                    
                    return {...el, comments: newComments};
                }
                
                return el;
            })
            props.setGamesList(newArr);
        }
    }
    
    return(
        <div className={gamePage.commentBlock}>
            <h3>{props.name}</h3>
            <div className={gamePage.comment}>
                <p className={gamePage.cont}>{props.cont}</p>
                <div className={gamePage.like} onClick={() => {like()}}>
                    <div>{props.likes}</div>
                    <div>↑</div>
                </div>
                <div className={gamePage.hate} onClick={() => {hate()}}>
                    <div>{props.hates}</div>
                    <div>↓</div>
                </div>
            </div>  
        </div>
    )
}