import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/rentals">
              Instrument Rentals
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: #000000;
          padding: 20px;
        }

        nav ul {
          list-style: none;
          display: flex;
          justify-content: right;
        }

        nav ul li {
          margin-right: 20px;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: bold;
        }

        .nav-link:hover {
          color: #666;
        }
      `}</style>
    </header>
  );
};

export default Header;
