import React, { useState } from "react";
import { Sidenav, Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import "./sideNav.css";

export default () => {
  return (
    <div>
      <Sidenav activeKey="1">
        <div className="body">
          <Sidenav.Body>
            <Nav>
              <Link to="/">
                <Nav.Item eventKey="1" icon={<Icon size="3x" icon="home" />}>
                  {expand === true && "Home"}
                </Nav.Item>
              </Link>
              <Link to="/about">
                <Nav.Item eventKey="2" icon={<Icon icon="info" />}>
                  {expand === true && "About"}
                </Nav.Item>
              </Link>
              <Link to="/users">
                <Nav.Item eventKey="3" icon={<Icon icon="user" />}>
                  {expand === true && "User"}
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </div>
      </Sidenav>
    </div>
  );
};
