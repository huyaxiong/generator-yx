import axios from 'axios'

function init () {
  axios.defaults.baseURL = process.env.BASE_URL
  axios.defaults.withCredentials = true
  axios.defaults.headers.post['Content-Type'] = 'application/json'
}

export { init }
