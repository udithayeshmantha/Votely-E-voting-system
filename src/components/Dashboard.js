import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import HowToVoteSharpIcon from "@mui/icons-material/HowToVoteSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import Logo from "../assets/logo.png";
import Main from "./Main";
import Voter from "./Voter";
import Votersguideline from "./VotersGuideline";
import Setting from './Setting'

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "Voter",
    title: "Voter",
    icon: <HowToRegSharpIcon />,
  },
  {
    segment: "VotersGuideline",
    title: "Voters Guideline",
    icon: <HowToVoteSharpIcon />,
  },
  {
    segment: "Setting",
    title: "Setting",
    icon: <SettingsSharpIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: false },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function PageContent({ pathname }) {
  if (pathname === "/dashboard") {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Main />
      </Box>
    );
  }

  if (pathname === "/Voter") {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Voter />
      </Box>
    );
  }
  if (pathname === "/VotersGuideline") {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Votersguideline />
      </Box>
    );
  }
  if (pathname === "/Setting") {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Setting />
      </Box>
    );
  }
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={Logo} alt="Votely" />,
        title: "",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
