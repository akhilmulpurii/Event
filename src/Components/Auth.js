class Auth {
    constructor() {
        const retrievedUserAsString = localStorage.getItem('userObj');
        const retrievedUser = JSON.parse(retrievedUserAsString); 
        if (retrievedUser)  {
          return  this.authenticated = true;
        } else {
            return this.authenticated = false;
        }

    }

 isLoggedIn() {
 return this.authenticated;
}
}

export default new Auth()
