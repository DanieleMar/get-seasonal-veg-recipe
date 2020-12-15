import { GET_APP_ID, GET_APP_KEY } from "../../constant"

export const getRecipe = async (vegetable) => {

    try {

        const url = `https://api.edamam.com/search?q=${vegetable}&app_id=${process.env.REACT_APP_GET_APP_ID}&app_key=${process.env.REACT_APP_GET_APP_KEY}&to=10&health=vegetarian`
        const response = await fetch(url,{
          method:'GET',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*'

          },
          // mode:'no-cors'
    
          
        })
        const data = await response.json()
    
    console.log('data', data)
        return data
      } catch(err) {
        console.log('error',err); // TypeError: failed to fetch
      }

}


// const fetchFromFile = () =>{
// const file 
// } 

//saveToFile( fetchRecipe('Garlic'), 'garlic')

