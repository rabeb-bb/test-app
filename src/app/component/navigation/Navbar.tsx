import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAuth } from "../../../config/Auth";
const MyAppBar = styled(AppBar)({
  color: "#052C4E",
  backgroundColor: "#fff",
  boxShadow: "none",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [signedin, setSignedin] = React.useState(false);

  React.useEffect(() => {
    if (user?.email) {
      setSignedin(true);
    }
  }, [user]);

  //mui
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = async () => {
    await signOut();
    setSignedin(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            {/* <MailIcon /> */}
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0343 20.4343H6.3429V11.3943C6.3429 7.06288 9.85147 3.54288 14.1943 3.54288C18.5258 3.54288 22.0458 7.05145 22.0458 11.3943V20.4343H22.0343Z"
                stroke="#052C4E"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.82861 20.4343H24.5486"
                stroke="#052C4E"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.4914 22.7086C16.4914 23.9772 15.4628 25.0172 14.1828 25.0172C12.9028 25.0172 11.8743 23.9886 11.8743 22.7086"
                stroke="#052C4E"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <NotificationsIcon /> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27.5" r="27.5" fill="#15F4EE" />
              <path
                d="M41 27.4486C40.9371 29.5331 40.6808 31.4436 40.2267 33.1799C39.7771 34.9163 39.1297 36.4786 38.289 37.8668C37.2594 39.5719 36.005 40.853 34.5303 41.71C33.0557 42.567 31.3562 43 29.432 43C27.3458 43 25.4216 42.5492 23.6682 41.652C21.9103 40.7548 20.3322 39.4068 18.9339 37.6124C17.6211 35.9429 16.641 34.1619 15.9846 32.2649C15.3282 30.3678 15 28.3458 15 26.1943C15 24.1366 15.2877 22.2216 15.8587 20.454C16.4297 18.6864 17.3154 17.084 18.5113 15.6422C19.7837 14.1022 21.2494 12.9417 22.9039 12.165C24.5584 11.3883 26.4017 11 28.4384 11C29.432 11 30.3896 11.1339 31.3202 11.3973C32.2509 11.6606 33.1321 12.0668 33.9729 12.6069C34.8001 13.1381 35.5374 13.7541 36.1893 14.4593C36.8368 15.1646 37.3943 15.9591 37.8484 16.8429L36.549 17.1732C36.1309 16.7313 35.6184 16.401 35.0204 16.1868C34.4224 15.9725 33.7166 15.8654 32.9028 15.8654C31.2079 15.8654 29.6433 16.3296 28.1956 17.2581C26.7524 18.1865 25.4441 19.5792 24.2706 21.436C23.2411 23.0653 22.4678 24.7392 21.9507 26.4487C21.4337 28.1628 21.1774 29.9125 21.1774 31.7069C21.1774 33.0103 21.3393 34.2066 21.663 35.3002C21.9867 36.3938 22.4812 37.3713 23.1421 38.2283C23.8795 39.188 24.7517 39.9111 25.7588 40.3888C26.7659 40.8708 27.9033 41.1074 29.1757 41.1074C30.1828 41.1074 31.0865 40.8441 31.8957 40.3218C32.705 39.7996 33.4199 39.0139 34.0448 37.9694C34.5393 37.1258 34.935 36.2152 35.2272 35.2377C35.5195 34.2601 35.6993 33.2157 35.7622 32.1042L27.0086 32.8809L26.4736 30.1045L34.6517 29.2832L27.683 27.5914L27.8943 24.5338L41 27.4486ZM20.2378 23.6188C20.2378 23.1635 20.1254 22.8242 19.9051 22.5966C19.6803 22.3689 19.3431 22.2574 18.8845 22.2574C18.4259 22.2574 18.0842 22.3689 17.8549 22.5966C17.6256 22.8242 17.5132 23.1635 17.5132 23.6188C17.5132 23.9714 17.6481 24.2883 17.9224 24.5651C18.1966 24.8418 18.5158 24.9802 18.8845 24.9802C19.2532 24.9802 19.5724 24.8418 19.8376 24.5651C20.1074 24.2883 20.2378 23.9714 20.2378 23.6188ZM22.4363 19.106C22.4363 18.6373 22.2654 18.2311 21.9192 17.883C21.5776 17.5348 21.1639 17.3607 20.6784 17.3607C20.1928 17.3607 19.7837 17.5348 19.4465 17.883C19.1093 18.2311 18.9429 18.6373 18.9429 19.106C18.9429 19.5881 19.1093 19.9987 19.4465 20.3469C19.7837 20.6951 20.1928 20.8692 20.6784 20.8692C21.1639 20.8692 21.5776 20.6951 21.9192 20.3469C22.2609 20.0032 22.4363 19.5881 22.4363 19.106ZM25.9476 16.2627C25.9476 15.8208 25.8352 15.486 25.6059 15.2583C25.3766 15.0307 25.0349 14.9191 24.5763 14.9191C24.1312 14.9191 23.7941 15.0307 23.5648 15.2583C23.3355 15.486 23.2231 15.8208 23.2231 16.2627C23.2231 16.6153 23.3579 16.9322 23.6232 17.209C23.8885 17.4857 24.2077 17.6241 24.5763 17.6241C25.0349 17.6241 25.3766 17.5125 25.6059 17.2848C25.8352 17.0617 25.9476 16.718 25.9476 16.2627Z"
                fill="white"
              />
            </svg>
          </IconButton>
          <h2 className="greeting">
            {user?.email ? `Hi ${user.email}` : "Hi there!"}
            {console.log(user)}
          </h2>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton>
              <svg
                width="23"
                height="24"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6907 21.6547C17.2143 21.6547 20.8814 17.8518 20.8814 13.1607C20.8814 8.46957 17.2143 4.66666 12.6907 4.66666C8.16709 4.66666 4.5 8.46957 4.5 13.1607C4.5 17.8518 8.16709 21.6547 12.6907 21.6547Z"
                  stroke="#052C4E"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4867 19.1711L23.2767 24.1384"
                  stroke="#052C4E"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>

            {/* <SearchIcon sx={{ padding: "0" }} /> */}
          </Search>

          {signedin ? (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={2}
                  variant="dot"
                  color="error"
                  sx={{ margin: "0" }}
                >
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0343 20.4343H6.3429V11.3943C6.3429 7.06288 9.85147 3.54288 14.1943 3.54288C18.5258 3.54288 22.0458 7.05145 22.0458 11.3943V20.4343H22.0343Z"
                      stroke="#052C4E"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.82861 20.4343H24.5486"
                      stroke="#052C4E"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4914 22.7086C16.4914 23.9772 15.4628 25.0172 14.1828 25.0172C12.9028 25.0172 11.8743 23.9886 11.8743 22.7086"
                      stroke="#052C4E"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* <NotificationsIcon /> */}
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          ) : (
            <button className="login-btn">login</button>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </MyAppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
