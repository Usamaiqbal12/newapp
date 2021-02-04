import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated } from "../services/Api";
import { useStateValue } from "../StateProvider";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import EditIcon from "@material-ui/icons/Edit";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
const drawerWidth = window.screen.width < 640 ? 190 : 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: window.screen.width < 600 ? 15 : 24,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const [, dispatch] = useStateValue();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = (e) => {
    setAnchorEl(null);
    console.log(e);
    handleMobileMenuClose();
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setAuth(true);
    }
  }, [auth]);
  const logout = (e) => {
    setAuth(false);
    localStorage.removeItem("jwt");
    dispatch({
      type: "ADDDATASET",
      data: [],
    });
    history.push("/signin");
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" style={{ color: "inherit", textDecoration: "none" }}>
        <MenuItem name="pro" onClick={handleMenuClose}>
          Profile
        </MenuItem>{" "}
      </Link>
      <Link
        to="/editprofile"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        {" "}
        <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>{" "}
      </Link>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        {!isAuthenticated() ? (
          <p style={{ margin: 0 }} onClick={() => history.push("/signin")}>
            Login
          </p>
        ) : (
          <p style={{ margin: 0 }} color="inherit" onClick={logout}>
            logout
          </p>
        )}
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p style={{ margin: 0 }}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p style={{ margin: 0 }}>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {isAuthenticated() && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              QOTRT
            </Typography>
          </Link>
          <div
            style={{
              position: "absolute",
              right: 0,
              marginRight: window.screen.width < 600 ? "0px" : "24px",
            }}
          >
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {!isAuthenticated() ? (
                <Button color="inherit" onClick={() => history.push("/signin")}>
                  Login
                </Button>
              ) : (
                <Button color="inherit" onClick={logout}>
                  logout
                </Button>
              )}
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {isAuthenticated() && (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {isAuthenticated() && (
        <Drawer
          variant={window.screen.width < 800 ? "temporary" : "permanent"}
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div>
            <Link to="/" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/profile" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>

            <Link to="/dataset" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Datasets" />
              </ListItem>
            </Link>
            <Link to="/editprofile" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="#" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Game One" />
              </ListItem>
            </Link>
            <Link to="#" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Game Two" />
              </ListItem>
            </Link>
            <Link to="#" style={{ color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Game three" />
              </ListItem>
            </Link>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default NavBar;
