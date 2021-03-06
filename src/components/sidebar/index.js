import React from "react";
import Tree from "./tree";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { ExternalLink } from "react-feather";
import "../styles.css";
import config from "../../../config";
import Divider from "./Divider";

const forcedNavOrder = config.sidebar.forcedNavOrder;

const ListItemStyle = (props, level) => css`
  list-style: none;
  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${level === 0 ? 700 : 400};
    padding: 0.45rem 0 0.45rem ${2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(116, 76, 188) !important;
    }

    ${props.active &&
      `
    color: #rgb(55, 122, 115);
    border-color: rgb(230,236,241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #fff;
  `} // external link icon
  svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
})`
  ${ListItemStyle}
`;

const Sidebar = styled("aside")`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;

  /* Safari 4-5, Chrome 1-9 */
  background-color: rgb(55, 122, 115);
  /* background: linear-gradient(#2c6975, #68b2a0); */
  /* background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#2c6975),
    to(#68b2a0)
  ); */
  /* Safari 5.1, Chrome 10+ */
  /* background: -webkit-linear-gradient(top, #2c6975, #68b2a0); */
  background-color: rgb(55, 122, 115);

  /* Firefox 3.6+ */
  /* background: -moz-linear-gradient(top, #2c6975, #68b2a0); */
  background-color: rgb(55, 122, 115);

  /* IE 10 */
  /* background: -ms-linear-gradient(top, #2c6975, #68b2a0); */
  background-color: rgb(55, 122, 115);

  /* Opera 11.10+ */
  /* background: -o-linear-gradient(top, #2c6975, #68b2a0); */
  background-color: rgb(55, 122, 115);

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    background-color: rgb(55, 122, 115);
    background: rgb(55, 122, 115);
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <ul className={"sideBarUL"}>
            <Tree edges={allMdx.edges} />
            <Divider />
            {config.sidebar.links.map((link, key) => {
              if (link.link !== "" && link.text !== "") {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <ExternalLink size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
