import './Youtube.scss';
import React, { useRef, memo } from 'react';

const SearchHeader = memo(({onSearch}) => {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        }
        const onClick = () => {
            handleSearch();
        };
        const onKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch(); 
            }
        };
        return(
            <>
            <header className="YoutubeHeader">
            <p className = "subText">Let's enjoy Youtube contents!</p>
                <div className="logo">
                    <img className="img" src="./images/logo_youtube.png" alt="youtube logo"/>
                    <h3 className="title">Youtube</h3>
                </div>
                <input 
                    ref={inputRef} 
                    className="input" 
                    type="search" 
                    placeholder="Search..." 
                    onKeyPress={onKeyPress}/>
                <button className="button" type="submit" onClick={onClick}>
                    <img className="buttonImg" src="./images/search.png" alt="search"/>
                </button>
            </header>
            <h3 className = "subTitle"> Today's HOT25 VIDEOS</h3>
            </>
        )
    }
)
export default SearchHeader;