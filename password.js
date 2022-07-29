let password = "devmount"

if (password.length >= 10 &&
    
    /[a-z]/i.test(password)  &&
    
    /[0-9]/i.test(password)
)
   { console.log("Password success!")


} else {

console.log("Pasword requirements not met!")

}