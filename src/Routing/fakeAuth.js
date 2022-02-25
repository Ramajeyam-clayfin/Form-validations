export const fakeAuth = {
    isAuthenticated: false,
    login(callBack) {
      fakeAuth.isAuthenticated = true;
      callBack();
    //   console.log(callBack)
    },
    logout(callBack) {
      fakeAuth.isAuthenticated = false;
      callBack();
    //   console.log(callBack)
    },
  };
  