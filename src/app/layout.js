import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter, Lato } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Bottomnav from './components/Bottomnav'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })
const latoregular = Lato({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'Priyono Santosa - Full Stack Developer from Indonesia',
  description: 'Priyono Santosa is a full stack developer based in Jakarta, Indonesia. Experienced as a senior web developer and system administrator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="master_page">
        <div className='col-lg-8 mx-auto p-4 pt-md-5'>
        <Header /> 
        {children}
        {/* <Bottomnav /> */}
        <Footer />
        </div>        
        </body>
    </html>
  )
}
