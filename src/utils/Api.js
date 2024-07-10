import axios from 'axios';
// const mySystem = "local"
const mySystem = "server"
let Api = null

if (mySystem === "local") {
    Api = axios.create({
        baseURL: 'http://localhost:5000/api/',
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    });
} else {
    Api = axios.create({
        baseURL: 'https://hotelmng-backend.onrender.com/api/',
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    });
}



export default Api;