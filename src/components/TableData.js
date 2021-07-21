import React from "react";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: "#dcdcdc",
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const posts = [
  {
    imageUrl: "anyurl",
    title: "Euismod interdum malesuada",
    description: "porttitor morbi varius",
    addedOn: "Added on : 10th july 2020",
    postType: "Story",
    costperview: 708,
    view: 839,
    like: 526,
    comment: 940,
  },
  {
    imageUrl: "anyurl",
    title: "Euismod interdum malesuada",
    description: "porttitor morbi varius",
    addedOn: "Added on : 10th july 2020",
    postType: "Real",
    costperview: 708,
    view: 899,
    like: 516,
    comment: 903,
  },
  {
    imageUrl: "anyurl",
    title: "Euismod interdum malesuada",
    description: "porttitor morbi varius",
    addedOn: "Added on : 10th july 2020",
    postType: "comedy",
    costperview: 748,
    view: 896,
    like: 576,
    comment: 907,
  },
  {
    imageUrl: "anyurl",
    title: "Euismod interdum malesuada",
    description: "porttitor morbi varius",
    addedOn: "Added on : 10th july 2020",
    postType: "Statics",
    costperview: 783,
    view: 839,
    like: 564,
    comment: 905,
  },
  // {
  //   imageUrl: "anyurl",
  //   title: "abc",
  //   description: "desc",
  //   addedOn: "26 aust 2021",
  //   postType: "anyfd",
  //   costperview: 78,
  //   view: 89,
  //   like: 56,
  //   comment: 90,
  // },
  // {
  //   imageUrl: "anyurl",
  //   title: "abc",
  //   description: "desc",
  //   addedOn: "26 aust 2021",
  //   postType: "anyfd",
  //   costperview: 78,
  //   view: 89,
  //   like: 56,
  //   comment: 90,
  // },
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableImg: {
    paddingBottom: "0px",
    backgroundColor: "#c4c4c4",
    height: "50px",
    width: "50px",
  },
  tableImgCell: {
    // marginTop: "20px",
    // marginLeft: "20px",
    // marginBottom: "20px",
    // marginRight: "20px",
    // paddingRight: "0px",
    // paddingLeft: "10px",
    // paddingBottom: "10px",
    // paddingTop: "10px",
    // height: "40px",
    // wigth: "40px",
  },
});

export default function TableData() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan="2">Post Name</StyledTableCell>
              <StyledTableCell align="left">Post Type</StyledTableCell>
              <StyledTableCell align="center">Cost Per View</StyledTableCell>

              <StyledTableCell align="center">Views</StyledTableCell>
              <StyledTableCell align="center">Likes</StyledTableCell>
              <StyledTableCell align="center">Comments</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <StyledTableRow key={row.postname}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.tableImgCell}
                >
                  <img src={row.imageUrl} className={classes.tableImg} />
                </StyledTableCell>
                <StyledTableCell>
                  {row.title}
                  <br />
                  {row.description}
                  <br />
                  {row.addedOn}
                </StyledTableCell>
                <StyledTableCell align="left">{row.postType}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.costperview}
                </StyledTableCell>

                <StyledTableCell align="center">{row.view}</StyledTableCell>
                <StyledTableCell align="center">{row.like}</StyledTableCell>
                <StyledTableCell align="center">{row.comment}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
