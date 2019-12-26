import React from "react";
import RSVPFormHeader from "./rsvp-form-header";
import map from "lodash/map";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

export const ThankYouCard = ({ form }) => {
  const guestName = form.name.split(" ")[0];
  const plusOneName = form.plusOneName.split(" ")[0];
  return (
    <div>
      <RSVPFormHeader>{`Great, you're all set ${guestName}!`}</RSVPFormHeader>
      <br />
      <RSVPFormHeader>{`We can't wait to celebrate with you and ${plusOneName} at the Fairmont Palliser on July 25th 2020.`}</RSVPFormHeader>
      <br />
      <br />
      <Typography>
        If you have any questions, please don't hesitate to reach out to us
        directly or through email at albertchu539@gmail.com or
        vickywklao@gmail.com
      </Typography>
      <br />
      <TableContainer component={Paper} style={{ marginLeft: -10 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(form, (value, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
