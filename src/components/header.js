'use strict'

const React = require('react')
const Radium = require('radium')
const {Container, Row, Column} = require('radium-bootstrap-grid')

const {monoFont, sansSerifFont} = require('./styles')

const Title = Radium(({value}) => {
  const style = {
    textTransform: 'uppercase',
    fontFamily: sansSerifFont
  }

  return (
    <div style={style}>
      {value}
    </div>
  )
})

const Version = Radium(({value}) => {
  const style = {
    fontFamily: monoFont,
    fontWeight: 300
  }

  return (
    <div style={style}>
      {value}
    </div>
  )
})

const Header = ({name, version}) => {
  const style = {
    boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)',
    height: '49px',
    width: '100%',
    minWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
    position: 'fixed',
    zIndex: 99,
    background: '#FFFFFF',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px'
  }

  return (
    <div style={style}>
      <Container>
        <Row>
          <Column style={{textAlign: 'right'}}>
            <Title value={name} />
            <Version value={version} />
          </Column>
        </Row>
      </Container>
    </div>
  )
}

module.exports = Radium(Header)
