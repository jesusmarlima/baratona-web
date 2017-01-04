import cookie from 'react-cookie';


class CookieStore {


    static isUserAuthenticated(){
        if (this.getToken()){
           return true
        } else  {
            return false
        }

    }

    static saveToken(token){
        cookie.save('token',token)
    }

    static saveUser(user){
        cookie.save('user',user)
    }

    static getUser(){
        return cookie.load('user')
    }

    static getToken(){
        return cookie.load('token')
    }

    static cleanToken(){
        cookie.remove('token');
    }
    static cleanUser(){
         cookie.remove('user')
    }


}

export default CookieStore;
