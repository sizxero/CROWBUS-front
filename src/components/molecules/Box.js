import { Grid } from '@mui/material';

const ColumnFlexBoxCenter = (props) => {
    return (
        <Grid
        id={props.id}
        className={props.className}
        container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >{props.children}</Grid>
        );
}

const RowFlexBoxCenter = (props) => {
    return (
        <Grid
        id={props.id}
        className={props.className}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >{props.children}</Grid>
        );
}

const ColumnFlexBox = (props) => {
  return (
      <Grid
      id={props.id}
      className={props.className}
      container
        direction="column"
      >{props.children}</Grid>
      );
}

const RowFlexBox = (props) => {
  return (
      <Grid
      id={props.id}
      className={props.className}
        container
        direction="row"
        alignItems="center"
      >{props.children}</Grid>
      );
}

export { ColumnFlexBoxCenter, RowFlexBoxCenter, ColumnFlexBox, RowFlexBox };