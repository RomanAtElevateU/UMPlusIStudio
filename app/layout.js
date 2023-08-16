import Navbar from "@components/nav"
import Footer from "@components/footer"
import './globals.css'
 
 export const metadata = {
  title: 'UM+I Studio',
  description: 'This is a portfolio to showcase my photography studio.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" class="text-gray-900 bg-gray-100 font-serif">
      <body>
      <Navbar />
{children}
<Footer />
</body>
    </html>
  )
}
