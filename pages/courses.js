import Layout from '../components/Layout';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

builder.init("86f5d179d02a4930900a5317a3da5d45");

export async function getStaticProps() {
  // Fetch the builder content for the '/about' page
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/courses',
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}


const CoursePage = ({ page }) => {
  return (
    <Layout>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </Layout>
  );
};

export default CoursePage;
