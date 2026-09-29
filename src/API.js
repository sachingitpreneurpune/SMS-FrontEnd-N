import axios from "axios";


const API=axios.create({
    baseURL:"https://sms-backend-n-3.onrender.com/"
})

export default API;