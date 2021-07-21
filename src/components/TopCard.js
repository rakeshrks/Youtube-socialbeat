import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "7px",
    paddingRight: "7px",
    textTransform: "capitalize",
    backgroundColor: "#93db5a",
    height: "15px",
    width: "40px",
    color: "white",
    fontSize: "10px",
  },
  youButton: {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "#fabcbc",
  },
  thunbIcon: {
    color: "#f14848",
  },
});

export default function TopCard(props) {
  const classes = useStyles();

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={4}>
            <img src="youtube.png" alt="logo" height="60px" width="90px" />
            <Button variant="outlined" className={classes.youButton}>
              <ThumbUpAltIcon className={classes.thunbIcon} />
              150
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" variant="middle" />
          </Grid>
          <Grid item xs={7}>
            {" "}
            <Typography color="textSecondary" gutterBottom>
              Total Engagement Score
            </Typography>
            <Typography color="textPrimary" variant="h4">
              6.04
            </Typography>
            <Button variant="contained" className={classes.buttonStyle}>
              Excellent
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
