import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

//react bootstrap imports
import { 
  Card, 
  Button, 
  Row, 
  Col,
  Container
} from "react-bootstrap"


const Shows = () => (
  <Layout>
    <Seo title="shows" />
      <h1>Tour Info</h1>
      <Container>
      <Row>
        <Col sm={12} md={4} lg={true} >
          <Card>
            <Card.Body>
              <Card.Title>
                Madison Square Event Center<br />
                2015 Lee St.<br />
                Alexandria, LA., 71301
              </Card.Title>
              <Card.Text>
                Sat, October 2, 2021<br />
                Doors open @7pm
              </Card.Text>
              <a href='https://www.eventbrite.com/e/the-39-cents-show-highway-39-tour-alexandria-la-tickets-167102063771'>
                <Button variant='primary'>Ticket Purchase</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
          <Col sm={12} md={4} lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Ruffins The Showroom<br />
                  14502 Plank Rd.<br />
                  Baton Rouge, LA., 70714
                </Card.Title>
                <Card.Text>
                  Sun, October 3, 2021<br />
                  Doors open @7pm
                </Card.Text>
                <a href='https://www.eventbrite.com/e/the-39-cents-show-highway-39-tour-baton-rouge-tickets-167102727757'>
                  <Button variant='primary'>Ticket Purchase</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={true}> 
            <Card>
              <Card.Body>
                <Card.Title>
                  Artisan Distillery Craft Bar<br />
                  402 Austin St.<br />
                  San Antonio, TX., 78215
                </Card.Title>
                <Card.Text>
                  Sat, October 9, 2021<br />
                  Doors open @8pm
                </Card.Text>
                <a href='https://www.eventbrite.com/e/comedy-nights-the-artisan-39-cents-tickets-169159926895'>
                  <Button variant='primary'>Ticket Purchase</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      
      <Row style={{marginTop: `1rem`}}>
        <Col sm={12} md={4} lg={true}>
          <Card>
            <Card.Body>
              <Card.Title>
                Creek and The Cave<br />
                611 E. 7th St.<br />
                Austin, TX., 78701
              </Card.Title>
              <Card.Text>
                Sun, October 10, 2021<br />
                Doors open @8:30pm
              </Card.Text>
              <a href='https://www.tixr.com/groups/creekandcave/events/39cents-28343'>
                <Button variant='primary'>Ticket Purchase</Button>
              </a>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Hyena's Dallas<br />
                  5321 East Mockingbird<br />
                  Dallas, TX., 75206
                </Card.Title>
                <Card.Text>
                  Sun, October 17, 2021<br />
                  Doors open @7pm
                </Card.Text>
                <a href='https://www.prekindle.com/event/89432-39-cents-highway-39-comedy-tour-dallas'>
                  <Button variant='primary'>Ticket Purchase</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={true}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Wurst Biergarten Venue and Food Park<br />
                  537 Jefferson St.<br />
                  Lafayette, LA., 70501
                </Card.Title>
                <Card.Text>
                  Sat, October 23, 2021<br />
                  Doors open @6pm
                </Card.Text>
                <a href='https://www.eventbrite.com/e/the-39-cents-show-highway-39-tour-lafayette-la-tickets-167106158017'>
                  <Button variant='primary'>Ticket Purchase</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
)

export default Shows
