import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { HiOutlineBars3 } from 'react-icons/hi2';

const Logo = ({ setOpen, open }: any) => {
  const navigate = useNavigate();

  return (
    <LogoWrap>
      <Category aria-label='카테고리버튼' onClick={() => setOpen(!open)} />
      <LogoImg src={logo} alt='youtubeLogo' onClick={() => navigate('/')} />
    </LogoWrap>
  );
};

export default Logo;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-basis: 150px;
`;

const Category = styled(HiOutlineBars3)`
  font-size: 24px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 24px;
  padding: 10px;
  cursor: pointer;
`;
