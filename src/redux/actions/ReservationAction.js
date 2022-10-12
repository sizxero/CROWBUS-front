// Action type
export const SELECT_DATE = 'SELECT_DATE';
export const SELECT_ROUTE = 'SELECT_ROUTE'
export const SELECT_PLACE = 'SELECT_PLACE';
export const SELECT_SEAT = 'SELECT_SEAT';

// Action creators
export const selectDate = (date) => {
    return {
        type: SELECT_DATE,
        date: date
    }
}

export const selectRoute = (route) => {
    return {
        type: SELECT_ROUTE,
        route: route
    }
}

export const selectPlace = (place) => {
    return {
        type: SELECT_PLACE,
        place: place
    }
}

export const selectSeat = (seat) => {
    return {
        type: SELECT_SEAT,
        seat: seat
    }
}