import { Grid } from "@mui/material";

const GridXS = (props) => {
    return (<Grid item xs className="GridXS">{props.children}</Grid>);
}

export { GridXS } 