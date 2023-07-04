import React, { useEffect, useState } from "react";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
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
    background: theme.palette.success.light,
    boxShadow: theme.shadows[6],
    borderRadius: theme.spacing(2),
    maxWidth: 400,
    position: "relative",
  },
  successIcon: {
    fontSize: "4rem",
    color: theme.palette.success.main,
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
    background: `linear-gradient(to bottom, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
    opacity: 0.5,
    zIndex: -1,
    animation: "$fadein 2s forwards",
  },
  "@keyframes fadein": {
    "0%": { opacity: 0 },
    "100%": { opacity: 0.5 },
  },
}));

const PaymentSuccessPage = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(redirectTimer);
      history("/");
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
            <CheckCircleOutlineIcon className={classes.successIcon} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h1" className={classes.heading}>
              Payment Successful!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Thank you for your order.</Typography>
            <Typography variant="body1">
              Your food will be delivered soon.
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

export default PaymentSuccessPage;
