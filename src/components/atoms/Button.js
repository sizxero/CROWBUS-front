import { Button, IconButton  } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight, PropaneSharp, Search } from "@mui/icons-material";

  
const ContainedButton = (props) => {
    return (
        <div id={props.id} className={props.className} onClick={props.eventHandler}>{props.content}</div>
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

export { ContainedButton, LeftButton, RightButton, SearchButton }