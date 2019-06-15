import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5e33d74b368415907f49087136cf3d632f89257702d49bddae97028e9eb1b57f'
  }
});
