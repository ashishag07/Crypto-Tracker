import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function ToggleComponent({ priceType, handlePriceChange }) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceChange}
      aria-label="Platform"
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
    >
      <ToggleButton value="prices">PRICE</ToggleButton>
      <ToggleButton value="market_caps">MKT CAP</ToggleButton>
      <ToggleButton value="total_volumes">VOLUME</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleComponent;
