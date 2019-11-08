import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <Card 
        title="Headline for kort" 
        text="Flere sektioner"
      />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
