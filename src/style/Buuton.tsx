import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 150px;
  height: 80px;
  border: solid #065fd4;
  border-width: 1px;
  background: #fff;
  color: #065fd4;
  cursor: pointer;
`;

export const Profile = styled(VscAccount)`
  font-size: 25px;
`