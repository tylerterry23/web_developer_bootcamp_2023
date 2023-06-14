function validUserNames(usernames) {
    // your code here
    
    return usernames.filter(n => {
        return n.length < 10
    })
}
  