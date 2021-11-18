import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend1212.herokuapp.com'
})

export default instance;