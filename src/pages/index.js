import React from 'react';
import Suggestion from '../components/Suggestion';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const brStyle = {
  lineHeight: "300%",
}

const headingStyles = {
  fontSize: "150%",
  marginTop: 0,
  marginBottom: "64px",
}

const linkStyle = {
  color: "#004D54",
  fontWeight: "bold",
}

const docLink = {
  text: "I have some new words to suggest",
  url: "https://github.com/pikulet/ghost-wp/",
  color: "#8954A8",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ghost Wordpack</title>
      <h1 style={headingStyles}>
        Looking for a game of Ghost? Try....
        <br style={brStyle}/>
        <Suggestion/>
      </h1>
      <a style={linkStyle} href={`${docLink.url}`}>
        {docLink.text}
      </a>
    </main>
  )
}

export default IndexPage
