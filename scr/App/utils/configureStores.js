import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../Redux/reducers'

export default function configureStore(){
	let store = createStore(rootReducers,applyMiddleware(thunk)) 
	return store
}