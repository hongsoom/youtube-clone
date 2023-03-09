import React, { memo } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Profile from './Profile';

const NavBar = ({ setOpen, open }: any) => {
  return (
    <>
      <NavWrap>
        <Logo setOpen={setOpen} open={open} />
        <Search />
        <Profile />
      </NavWrap>
    </>
  );
};

export default memo(NavBar);

const NavWrap = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;

  @media all and (max-width: 500px) {
    margin: 0 20px;
  }
`;
