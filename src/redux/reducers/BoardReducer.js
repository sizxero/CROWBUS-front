import * as Action from '../actions/BoardAction';

const initialState = {
    create: {boardType: '', routeType: '', title: '', contents: ''},
};

const reducers = (state=initialState, action) => {
    const { type } = action;
    
    switch (type) {
        case Action.SELECT_BOARD_POST_CREATE: {
            return {
                ...state,
                create: {boardType: action.boardType, routeType: state.create.routeType, 
                    title: state.create.title, contents: state.create.contents}
            }
        }
        case Action.SELECT_ROUTE_POST_CREATE: {
            return {
                ...state,
                create: {boardType: state.create.boardType, routeType: action.routeType, 
                    title: state.create.title, contents: state.create.contents}
            }
        }
        case Action.WRITE_TITLE_POST_CREATE: {
            return {
                ...state,
                create: {boardType: state.create.boardType, routeType: state.create.routeType, 
                    title: action.title, contents: state.create.contents}
            }
        }
        case Action.WRITE_CONTENT_POST_CREATE: {
            return {
                ...state,
                create: {boardType: state.create.boardType, routeType: state.create.routeType, 
                    title: state.create.title, contents: action.contents}
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;