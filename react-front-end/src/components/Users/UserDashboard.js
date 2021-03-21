import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import { Typography, Button } from "@material-ui/core";
import Axios from "axios";
import "./UserDashboard.scss";
import TaskTabs from "./TaskTabs";

export default function UserDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({ active: [], available: [] });

  useEffect(() => {
    Promise.all([
      Axios.get(`/api/signup/${id}`),
      Axios.get(`/api/signup/${id}/available`),
    ])
      .then((all) => {
        setTasks((prev) => {
          return { ...prev, active: [...all[0].data] };
        });
        setTasks((prev) => {
          return { ...prev, available: [...all[1].data] };
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={"backgrounduser"}>
      <br />
      <Typography variant="h2" component="h2" style={{paddingLeft: 40}}>
        Your <b>tasks</b>
      </Typography>

      <br />
      <TaskTabs tasks={tasks} />

    </div>
  );
}
