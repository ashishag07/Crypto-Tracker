import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardCoinsGrid from "../DashboardCoinsGrid";
import DashboardCoinsList from "../DashboardCoinsList";

export default function DashboardTabs({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    textTransform: "capitalize",
    fontSize: "1rem",
    fontFamily: "Inter",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} centered>
          <Tab label="grid view" value="grid" sx={style} />
          <Tab label="list view" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <DashboardCoinsGrid coins={coins} />
        </TabPanel>
        <TabPanel value="list">
          <DashboardCoinsList coins={coins} />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
