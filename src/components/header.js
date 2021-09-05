import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from '../components/header/header.module.scss'

//react bootstrap imports
import { Nav, Navbar, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar bg='light' expand='lg' className={styles.headerNavStyles}>
        <Container>
          <Navbar.Brand href='/'>39 cents</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='ml-auto'>
              <Link to='/'>home</Link>
              <Link to='/shows'>shows</Link>
              <Link to='/booking'>booking</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
