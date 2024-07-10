import { APIURL } from "@/config/api"
import { default as axiosInstance } from "@/config/axiosInstance"

const AuthService = {}
/**
 * 
 * @param {*} data : { email : string , password : string , password_confirmation : string}
 * @returns 
 */
AuthService.register = async (data) => {
    return await axiosInstance.post(`${APIURL}register` , data )
} 

/**
 * 
 * @param {*} data : { email : string , password : string }
 * @returns 
 */

AuthService.login = async (data) => {
    return await axiosInstance.post(`${APIURL}login` , data )
} 

export default AuthService