import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const drawerWidth = 240;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
