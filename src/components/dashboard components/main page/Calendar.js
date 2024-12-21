import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Calendar() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white shadow p-4 md:p-6 rounded" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="font-bold mb-4 text-base md:text-xl lg:text-xl">
        Calendar
      </h2>
      <Box sx={{ width: "100%", typography: "" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} variant="fullWidth">
              <Tab label="Today" value="1" sx={{ fontFamily: 'Poppins, sans-serif' }} />
              <Tab label="Next Week" value="2" sx={{ fontFamily: 'Poppins, sans-serif' }} />
              <Tab label="This Month" value="3" sx={{ fontFamily: 'Poppins, sans-serif' }} />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}