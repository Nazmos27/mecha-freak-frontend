import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from "../../redux/hooks";
import { totalCartItems } from "../../redux/features/cart/cartSlice";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
  const cartItems = useAppSelector(totalCartItems);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Check if the screen width is mobile-sized
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // 600px is the breakpoint for mobile
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="navbar bg-blue-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-blue-100 rounded-box mt-3 w-52 p-2 shadow z-20"
    //       >
    //         <li>
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //             to="/"
    //           >
    //             Home
    //           </NavLink>
    //         </li>

    //         <li>
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //             to="/products"
    //           >
    //             Products
    //           </NavLink>
    //         </li>

    //         <li>
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //             to="/about"
    //           >
    //             About us
    //           </NavLink>
    //         </li>

    //         <li>
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //             to="/contact"
    //           >
    //             Contact us
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link
    //       className="text-2xl font-bold flex items-center justify-center"
    //       to="/"
    //     >
    //       <img src="aafdaf" className="size-14" alt="logo" />
    //       Mecha<span className="text-blue-500 font-extrabold">F</span>reak
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //           to="/"
    //         >
    //           Home
    //         </NavLink>
    //       </li>

    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //           to="/products"
    //         >
    //           Products
    //         </NavLink>
    //       </li>

    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //           to="/about"
    //         >
    //           About us
    //         </NavLink>
    //       </li>

    //       <li>
    //         <NavLink
    //           className={({ isActive }) => (isActive ? "activeRoute" : "")}
    //           to="/contact"
    //         >
    //           Contact us
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <div className="mr-4">
    //       <Link to="/cart" className="btn btn-ghost relative">
    //         <FaCartShopping className="text-xl text-blue-500" />
    //         <span className="badge absolute top-0 -right-1 bg-red-500 text-white">
    //           {cartItems}
    //         </span>
    //       </Link>
    //     </div>
    //     <Link to="/dashboard" className="btn btn-sm myPrimaryBtn">
    //       Dashboard
    //     </Link>
    //   </div>
    // </div>
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="../../../public/keyboard_4043232.png"
            alt=""
            height={50}
            width={50}
            style={{ display: isMobile ? "none" : "block" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MECHA FREAK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeRoute" : "")}
                  to="/"
                >
                  <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeRoute" : "")}
                  to="/products"
                >
                  <Typography textAlign="center">Products</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeRoute" : "")}
                  to="/about"
                >
                  <Typography textAlign="center">About Us</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeRoute" : "")}
                  to="/contact"
                >
                  <Typography textAlign="center">Contact Us</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeRoute" : "")}
                  to="/dashboard"
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </NavLink>
              </MenuItem>
              {/* {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>{page}</Typography>
              </MenuItem>
            ))} */}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MECHA FREAK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/"
              >
                <Typography textAlign="center">Home</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/products"
              >
                <Typography textAlign="center">Products</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/about"
              >
                <Typography textAlign="center">About Us</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/contact"
              >
                <Typography textAlign="center">Contact Us</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeRoute" : "")}
                to="/dashboard"
              >
                <Typography textAlign="center">Dashboard</Typography>
              </NavLink>
            </MenuItem>
            {/* {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              variant="contained"
              sx={{ my: 2, mx: 1, color: "white", display: "block" }}
            >
              <Link to={page.toLowerCase()}>{page}</Link>
            </Button>
          ))} */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cartItems} color="error">
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
