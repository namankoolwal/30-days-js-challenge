// ===========================================================================================================
                                        // FETCHING DATA FROM AN API
// ===========================================================================================================

// const BASEURL = 'https://api.spacexdata.com/v2/rockets';
const BASEURL = 'https://dogapi.dog/api/v2/facts';

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

        const fetchPromise = fetch(BASEURL)

        fetchPromise.then(response=>{
            return response.json()
        })
        .then(result=>{
            // console.log(result.data)
        })
        .catch(error=>{
            console.log(error)
        })


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.


        async function fetchData(){
           const response =  await fetch(BASEURL)
           const result = await response.json()
           console.log(result.data)
        }

        fetchData()