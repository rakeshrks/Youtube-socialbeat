import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from "@material-ui/icons/Comment";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const SecondCard = (props) => (
  <Card {...props}>
    <CardContent>
      <div>
        <Typography
          style={{
            fontSize: "14",
            color: "textSecondary",
            width: "50%",
            textAlign: "left",
            float: "left",
          }}
          gutterBottom
        >
          Statics
        </Typography>
        <Typography
          style={{
            fontSize: "14",
            color: "textSecondary",
            width: "50%",
            textAlign: "right",
            float: "right",
          }}
          gutterBottom
        >
          Overall Data
        </Typography>
      </div>
      <div>
        <Grid
          container
          spacing={2}
          style={{ width: "100%" }}
          sx={{ justifyContent: "space-between" }}
        >
          <Grid item style={{ width: "20%" }}>
            {/* <List style={{ width: "100%", maxWidth: 360 }}>
              <ListItem>
                <VisibilityIcon color="primary" fontSize="medium" />
                <ListItemText primary="Total Views" secondary="90" />
              </ListItem>
            </List> */}
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <VisibilityIcon color="primary" fontSize="medium" />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title="Total View"
              subheader="35"
            />
          </Grid>
          <Grid item style={{ width: "20%" }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <ThumbUpAltIcon
                      fontSize="medium"
                      style={{ color: "#ddb8ee" }}
                    />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title="Total Like"
              subheader="35"
            />
          </Grid>
          {/* <Grid item md={2}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <ThumbDownAltIcon color="primary" fontSize="medium" />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title="Dislike"
              subheader="35"
            />
          </Grid> */}
          <Grid item style={{ width: "20%" }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <CommentIcon
                      fontSize="medium"
                      style={{ color: "#e78615" }}
                    />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title="Comments"
              subheader="35"
            />
          </Grid>
          <Grid itemstyle={{ width: "20%" }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <FeedbackIcon
                      fontSize="medium"
                      style={{ color: "#3895ea" }}
                    />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title=" Engagement"
              subheader="35"
            />
          </Grid>
          <Grid item style={{ width: "20%" }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "white" }}
                >
                  <IconButton aria-label="settings">
                    <ShowChartIcon
                      fontSize="medium"
                      style={{ color: "#68d6b7" }}
                    />
                  </IconButton>
                </Avatar>
              }
              // action={}
              title="Eng Rate"
              subheader="35"
            />
          </Grid>
        </Grid>
      </div>
    </CardContent>
  </Card>
);

export default SecondCard;
