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
     
      <Campaign/>
      <About/>
      <Partners/>
      <News/>
      <Resources/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
