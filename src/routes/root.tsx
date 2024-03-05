import React from "react";
import { Grid } from "@mui/material";

interface WelcomePageProps {}

export const WelcomePage: React.FunctionComponent<WelcomePageProps> = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      Welcome page
    </Grid>
  );
};
