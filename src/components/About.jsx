import {Outlet} from 'react-router-dom'
function About() {

    return (
      <div>
        <h1>This is the About page</h1>
        <Outlet/>
      </div>
    )
  }
  
  export default About