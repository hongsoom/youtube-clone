import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';

const Search = () => {

    const { keyword } = useParams();

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/videos/${searchInput}`);
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(e);
        }
    };

    useEffect(() => {
        setSearchInput(keyword || '');
    }, [keyword]);

    return (
        <SearchWrap>
            <SearchBar
                placeholder='검색'
                type='text'
                value={searchInput}
                ref={inputRef}
                onChange={onChange}
                onKeyPress={onKeyPress}
                aria-label='검색어창'
            />
            <SearchBtn onClick={handleSearch} aria-label='검색버튼' />
        </SearchWrap>
    );
};

export default Search;


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