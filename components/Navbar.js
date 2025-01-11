import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = ({ className }) => {
  return (
    <nav className={`bg-gray-800 text-white ${className}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          PieChat
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;