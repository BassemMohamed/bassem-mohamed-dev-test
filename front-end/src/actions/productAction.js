import axios from 'axios';
import {FETCH_ALL,SEARCH} from './actionTypes'

export function fetchAll() {
    var url = 'http://localhost:3010/products/';
    return (dispatch) => {
        return axios.get(url).then((res) => {
            dispatch({
                type: FETCH_ALL,
                payload: res.data.products
            })
        })
    } 
}

export function search(key) {
    var url = 'http://localhost:3010/products/search/' + key;
    return (dispatch) => {
        return axios.get(url).then((res) => {
            dispatch({
                type: SEARCH,
                payload: res.data.products
            })
        })
    }
}