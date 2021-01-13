import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.p`
    display: inline;
    color: #00BDCF;
    font-size: 250%;
`;

function Suggestion() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/ghost-wp.herokuapp.com")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setWords(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> {error.message} asdfgh my brain isn't working rn </div>;
    } else if (!isLoaded) {
        return <div> hold on i'm thinking </div>
    } else {
        return (
            <div>
            <Content> {words.town} </Content> 
            and 
            <Content> {words.fool} </Content>
            </div>
        );
    }
}

export default Suggestion;
