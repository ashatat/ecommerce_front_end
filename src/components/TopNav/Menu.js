import styled from "styled-components";

const MenuWrapper = styled.ul`
  list-style: none;
  padding: 0;
  color: #999;
  position: absolute;
  height: 0;
  margin: 0;
  opacity: 0;
`;

const ListItem = styled.li`
  &:hover {
    color: #fff;
    background-color: #999;
    cursor: pointer;
  }
`;

export default function Menu({ items }) {
  return (
    <MenuWrapper>
      {items.map((curr) => (
        <ListItem>{curr}</ListItem>
      ))}
    </MenuWrapper>
  );
}
