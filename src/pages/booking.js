import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Booking = () => {
    return (
        
            <Layout>
                <Seo title="booking" />
                <h1 style={{
                    fontSize:`2rem`,
                    color:`#3e3e3e`,
                    textAlign:`center`,
                    marginTop:`4rem`
                    }}>lets add your city to the tour list</h1>
              <p style={{
                  fontSize:`1rem`,
                  textAlign: `center`,
                  letterSpacing:`3px`
                  }}>
              Give us a <a href='tel:832-605-0713' aria-label='Phone Number'><FontAwesomeIcon icon={faPhone} style={{margin:`2px`}} size='lg' /></a> to book a show. Or
               email <a href='mailto:39Bookings@gmail.com' aria-label='Email Address'><FontAwesomeIcon icon={faEnvelope} style={{margin:`2px`}} size='lg' /></a> us. 
              </p>
              <StaticImage
                src="../images/39cents-bookingv1.2.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Comedian 39 Cents"
                style={{ marginBottom: `0` }}
                />
            </Layout>
    )
}

export default Booking
