import { TextField } from "@mui/material";


const SearchBar = () => {
    return (
        <TextField id="search-bar" label="Search here..." variant="outlined" sx={{width : "100%"}} size="small"/>
    );
}

export default SearchBar;