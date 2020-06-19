import {
    IS_INITIAL_TOP_RATED_MOVIES_LOADING,
    IS_INITIAL_TOP_RATED_MOVIES_SUCCESS,
    IS_INITIAL_TOP_RATED_MOVIES_FAIL,
} from '../actions/types'

const initialState = {
    isInitialLoading: false,
    movies: [],
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_INITIAL_TOP_RATED_MOVIES_LOADING:
            return {
                ...state,
                isInitialLoading: true
            }
        case IS_INITIAL_TOP_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                isInitialLoading: false,
                error: false,
                movies: action.payload
            }
        case IS_INITIAL_TOP_RATED_MOVIES_FAIL:
            return {
                ...state,
                isInitialLoading: false,
                error: true
            }

        default:
            return state;
    }
}

