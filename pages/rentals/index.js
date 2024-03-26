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

      // State for the search query
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
    };

    // Filter products based on search query
    const filteredProducts = productData.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchQuery) ||
        product.productCategory.toLowerCase().includes(searchQuery)
    );
  
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
            {filteredProducts.map((product) => (
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
