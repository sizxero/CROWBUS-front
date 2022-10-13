import * as Action from '../actions/ReservationAction';

const initialState = {
    date: '',
    route: '',
    place: '',
    seat: '',
    did: '',
};

const reducers = (state=initialState, action) => {
    const { type } = action;
    
    console.log(action);
    switch (type) {
        case Action.SELECT_DATE: {
            return {
                ...state,
                date: action.date
            }
        }
        case Action.SELECT_ROUTE: {
            return {
                ...state,
                route: action.route
            }
        }
        case Action.SELECT_PLACE: {
            return {
                ...state,
                place: action.place
            }
        }
        case Action.SELECT_SEAT: {
            return {
                ...state,
                seat: action.seat
            }
        }
        case Action.DISPATCH_DRIVE_ID: {
            return {
                ...state,
                did: action.did
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;