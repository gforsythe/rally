import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 30,
  },
  media: {
    height: 140,
  },
});

export default function Organizations() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://pnwraptors.com/wp-content/uploads/2020/05/105-18-048-e1589565999168.jpg"
          title="Raptor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Raptors
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Wildlife organization dedicated to the conservation of birds of
            prey. Visitor Centre in Duncan, BC. Bird abatement/wildlife
            management across Canada.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Join
        </Button>
        <Button size="medium" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
