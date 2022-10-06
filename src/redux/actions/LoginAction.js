// Action type
export const WRITE_ID_LOGIN = 'WRITE_ID_LOGIN';
export const WRITE_PW_LOGIN = 'WRITE_PW_LOGIN';

// Action creators
export const writeIdLogin = (id) => {
    console.log('writeId', id);
    return {
        type: WRITE_ID_LOGIN,
        id: id,
    }
}

export const writePwLogin= (pw) => {
    console.log('writePw', pw);
    return {
        type: WRITE_PW_LOGIN,
        pw: pw,
    }
}