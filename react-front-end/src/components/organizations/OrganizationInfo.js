import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import FormModal from "../helperComponents/FormModal";
import ApplicationForm from "./ApplicationForm";
import UserContext from "../../contexts/UserContext";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import makeModalButton from "../helperComponents/madeModalButton";
import {makeStyles} from '@material-ui/core';
import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@material-ui/core";
import {
  PhoneSharp,
  MailOutlineSharp,
  LocationOnSharp,
  LanguageSharp,
} from "@material-ui/icons/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoStyles from "../../styles/InfoStyles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "#fff",
    textAlign: "left",
    padding: 25,
    backgroundColor: "#B6C7C3",
    boxShadow: "none",
    boxSizing: "border-box",
    borderRadius: "14px",
    fontSize: 18,
    textTransform: "capitalize",
  },
}));



export default function OrganizationInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = InfoStyles();
  const buttonClasses = useStyles();
  const [organization, setOrganization] = useState({
    info: {
      name: null,
      description: null,
      primary_phone: null,
      primary_email: null,
      location: null,
      image_url: null,
      website: null,
      application_config: null,
    },
    pending: 0,
  });

  useEffect(() => {
    axios
      .get(`/api/organizations/${id}`)
      .then((orgs) =>
        setOrganization((prev) => {
          return {
            info: orgs.data.info[0] || { ...prev.info },
            pending: orgs.data.pending || 0,
          };
        })
      )
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={classes.root2}>
      <Link to={`/users/${userState.id}`}>
        <IconButton className={classes.backButton}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Link>
      <img src={organization.info.image_url} className={classes.bkgImage}></img>
      <Card className={classes.InfoCard2}>
        <CardContent className={classes.CardContent}>
          <section>
            <Typography
              className={classes.cardName}
              color="primary"
              variant="h1"
              component="h2"
            >
              {organization.info.name}
            </Typography>
            <Typography className={classes.cardSubtitle} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" component="p">
              {organization.info.description}
            </Typography>

            <Divider style={{ margin: "2vh 0" }} />

            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <PhoneSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_phone}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.location}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <MailOutlineSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_email}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LanguageSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.website}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </section>
          
            <FormModal
              data={organization.info}
              FormComponent={ApplicationForm}
              details={{
                task: "Apply to volunteer",
                description:
                  "Fill in all the fields and submit your application, and the organization will respond as soon as they're able",
              }}
              ModalButton={onClick => makeModalButton('Submit Application', <AssignmentIndIcon/>, buttonClasses.buttons, onClick )}
            >
              Submit application
            </FormModal>
        </CardContent>
      </Card>
    </div>
  );
}
