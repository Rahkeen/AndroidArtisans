import React from 'react'
import styled from 'styled-components'

const apps = [
  {
    text: "Buzz Kill",
    url: "https://play.google.com/store/apps/details?id=com.samruston.buzzkill",
    description: "Sam Ruston",
  },
  {
    text: "Unit Lab",
    url: "https://play.google.com/store/apps/details?id=com.samruston.converter",
    description: "Sam Ruston",
  },
  {
    text: "Press",
    url: "https://play.google.com/store/apps/details?id=me.saket.press",
    description: "Saket Narayan",
  },
  {
    text: "Hello Weather",
    url: "https://play.google.com/store/apps/details?id=com.helloweatherapp",
    description: "Dan Kim",
  },
  {
    text: "Pinnit",
    url: "https://play.google.com/store/apps/details?id=dev.sasikanth.pinnit",
    description: "Sasikanth Miriyampalli",
  },
  {
    text: "Walldo",
    url: "https://play.google.com/store/apps/details?id=com.enigmaticdevs.wallhaven",
    description: "Enigmatic Devs",
  },
  {
    text: "Wallpy",
    url: "https://play.google.com/store/apps/details?id=com.feresr.walpy",
    description: "Fernando Raviola",
  },
  {
    text: "Sleep as Android",
    url: "https://play.google.com/store/apps/details?id=com.urbandroid.sleep",
    description: "Urbandroid (Petr Nalevka)",
  },
  {
    text: "Circle of Fifths",
    url: "https://play.google.com/store/apps/details?id=com.joshliebe.circleoffifths",
    description: "Josh Liebestein",
  },
  {
    text: "Catch Up",
    url: "https://github.com/ZacSweers/CatchUp",
    description: "Zac Sweers",
  },
  {
    text: "Plaid",
    url: "https://play.google.com/store/apps/details?id=io.plaidapp",
    description: "Nick Butcher",
  },
  {
    text: "Tivi",
    url: "https://play.google.com/store/apps/details?id=app.tivi",
    description: "Chris Banes",
  },
]

const StyledContainer = styled.div`
    margin: 2rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled.h1`
    font-size: 3.5em;
    text-align: center;
    padding: 10px;
    border: 3px solid white;
    border-radius: 10px;
    width: 100%;
`

const StyledRow = styled.div`
    width: 100%;
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    color: white;
`

export default function Content() {
    return (
        <StyledContainer>
            <StyledHeader>Android Artisans</StyledHeader>
            {apps.map(app => (
                <App app={app} />
            ))}
        </StyledContainer>
    )
}

function App(props) {
    return (
        <StyledRow>
            <StyledLink href={props.app.url}>{props.app.text}</StyledLink>
            <p>{props.app.description}</p>
        </StyledRow>
    )
}
