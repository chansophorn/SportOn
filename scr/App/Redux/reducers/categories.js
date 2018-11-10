import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL} from '../../utils/constants'

const initialState ={
	categories:[],
	isFetching: false,
	error: false
}
const categories=(state = initialState, action)=>{
	switch(action.type){
		case FETCHING_DATA:
			return{
				...state,
				isFetching: true,
				categories:[]
		}
		case FETCHING_DATA_SUCCESS:
			return{
				...state,
				isFetching: false,
				categories: action.data
		}
		case FETCHING_DATA_FAIL:
			return{
				...state,
				isFetching: false,
				error: true

		}
		default:
		return state
	}
}
export default categories;