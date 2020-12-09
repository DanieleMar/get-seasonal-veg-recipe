import { GET_APP_ID, GET_APP_KEY } from "../../../constant"

export const fetchRecipe = async (vegetable) => {

    try {
        const url = `https://api.edamam.com/search?q=${vegetable}&app_id=${GET_APP_ID}&app_key=${GET_APP_KEY}&to=1&health=vegetarian`
        const response = await fetch(url, {
            headers : { 
              
              'mode': 'no-cors',
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        const data = await response.json()
    
    
        return data
      } catch(err) {
        console.log(err); // TypeError: failed to fetch
      }

}


// const fetchFromFile = () =>{
// const file 
// } 

//saveToFile( fetchRecipe('Garlic'), 'garlic')

