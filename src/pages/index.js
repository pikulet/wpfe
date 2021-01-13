import React from 'react';
import Suggestion from '../components/Suggestion';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 650,
}

const linkStyle = {
  color: "#004D54",
  fontWeight: "bold",
}

const docLink = {
  text: "Suggest new words",
  url: "https://github.com/pikulet/ghost-wp/",
  color: "#8954A8",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ghost Wordpack</title>
      <h1 style={headingStyles}>
        Looking for a game of Ghost? I suggest...
        <br />
        <Suggestion/>
      </h1>
      <a style={linkStyle} href={`${docLink.url}`}>
        {docLink.text}
      </a>
    </main>
  )
}

export default IndexPage