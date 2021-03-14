import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  
  title: {
    fontSize: 30,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function TaskCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          TASK
        </Typography>
        <Typography variant="body2" component="p">
          Description of Task
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Mark Complete</Button>
      </CardActions>
    </Card>
  );
}