import { Select, MenuItem } from '@mui/material';

const SelectBox = (props) => {
    const { label, eventHandler, list } = props;
    return (
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={eventHandler}
          defaultValue=""
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=""><em>{label}</em></MenuItem>
          { list.map((item) =>
              <MenuItem value={item.value}>{item.name}</MenuItem>
          )}
        </Select>
    );
}

export { SelectBox };