import * as Action from '../actions/SignUpAction';

const initialState = {
    id: '',
    pw: '',
    pwre: '',
    name: '',
    phone: '',
    route: '',
    license: '',
    pwchk: false,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.WRITE_ID_SIGNUP: {
            return {
                ...state,
                id: action.id
            }
        }
        case Action.WRITE_PW_SIGNUP: {
            return {
                ...state,
                pw: action.pw
            }
        }
        case Action.WRITE_PW_RE_SIGNUP: {
            return {
                ...state,
                pwre: action.pwre,
                pwchk: state.pw === action.pwre,
            }
        }
        case Action.WRITE_NAME_SIGNUP: {
            return {
                ...state,
                name: action.name
            }
        }
        case Action.WRITE_PHONE_SIGNUP: {
            return {
                ...state,
                phone: action.phone
            }
        }
        case Action.SELECT_ROUTE_SIGNUP: {
            return {
                ...state,
                route: action.route
            }
        }
        case Action.WRITE_LICENSE_SIGNUP: {
            return {
                ...state,
                license: action.license
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;