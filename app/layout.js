import Navbar from "@components/nav"
import Footer from "@components/footer"
import './globals.css'
 
 export const metadata = {
  title: 'U+MI Studio',
  description: 'This is a portfolio to showcase my photography studio.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
{children}
<Footer />
</body>
    </html>
  )
}
