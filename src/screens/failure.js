import React, { useEffect, useState } from "react";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    background: theme.palette.error.light,
    boxShadow: theme.shadows[6],
    borderRadius: theme.spacing(2),
    maxWidth: 400,
    position: "relative",
  },
  errorIcon: {
    fontSize: "4rem",
    color: theme.palette.error.main,
    marginBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  animation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, ${theme.palette.error.light} 0%, ${theme.palette.error.main} 100%)`,
    opacity: 0.5,
    zIndex: -1,
    animation: "$fadein 2s forwards",
  },
  "@keyframes fadein": {
    "0%": { opacity: 0 },
    "100%": { opacity: 0.5 },
  },
}));

const FailurePage = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(redirectTimer);
      history.push("/");
    }

    return () => {
      clearInterval(redirectTimer);
    };
  }, [countdown, history]);

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.animation} />

        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <ErrorOutlineIcon className={classes.errorIcon} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h1" className={classes.heading}>
              Payment UnSuccessful!!!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              You will be redirected to the home page in {countdown} seconds.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FailurePage;