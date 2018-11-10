import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL,} from '../../utils/constants'
import { Platform } from 'react-native';

const API = Platform.OS === 'android'
  ? 'http://10.0.3.2:3000/v1' // works for Genymotion
  : 'http://localhost:3000/v1';

export function fetchDataFromAPI (){
	return (dispatch) => {
		dispatch (getData())
		fetch('http://gtime.demo-kd.com/api/home',{
			method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
		   }
		})
		.then(json =>{return json.json()})
		.then(jsonData => { dispatch(getDataSuccess(jsonData.data))})
		.catch(err => dispatch(getDataFail(err)))

	}
}

function getData(){
	return{
		type: FETCHING_DATA
	}
}

function getDataSuccess(data){
	return{
		type: FETCHING_DATA_SUCCESS,
		data
	}
}

function getDataFail(err){
	return{
		type: FETCHING_DATA_FAIL
	}
}


