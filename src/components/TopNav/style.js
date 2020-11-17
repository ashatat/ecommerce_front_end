import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.66em 5em 0.41em; /* 8/12 fontsize element*/
  font-size: 0.75rem; /* 12/16 html fontsize/browserdefault */
  font-weight: 400;
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  &:first-child {
    padding-left: 0px;
  }
  &:last-child {
    border-right: none;
  }
  padding-right: 14px;
  padding-left: 14px;
  margin: 8px 0 5px;
  border-right: 1px solid #e7e7e7;
`;

export const Link = styled.a`
  color: #999;
  padding: 5px 0 5px 0;
  text-transform: uppercase;
  line-height: 17px;
  cursor: pointer;
  &:hover {
    text-decoration: ${(props) =>
      props.disableUnderline ? "none" : "underline"};
  }

  &:hover ~ ul {
    opacity: 1;
    height: auto;
    margin: 10px;
    transition: opacity 0.6s ease-in-out;
  }
`;
