import Link from 'next/link';

const Footer = () => {
    return (
      <footer>
        <div>
          <ul>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund">Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="centered-text">© 2024 Madyam Music Private Limited. All rights reserved.</p>
        </div>
        <style jsx>{`
        footer {
          background-color: #4A4A4A;
          padding: 20px;
        }

        div ul {
          list-style: none;
          display: flex;
          justify-content: center;
        }

        div ul li {
          margin-right: 20px;
        }

        .div-link {
          color: #333;
          text-decoration: none;
          font-weight: bold;
        }

        .div-link:hover {
          color: #666;
        }

        .centered-text {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
      </footer>
    );
  };
  
  export default Footer;
  