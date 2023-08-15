import Link from 'next/link';
import '../app/globals.css'

function Navbar() {
  return (
    <nav className="fixed-top w-full h-24 shadow-xl bg-white overflow-auto">
    <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">

      <Link className="ml-10 uppercase hover:border-b text-xl" href="../">UM+I Studio</Link>

      <div>
        <ul className="hidden sm:flex">
          <li className="mx-10 uppercase hover:border-b text-xl">
            <Link href="../about">About</Link>
          </li>
          <li className="mx-10 uppercase hover:border-b text-xl">
            <Link href="../gallery">Gallery</Link>
          </li>
          <li className="mx-10 uppercase hover:border-b text-xl">
            <Link href="../services">Services</Link>
          </li>
          <li className="mx-10 uppercase hover:border-b text-xl">
            <Link href="../contact">Contact</Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>      )
}

export default Navbar