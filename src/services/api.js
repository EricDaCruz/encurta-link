import axios from 'axios'

const key = "35fe16d73454d8675f8cebc5f80d09a3c4c44c1b"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api