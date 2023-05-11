import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

const AboutIconLink = () => {

  // Tip: If you are linking offsite (Means if you go to some other sides) then you use anchor tag <a href='/about' />
  
  // But any internal links (means inside your application) you should use <Link to='/about' /> 
  
  // Link can't refresh the page but anchor does
  
  return (
    <div className="about-link">
        <Link to={{
            pathname: "/about",
            search: '?sort=name', // query params (These params append with your route like /about?sort=name)
            hash: '#hello' // you can also append hash with your link
        }}>
            <FaQuestion size={30} />
        </Link>

        {/* <Link to="/about">
            <FaQuestion size={30} />
        </Link> */}
    </div>
  )
}

export default AboutIconLink