import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row, Col, Button } from 'react-bootstrap'
import { Link } from "gatsby"



const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <Row>
      <Col style={{textAlign:`center`, marginTop:`9rem`}}>
        <h1>39 Cents</h1>
        <h6>STAND UP COMEDIAN</h6>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>Comedian 39 Cents is from Vidalia, LA., where the population is 15 people, including pets.
          On December 5th, 1992, a dark, gloomy, windy, freezing cold day, one of the hottest
          comedians, 39 Cents was born. 39 gained his notoriety using consistent content. Creating
          many viral videos over the internet for 7+ years and stand-up comedy for 2 years.
        </p>
        <p>
          Now he's hitting the big stage to heal the world with the medicine of laughter. Come
          join the live show and get your dose of laughter medicine. Get your tickets now, so
          you don't miss out!
        </p>
        <Link to='/shows'>
          <Button variant='outline-secondary'>Need a Ticket?</Button>
        </Link>
      </Col>
    </Row>
    <StaticImage
      src="../images/comedy-v1.2.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Comedian 39 Cents"
      style={{ marginBottom: `0` }}
    />
  </Layout>
)

export default IndexPage
