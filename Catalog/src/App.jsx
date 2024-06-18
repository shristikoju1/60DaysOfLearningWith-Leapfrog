import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import Title from './Components/Title/Title'
import Campaign from './Components/Campaigns/Campaign'
import About from './Components/About/About'
import Partners from './Components/Partners/Partners'
import News from './Components/News/News'
import Resources from './Components/Resources/Resources'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
      setSearchVisible(prev => !prev);
  };

  return (
    <div className={`App ${searchVisible ? 'fade-background' : ''}`}>
       <Navbar toggleSearchBar={toggleSearchBar} />
       <Hero searchVisible={searchVisible} toggleSearchBar={toggleSearchBar} />
     
      {/* <Title title = 'Campaigns' paragraph= 'We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.'/> */}
      <Campaign/>
      <About/>
      <Partners/>
      {/* <Title title='News' paragraph='We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.'/> */}
      <News/>
      {/* <Title title='Latest resources' paragraph='The latest resources includes Transparency Toolkit, Evidence, Best Practices'/> */}
      <Resources/>
      {/* <Title title = 'Contact Us' paragraph= 'If you have any further inquires, please let us know by filling the form below'/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
