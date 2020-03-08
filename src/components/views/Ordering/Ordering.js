import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: '#222f3e',
    borderRadius: 1,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    marginTop: 50,
    border: '2px solid #222f3e',
  },
  addButton: {
    backgroundColor: '#222f3e',
    color: '#fff',
    transition: 'ease 0,5s',
    "&:hover": {
      backgroundColor: '#222f3e',
      opacity: 0.9,
    }
  }
}));

export default function Ordering() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Table 1" {...a11yProps(0)} />
          <Tab label="Table 2" {...a11yProps(1)} />
          <Tab label="Table 3" {...a11yProps(2)} />
          <Tab label="All orders" {...a11yProps()} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Button
        variant="contained"
        className={classes.addButton}
        startIcon={<Icon>add_circle</Icon>}
      >
        Add new Order
      </Button>
        <List component="nav" aria-label="orders">
        <ListItem button>
          <ListItemText primary="First order from table 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 1" />
        </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Button
        variant="contained"
        className={classes.addButton}
        startIcon={<Icon>add_circle</Icon>}
      >
        Add new Order
      </Button>
      <List component="nav" aria-label="orders">
        <ListItem button>
          <ListItemText primary="First order from table 2" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 2" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 2" />
        </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Button
        variant="contained"
        className={classes.addButton}
        startIcon={<Icon>add_circle</Icon>}
      >
        Add new Order
      </Button>
      <List component="nav" aria-label="orders">
        <ListItem button>
          <ListItemText primary="First order from table 3" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 3" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 3" />
        </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <List component="nav" aria-label="orders">
        <ListItem button>
          <ListItemText primary="First order from table 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="First order from table 2" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 2" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="First order from table 3" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Second order from table 3" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Third order from table 3" />
        </ListItem>
        </List>
      </TabPanel>
    </div>
  );
}
