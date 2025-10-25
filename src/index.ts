import bcrypt from "bcryptjs";


async function main() {
    
let password : string = "ilovekriti" ;

const salt = 10 ;
 // hashing the password
const hash = await bcrypt.hash(password, salt) ;

console.log("Hashed password:"+hash) ;

// checking password whether it is right or wrong

 // password = "ilovesmriti";

let isMatch = await bcrypt.compare(password , hash) ;

if(!isMatch) {
    console.log("Incorrect Password") ;
}
else {
    console.log("It is a correct password") ;
}


}

main() ;