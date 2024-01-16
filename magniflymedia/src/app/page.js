import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'
import Services from './components/Services'
import Info from './components/Info'
import Footer from './components/Footer'
import Menu from './components/Menu'

export default function Home() {
  return (
    <>
      <div className='main'>
        <Header />
        <Main />
        <Services />
        <Info />
        <Footer />
        <Menu />
      </div>
    </>
  )
}
