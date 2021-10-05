import axios from 'axios';

export const createNote = (note) => {
    return axios.post("http://localhost:3001/api/notes",note)
    .then(response => {
      const {data} = response;
      return data;
    });
}