import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LuggageIcon from "@mui/icons-material/Luggage";
import LoginIcon from "@mui/icons-material/Login";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";

const Header = () => {
  const renderTooltip = (name) => <Tooltip id="icon-tooltip">{name}</Tooltip>;

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="header-nav-bar">
            <div>
              <p className="Title-connect">Connect Bus</p>
            </div>
            <div className="nav-div-class">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Home")}
                  >
                    <Link className="nav-link" to="/Home">
                      <HomeIcon />
                    </Link>
                  </OverlayTrigger>
                </li>
                <li className="nav-item active">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Directions")}
                  >
                    <Link className="nav-link" to="/Holy">
                      <DirectionsBusIcon />
                    </Link>
                  </OverlayTrigger>
                </li>
                <li className="nav-item active">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Departures")}
                  >
                    <Link className="nav-link" to="/buslist">
                      <DepartureBoardIcon />
                    </Link>
                  </OverlayTrigger>
                </li>
                <li className="nav-item active">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip("Luggage")}
                  >
                    <Link className="nav-link" to="/Signature">
                      <LuggageIcon />
                    </Link>
                  </OverlayTrigger>
                </li>
                <DropdownButton
                  align="end"
                  title={<AccountCircleOutlinedIcon />}
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/">
                      <HistoryTwoToneIcon /> History
                    </Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/Login">
                      <LoginIcon /> Login/Signin
                    </Link>
                  </Dropdown.Item> */}
                  <Dropdown.Item eventKey="4">
                    <Link className="Login-page" to="/Login">
                      <LoginIcon /> Login/Signin
                    </Link>
                  </Dropdown.Item>
                </DropdownButton>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
