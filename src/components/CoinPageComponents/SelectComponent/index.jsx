import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectComponent({ days, handleDaysChange }) {
  return (
    <div>
      <Select
        id="demo-simple-select"
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
