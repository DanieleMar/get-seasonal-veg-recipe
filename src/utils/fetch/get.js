import { GET_APP_ID, GET_APP_KEY } from "../../constant"

export const getRecipe = async (vegetable) => {

    try {

        const url = `https://api.edamam.com/search?q=${vegetable}&app_id=${process.env.REACT_APP_GET_APP_ID}&app_key=${process.env.REACT_APP_GET_APP_KEY}&to=10&health=vegetarian`
        const response = await fetch(url,{
          method:'GET',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": 'http://localhost:3000/',
            'Accept-Encoding': 'gzip'

          },
          // mode:'no-cors'
    
          
        })
        const data = await response

        if (data.status >= 200 && data.status <= 299) {
          return data.json();
        } else {
         
          throw 'errore';
        }
      } catch(err) {
        console.log('Troppe chiamate api')
        return 429
      }

}


// const fetchFromFile = () =>{
// const file 
// } 

//saveToFile( fetchRecipe('Garlic'), 'garlic')

