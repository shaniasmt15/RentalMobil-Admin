//for check condition user, login or not
export function getAuthHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if(user && user.access_token){
        console.log(user.access_token)
        return {Authorization :  `${user.access_token}` }
    }
    else{
        return {};
    }
}


