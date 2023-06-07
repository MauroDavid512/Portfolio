import axios from 'axios'


export const SET_LANG = "SET_LANG"
export const DARK_MODE = "DARK_MODE"


export const setLang = (lang) => {
    return function (dispatch) {
        dispatch({
            type: SET_LANG,
            payload: lang
        })
    }
}

export const darkMode = () => {
    return function (dispatch) {
        dispatch({ type: DARK_MODE })
    }
}

