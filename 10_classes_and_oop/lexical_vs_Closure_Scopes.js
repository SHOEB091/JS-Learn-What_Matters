//lexical Scope
//Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.


const myfunction=()=>{
    let myValue=2;
    console.log(myValue);

    const childFunction = ()=>{
        console.log(myValue+=1);
    }

    childFunction();
}
myfunction();

//Closuers


const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
result();
result();
result();
result();
