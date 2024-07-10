import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppDrawer from "../components/drawer/drawer";
import Customer from "../pages/customer/customer";
import Menu from "../pages/menu/menu";
import Billpage from "../pages/billpage/billpage";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Privateroute from "./privateroute";
import OrderDetails from "../pages/order";
import CustomizedTables from "../components/table/table";
import TableBook from "../pages/bookTable/tableBook";

function AppRouter() {
  const [selectMenu, setSelectMenu] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/bill" element={<Billpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route element={<Privateroute />}>
          <Route
            path="/"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppDrawer
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu === "" ? "Dashboard" : selectMenu}
                />
                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  <Home />
                </Box>
              </Box>
            }
          />
          <Route
            path="/customer"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppDrawer
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu === "" ? "Customer" : selectMenu}
                />
                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  <Customer />
                </Box>
              </Box>
            }
          />
          <Route
            path="/order"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppDrawer
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu === "" ? "Orders" : selectMenu}
                />
                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  <OrderDetails />
                </Box>
              </Box>
            }
          />
          <Route
            path="/table"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppDrawer
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu === "" ? "Table" : selectMenu}
                />

                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  {/* <CustomizedTables /> */}
                  <TableBook />
                </Box>
              </Box>
            }
          />
          <Route
            path="/menu"
            element={
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppDrawer
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu === "" ? "Menu" : selectMenu}
                />

                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  <Menu />
                </Box>
              </Box>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
