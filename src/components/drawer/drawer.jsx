import React from 'react'
import Box from '@mui/material/Box';
import skyyicon from '../../assets/image/skyyimage.png'
import styles from './drawer.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { userLogout } from '../../actions/auth/authAction';
import { useDispatch } from 'react-redux';


const drawerWidth = 240;

function AppDrawer(props) {

    const { setSelectMenu, selectMenu } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userdata");
        dispatch(userLogout(navigate));
    }

    const handleNavigate = (route) => {
        navigate(route)
    }
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar className={styles.mainDiv} >
                    <Typography variant="h6" noWrap component="div" className={styles.headText}>
                        <span className={styles.spancolor}> HOTEL </span><span className={styles.spansize}>Management Data</span>
                    </Typography>
                    <Button onClick={handleLogout} style={{ position: "absolute", right: '16px', color: 'black' }} variant="Logout">{<LogoutIcon />}</Button>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar  /> */}
                <Box sx={{ height: '64px' }}>
                    <img src={skyyicon} alt="icon" className={styles.skyicon} />
                </Box>

                <Divider />
                <List>
                    {[{ text: "Dashboard", route: "/", icon: <DashboardIcon /> },
                    // { text: "Customer", route: "/customer", icon: <GroupsIcon /> },
                    { text: "Orders", route: "/order", icon: <ShoppingCartIcon /> },
                    { text: "Table", route: "/table", icon: <TableRestaurantIcon /> },
                    { text: "Menu", route: "/menu", icon: <RestaurantMenuIcon /> }

                    ].map(({ text, route, icon }) => (
                        <ListItem
                            className={styles.hoverclick}
                            onClick={() => {
                                setSelectMenu(text);
                                handleNavigate(route);
                            }}
                            key={text}
                            selected={selectMenu === text}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
        </div>
    )
}

export default AppDrawer
