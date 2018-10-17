
const USER_SERVICE_URL = "http://localhost:8080/api";

export default class UserServiceSigleton {
    static register(user) {
       return fetch(USER_SERVICE_URL+"/register",{
            body: JSON.stringify(user),
             headers: {
                        'Content-Type': 'application/json'
                      },
              method: 'POST'}).then(usr => {return usr.json()});
    }

    static login(user) {
        return fetch(USER_SERVICE_URL+"/login",{
           body: JSON.stringify(user),
            headers: {
                      'Content-Type': 'application/json'
                      },
             method: 'POST'}).then(usr => {return usr.json()});
    }

    static updateProfile(user) {
        return fetch(USER_SERVICE_URL+"/profile",{
               body: JSON.stringify(user),
                headers: {
                           'Content-Type': 'application/json'
                         },
                 method: 'PUT'}).then(usr => {return usr.json()});
    }

    static logoutUser() {
        return fetch(USER_SERVICE_URL+"/logout",{
               headers: {
                         'Content-Type': 'application/json'
                         },
                         method: 'POST'});
    }
}