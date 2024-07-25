// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const addFunction = () => {
    return 20+10;
}

const subFunction = () =>{
    return 20-10;
}

const multipleFunction = () =>{
    return 20*10;
}


export {addFunction , subFunction , multipleFunction}

// Task 4: Create a module that exports a single function using default export. import and use this function in another script.

const defaultExportFunction = () =>{
    return `Hello ,  I am a default export function`;
}

export default defaultExportFunction;