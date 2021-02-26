import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#443F39",
  },
});

export default function MobileFooter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        onClick={() => history.push("/")}
        className="text-light"
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        onClick={() => history.push("/profile")}
        className="text-white"
        icon={<AccountCircle />}
      />
      <BottomNavigationAction
        label="Datasets"
        onClick={() => history.push("/dataset")}
        className="text-white"
        icon={<ListIcon />}
      />
    </BottomNavigation>
  );
}
