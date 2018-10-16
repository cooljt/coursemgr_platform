
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
}