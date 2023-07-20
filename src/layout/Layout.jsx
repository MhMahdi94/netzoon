import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Body from '../views/Body'
import FloatingButton from '../components/FloatingButton'
import ContactModal from '../components/ContactModal'
import Footer from '../components/Footer'

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div  >
      <Navbar/>
     
      <Body/>
     {/* <FloatingButton onClick={()=>setShowModal(true)}/> */}
    {showModal? <ContactModal onClose={()=>setShowModal(false)}/>:null}
    <Footer/>
    </div>
  )
}

export default Layout