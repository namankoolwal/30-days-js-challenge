
// Task 6: Install a third-party module (e.g., Lodash ) using npm. Import and use a function from this module in a script.


    import _ from 'lodash';


    const numbers = [1, 2, 3, 4, 5];
    const sum = _.sum(numbers);
    console.log("Sum using lodash" , sum);




// Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

import axios from 'axios';

const getData = async () =>{
    const response = await axios.get('https://dogapi.dog/api/v2/facts');
    console.log(response.data.data)
}

getData()




