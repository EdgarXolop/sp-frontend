import cookies from 'js-cookie'


export const login = (email, password) =>
    window.api.post(
        "/auth/login", {
            "email": email,
            "password": password
        }
    )

export const getUserInfo = () =>{

    let access_token = cookies.get("access_token")

    if( typeof access_token !== "string") return Promise.reject("no access token available")
    
    return window.api.get(
        "/user/profile",
        {
            headers:{
                Authorization : `Bearer ${access_token}`
            }
        }
    )
}