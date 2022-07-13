import React from "react"
import styled from "styled-components"

// css
const MazeHeader = () => {
  return (
    <Header>
      <Container>
        <Head>
          Web3<Span>Connector</Span>
        </Head>
      </Container>
    </Header>
  )
}

const Header = styled.header`
  height: 90px;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3px;
`

const Container = styled.div`
  padding: 10px;
`

const Head = styled.h1`
  font-size: 48px;
  color: #fff;
`

const Span = styled.span`
  color: #f8f8f8;
`

export default MazeHeader
