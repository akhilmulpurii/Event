class Auth {
    constructor() {
      const uid =  localStorage.getItem('userId');
      if (uid) {
        return this.authenticated = true;
      } else {
          return this.authenticated = false;
      }


    }

 isLoggedIn() {
 return this.authenticated;
}
}

export default new Auth()
