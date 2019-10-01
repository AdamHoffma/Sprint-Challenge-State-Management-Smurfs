import axios from 'axios'
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'
export const POST_DATA = 'POST_DATA'

export const getSmurf = props => {
    return dispatch => {
        dispatch({type: FETCH_DATA})
        
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_FAIL, payload: err.response})
        })
    }
}

export const postSmurf = props => {
    console.log(props)
    return dispatch => {
        axios.post('http://localhost:3333/smurfs', props)
        .then(res => {
            dispatch({type: POST_DATA} )
        })
        .catch(error => console.log(error))
    }
}