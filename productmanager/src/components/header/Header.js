import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import Item from "@mui/material/Grid";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid xs={8}>
          <Item>
            <SearchBar />
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <Button
              variant="contained"
              color="success"
              endIcon={<AddIcon />}
              sx={{ marginLeft: "1rem" }}
            >
              Adding
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<RefreshIcon />}
              sx={{ marginLeft: "1rem" }}
            >
              Refresh
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
