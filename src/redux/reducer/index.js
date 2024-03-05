import {
    SET_LANG,
    DARK_MODE
} from '../actions'


const initialState = {
    lang:"EN",
    darkMode:false,
    siriusMode:false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // Renderizado seleccionando opciones en Nav -------------------------------------
        case SET_LANG:
            return {
                ...state,
                lang: action.payload
            }
        case DARK_MODE:
            return {
                ...state,
                darkMode: state.darkMode? false : true
            }
        case SIRIUS_MODE:
            return {
                ...state,
                siriusMode: state.siriusMode? false : true
            }

        default: return state
    }
}

export default rootReducer