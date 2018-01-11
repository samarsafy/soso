const checkUsername = (user) => {
  return /^[a-zA-Z]+$/.test(user)
}
const checkEmail=(email)=> {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}



console.log("Emailadress is correct", checkEmail("samarsafy@yahoo.de"));
console.log("username  just letters: ",  checkUsername("Tommy"));
