import axios from 'axios'

function getThis (obj) {
  return axios.get('http://google.com');
}

function getThat (obj) {
  return axios.get('http://google.com');
}

export const updateHandle = (obj) => {
  return axios.all([getThis(obj), getThat(obj)])
    .then( axios.spread( (this, that) => {
      return {
        this: this,
        that: that
      };

    }))
}

