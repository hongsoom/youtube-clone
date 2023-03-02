import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WaitModal from './WaitModal';
import { TbVideoPlus } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';

const Profile = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [img, setImg] = useState<string>("");

    const hash = sessionStorage.getItem("hash");

    const onClickButton = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

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
    }, [hash])

    return (
        <ProfileWrap>
            {isOpen && (<WaitModal onClickButton={onClickButton} />)}
            <Video onClick={onClickButton} />
            <Notification onClick={onClickButton} />
            {hash ?
                <ProfileImg src={img} alt="profile" />
                : <BaseProfile />}
        </ProfileWrap>
    );
};

export default Profile;


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

const ProfileImg = styled.img`
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