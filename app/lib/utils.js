import fetch from 'isomorphic-fetch'
import CryptoJS from 'crypto-js'

const base_url = "http://gateway.marvel.com:80"
const api_private = "b0223681fced28de0fe97e6b9cd091dd36a5b71d"
const api_public = "298bab46381a6daaaee19aa5c8cafea5"

const getTimestamp = () => Math.floor(Date.now() / 1000)
const md5 = str => CryptoJS.MD5(str).toString()
const getHash = () => md5(getTimestamp() + api_private + api_public)
const encodeURL = x => Object.keys(x).map(function(key) {
    return key + '=' + x[key];
}).join('&');

export const getFullImagePath = (path) => {
  return path + '?' + encodeURL({ts: getTimestamp(), apikey: api_public, hash: getHash()})
}

export const fetchHeroes = cb => {
  fetch(base_url
    + '/v1/public/characters?'
    + encodeURL({ts: getTimestamp(), apikey: api_public, hash: getHash()})
    , {
      method: "GET",
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(characters) {
        cb(characters)
    });
}
