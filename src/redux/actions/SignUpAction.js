// Action type
export const WRITE_ID_SIGNUP = 'WRITE_ID_SIGNUP';
export const WRITE_PW_SIGNUP = 'WRITE_PW_SIGNUP';
export const WRITE_PW_RE_SIGNUP = 'WRITE_PW_RE_SIGNUP';
export const WRITE_NAME_SIGNUP = 'WRITE_NAME_SIGNUP';
export const WRITE_PHONE_SIGNUP = 'WRITE_PHONE_SIGNUP';
export const SELECT_ROUTE_SIGNUP = 'SELECT_ROUTE_SIGNUP';
export const WRITE_LICENSE_SIGNUP = 'WRITE_LICENSE_SIGNUP';

// Action creators
export const writeIdSignUp = (id) => {
    return {
        type: WRITE_ID_SIGNUP,
        id: id,
    }
}

export const writePwSignUp = (pw) => {
    return {
        type: WRITE_PW_SIGNUP,
        pw: pw,
    }
}

export const writePwReSignUp = (pwre) => {
    return {
        type: WRITE_PW_RE_SIGNUP,
        pwre: pwre,
    }
}
export const writeNameSignUp = (name) => {
    return {
        type: WRITE_NAME_SIGNUP,
        name: name,
    }
}

export const writePhoneSignUp = (phone) => {
    return {
        type: WRITE_PHONE_SIGNUP,
        phone: phone,
    }
}

export const selectRouteSignUp = (route) => {
    return {
        type: SELECT_ROUTE_SIGNUP,
        route: route,
    }
}

export const writeLicenseSignUp = (license) => {
    return {
        type: WRITE_LICENSE_SIGNUP,
        license: license,
    }
}