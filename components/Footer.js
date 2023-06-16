const Footer = () => {
    return (
      <footer>
        <div>
          <ul>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/refund">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Follow Us:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/raagz" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/raagz" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/raagz" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Subscribe to Our Newsletter</p>
          {/* Add newsletter subscription form */}
        </div>
        <div>
          <p>© 2023 Raagz. All rights reserved.</p>
        </div>
        <style jsx>{`
        header {
          background-color: #000000;
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
      `}</style>
      </footer>
    );
  };
  
  export default Footer;
  