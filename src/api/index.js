import axios from 'axios'
import cookies from 'js-cookie'

export const login = (email, password) =>
    axios.post(
        `${process.env.VUE_APP_API}/auth/login`, {
            "email": email,
            "password": password
        }
    )

export const getUserInfo = () =>{

    let access_token = cookies.get("access_token")

    if( typeof access_token !== "string") return Promise.reject("no access token available")
    
    return axios.get(
        `${process.env.VUE_APP_API}/user/profile`,
        {
            headers:{
                "Authorization" : `Bearer ${access_token}`
            }
        }
    )
}