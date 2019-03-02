import axios from 'axios';
const instance =axios.create({
    baseURL:'https://react-burger-1b92c.firebaseio.com/'
});

export default instance;