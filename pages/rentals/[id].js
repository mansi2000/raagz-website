// pages/rentals/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Rental.module.css';
import productData from '../../product.json';
import Layout from '../../components/Layout';

export default function Product() {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { id } = router.query;

  // Here you would fetch product details based on the `id` or use static generation/getServerSideProps for fetching
  const product = productData.find((p) => p.productID.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div className={styles.productDetail}>
      <Head>
        <title>Product {id}</title>
        <meta name="description" content={`Details for product ${id}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <h1>{product.productName}</h1>
        <div className={styles.imageContainer}>
            <Image
                src={product.productImage}
                alt={`Image of ${product.productName}`}
                width={30}  // Adjust as needed
                height={15} // Adjust as needed
                layout="responsive"
            />
        </div>
        <p>This is the page for product {id}. Here you would show product details and other relevant information.</p>
        <p className={styles.description}>description: {product.productDescription}</p>
        
        {/* Additional product details and components would go here */}
      </Layout>
    </div>
  );
}
