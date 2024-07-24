// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.

    const Validurl = "https://jsonplaceholder.typicode.com/posts"
    const Invalidurl = "https://jsonplaceholders.typicode.com/posts"

        fetch(Invalidurl)
        .then((response) => {
           return data = response.json()
        }).then(data => {
            console.log(data)
        }).catch(error=>{
            console.log(error.message)
        })



// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

      async function fetchData(){
            try {
                const response = await fetch(Invalidurl)
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()