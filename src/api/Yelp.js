import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/business',
  headers: {
    Authorization: `Bearer `,
  },
});
