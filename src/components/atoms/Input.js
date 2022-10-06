import { TextField } from '@mui/material';
import { useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Input = (props) => {
    return (
        <TextField 
        id={props.id}
        className={props.className}
        variant="outlined"
        placeholder={props.placeholder} 
        onChange={props.eventHandler} />
    );
}

const PasswordInput = (props) => {
    return (
        <TextField
        id={props.id}
        className={props.className}
        type="password"
        autoComplete="current-password"
        placeholder={props.placeholder} 
        onChange={(e) => props.eventHandler}
        />
    )
}

const TextArea = (props) => {
    return (
        <TextField
        id={props.id}
        className={props.className}
        multiline
        rows={7}
        defaultValue=""
        inputProps={{ 'aria-label': 'Without label' }}
        placeholder={props.placeholder} 
        onChange={props.eventHandler}
        />
    )
}

const Date = (props) => {
    dayjs.locale('ko');
    const [value, setValue] = useState(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            id={props.id}
            className="CustomInputDate"
            inputFormat="YYYY.MM.DD (ddd)"
            value={value}
            renderInput={(params) => <TextField {...params} />}
            onChange={props.eventHandler}
            />
        </LocalizationProvider>
    );
}


export { Input, PasswordInput, TextArea, Date };