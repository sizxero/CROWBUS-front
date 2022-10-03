import { Button, IconButton  } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#00A9CE",
      },
      secondary: {
        main: "#FEDD00",
      },
    },
});
  
const ContainedButton = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button 
            color={props.color} 
            variant="contained" 
            id={props.id}
            className="containedBtnBig"
            onClick={props.eventHandler}>{props.title}</Button>
        </ThemeProvider>  
    );
}

const ContainedButtonSmall = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button 
            color={props.color} 
            variant="contained" 
            id={props.id}
            className="containedBtnSmall"
            onClick={props.eventHandler}>{props.title}</Button>
        </ThemeProvider>  
    );
}

const LeftButton = (props) => {
  return (
    <IconButton
    className="LeftButton"    
    aria-label="leftbtn"
    onClick={props.eventHandler}>
        <ChevronLeft />
    </IconButton>        
  );
}

const RightButton = (props) => {
    return (
      <IconButton
      className="RightButton"    
      aria-label="rightbtn"
      onClick={props.eventHandler}>
          <ChevronRight />
      </IconButton>        
    );
}

const SearchButton = (props) => {
  return (
    <IconButton
    className="SearchButton"    
    aria-label="searchbtn"
    onClick={props.eventHandler}>
        <Search />
    </IconButton>        
  );  
}

export { ContainedButton, ContainedButtonSmall, LeftButton, RightButton, SearchButton }