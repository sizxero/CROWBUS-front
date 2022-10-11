import { Select, MenuItem } from '@mui/material';
import { P } from './Text';

const SelectBox = (props) => {
    const { label, eventHandler, list } = props;
    return (
        <Select
          className={props.className}
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