const url = `https://api.edamam.com/api/nutrition-details?app_id=${POST_APP_ID}&app_key=${POST_APP_KEY}&title=${title}`


export const postRequest = async (url, data) =>{
const response = await fetch (url, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept-type": "application/json"
    },
    body: JSON.stringify(data)
})


const data = await response.json()
return data
}

