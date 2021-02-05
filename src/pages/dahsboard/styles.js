import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px;
  > h1 {
    margin-bottom: 32px;
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 90%;
  padding: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  justify-content: space-evenly;
  color: #191920;
  border: solid 1px #999;
  margin: 8px 0;
  padding: 8px;
  background-color: #ffffff;
  > img {
    width: 30px;
    height: 30px;
    margin: 0 16px;
  }
`;
export const RigthSideContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > svg {
    margin: 0 8px;
  }
`;
