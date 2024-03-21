import Layout from '../../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Rental.module.css';
import productData from '../../product.json';

const RentalPage = ({ page }) => {
    // Dummy data for the products
    // open product.json and extract the properties from it
    const products = productData;
    console.log(products)
    //print(products);
    // const products = [
    //   { id: 1, name: 'Product 1', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    //   { id: 2, name: 'Product 2', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    //   { id: 3, name: 'Product 3', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    //   { id: 4, name: 'Product 4', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    //   { id: 5, name: 'Product 5', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    //   { id: 6, name: 'Product 6', description: 'Rent', image:'https://m.media-amazon.com/images/I/31Mcm7PpchL._SX300_SY300_QL70_FMwebp_.jpg' },
    // ];
  
    // State for the search query
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.searchBarContainer}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchBar}
              placeholder="Search products"
            />
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <Link key={product.productID} href={`/rentals/${product.productID}`} passHref>
                <div className={styles.card}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.productImage}
                      alt={`Image of ${product.productName}`}
                      width={500}  // Adjust as needed
                      height={300} // Adjust as needed
                      layout="responsive"
                    />
                  </div>
                  <h3>{product.productName}</h3>
                  <p>{product.productDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default RentalPage;
