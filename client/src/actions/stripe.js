import axios from 'axios'

export const createConnectAccount = async (token) =>
    await axios.post(`${process.env.REACT_APP_API}/create-connect-account`, {}, {
        headers: {
            Authorization: `Bearer ${token}`

        }
    })


//give us the user status
export const getAccountStatus = async (token) => axios.post(`${process.env.REACT_APP_API}/get-account-status`, {}, {
    headers: {
       Authorization: `Bearer ${token}` 
    }
})    

// getting the stripe user account balance
export const getAccountBalance = async (token) =>{
    axios.post(`${process.env.REACT_APP_API}/get-account-balance`,{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
