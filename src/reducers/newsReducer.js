import { GET_NEWS, ERROR_NEWS } from '../types';

const initialSate = {
    news: [],
    loading: true
};

 const newsReducer = (state = initialSate, action) => {

    switch(action.type){
        case GET_NEWS:
            return{
                ...state,
                news: action.payload,
                loading: false
            }
        case ERROR_NEWS:
            return{
                loading: false,
                error: action.payload
            }  
        default: return state      
    };
};

export default newsReducer;


