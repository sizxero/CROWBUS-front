import { Grid } from "@mui/material";

const GridXS = (props) => {
    return (<Grid item xs className="GridXS">{props.children}</Grid>);
}

const GridXS_N = (props) => {
    return (<Grid item xs={props.n} className="GridXS">{props.children}</Grid>);
}

export { GridXS, GridXS_N } 