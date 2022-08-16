import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL:process.env.BASE_API, // api 的 base_url
    timeout: 10 * 60 * 1000 // request timeout
})



export default service