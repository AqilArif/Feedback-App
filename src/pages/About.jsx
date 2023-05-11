import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>

            <p>
                This is a Reat app to leave feedback for a product or service 
            </p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About