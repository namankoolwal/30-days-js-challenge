// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.


    const constant = 20;

    const addFunction =(a,b) =>{
        return a+b+constant;
    }

    const multipleFunction = (a) =>{
        return a*constant;
    }

    export {constant , addFunction , multipleFunction};