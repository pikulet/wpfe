import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.p`
    color: #00BDCF;
`;

function Suggestion() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("https://ghost-wp.herokuapp.com", {
            method: 'GET',
            headers: {
                "Content-Type"  : "application/json",
                "Access-Control-Allow-Origin"   : "emghost.netlify.app",
                "Origin"        : "emghost.netlify.app",
            }
        })
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
        return <Content> {error.message} asdfgh my brain isn't working rn </Content>;
    } else if (!isLoaded) {
        return <Content> hold on i'm thinking </Content>
    } else {
        return (
            <Content> {words.town} and {words.fool} </Content>
        );
    }
}

export default Suggestion;
