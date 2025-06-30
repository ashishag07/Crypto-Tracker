import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import styles from "./styles.module.css";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: theme.palette.primary.main,
  },
  "& .MuiPaginationItem-page:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#3a80e9", // Custom Blue
      light: "#3a80e9",
      dark: "#3a80e9",
      contrastText: "#eee",
    },
  },
});
function DashboardPaginated({ page, handlePageChange }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.paginated_container}>
        <StyledPagination
          count={10}
          page={page}
          onChange={(event, value) => handlePageChange(event, value)}
          color="primary"
        />
      </div>
    </ThemeProvider>
  );
}

export default DashboardPaginated;
