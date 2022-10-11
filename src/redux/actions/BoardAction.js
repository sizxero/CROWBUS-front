// Action type
export const SELECT_BOARD_POST_CREATE = 'SELECT_BOARD_POST_CREATE';
export const SELECT_ROUTE_POST_CREATE = 'SELECT_ROUTE_POST_CREATE';
export const WRITE_TITLE_POST_CREATE = 'WRITE_TITLE_POST_CREATE';
export const WRITE_CONTENT_POST_CREATE ='WRITE_CONTENT_POST_CREATE';

export const DISPATCH_SEARCH_BOARD_TYPE='DISPATCH_SEARCH_BOARD_TYPE';
export const DISPATCH_SEARCH_ROUTE_TYPE='DISPATCH_SEARCH_ROUTE_TYPE';
export const DISPATCH_SEARCH_PAGE= 'DISPATCH_SEARCH_PAGE';

// Action creators
export const selectBoardPostCreate = (boardType) => {
    return {
        type: SELECT_BOARD_POST_CREATE,
        boardType: boardType,
    }
} 

export const selectRoutePostCreate = (routeType) => {
    return {
        type: SELECT_ROUTE_POST_CREATE,
        routeType: routeType,
    }
}

export const writeTitlePostCreate = (title) => {
    return {
        type: WRITE_TITLE_POST_CREATE,
        title: title,
    }
}

export const writeContentPostCreate= (contents) => {
    return {
        type: WRITE_CONTENT_POST_CREATE,
        contents: contents,
    }
}

export const dispatchSearchBoardType = (boardType) => {
    return {
        type: DISPATCH_SEARCH_BOARD_TYPE,
        boardType: boardType,
    }
}

export const dispatchSearchRouteType = (routeType) => {
    return {
        type: DISPATCH_SEARCH_ROUTE_TYPE,
        routeType: routeType,
    }
}

export const dispatchSearchPage = (page) => {
    return {
        type: DISPATCH_SEARCH_PAGE,
        page: page,
    }
}