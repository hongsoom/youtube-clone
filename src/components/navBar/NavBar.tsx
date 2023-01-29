import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import WaitModal from './WaitModal';
import logo from '../../assets/logo.png';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { HiOutlineSearch } from 'react-icons/hi';
import { TbVideoPlus } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';

const SearchNav = () => {
    const { keyword } = useParams();

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [img, setImg] = useState<string>("");

    const hash = localStorage.getItem("hash")

    const onClickButton = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/videos/${searchInput}`);
    };

    useEffect(() => {
        setSearchInput(keyword || '');
    }, [keyword]);

    useEffect(() => {
        if (hash) {
            const accessToken = hash.split("=")[1].split("&")[0];
            axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, {
                headers: {
                    authorization: `token ${accessToken}`,
                    accept: 'application/json'
                }
            })
                .then(res => {
                    setImg(res.data.picture);
                }).catch(e => console.log('oAuth token expired'));
        }
    }, [])

    return (
        <NavWrap>
            <LogoWrap>
                <Category />
                <Logo src={logo} alt='youtubeLogo' onClick={() => navigate('/')} />
            </LogoWrap>
            <SearchWrap>
                <SearchBar
                    placeholder='검색'
                    type='text'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
                <SearchBtn onClick={handleSearchSubmit} />
            </SearchWrap>
            <ProfileWrap>
                {isOpen && (<WaitModal onClickButton={onClickButton} />)}
                <Video onClick={onClickButton} />
                <Notification onClick={onClickButton} />
                {hash ?
                    <Profile src={img} alt="profile" />
                    : <BaseProfile />}
            </ProfileWrap>
        </NavWrap>
    );
};

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
`

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 1;
    flex-basis: 150px;
`

const Category = styled(HiOutlineBars3)`
    font-size : 24px;
`

const Logo = styled.img`
    width: 100px;
    height: 24px;
    padding : 10px;
    cursor: pointer;
`

const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

const SearchBar = styled.input`
    width: 500px;
    height: 34px;
    border-radius: 22px;
    padding: 0 20px;
    background-color: rgba(211, 211, 211, 0.3);
    color: rgb(44, 44, 44);
    border: none;
    outline: none;
    font-size: 13px;
    transition: all 0.3s ease-in-out;

    @media all and (max-width: 1000px) {
        width: calc(100% - 20%);
        box-sizing: border-box;
        padding: 0 0 0 20px;
    }
`

const SearchBtn = styled(HiOutlineSearch)`
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 25px;

    &:hover {
        color: #ff0000;
        transform: scale(1.3);
    }
`

const ProfileWrap = styled.div`
    display : flex;
    justify-content: space-between;
    width: 120px;
    height: 24px;
    padding : 10px;
    cursor: pointer;

    @media all and (max-width: 500px) {
        display : none;
    }
`

const Video = styled(TbVideoPlus)`
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`

const Notification = styled(IoMdNotificationsOutline)`
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`

const Profile = styled.img`
    width: 25px;
    cursor: pointer;
    border-radius : 15px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`

const BaseProfile = styled(VscAccount)`
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`

export default SearchNav;