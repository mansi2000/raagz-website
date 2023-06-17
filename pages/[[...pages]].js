import React from 'react';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import Layout from '../components/Layout';


// Replace with your Public API Key
builder.init("86f5d179d02a4930900a5317a3da5d45");

export async function getStaticProps({ params }) {
  // Fetch the builder content
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url',
    options: { noTargeting: true },
  });

  // Exclude specific paths from the list
  const excludedPaths = ['/about', '/courses', '/rentals'];
  const filteredPages = pages.filter(page => !excludedPaths.includes(page.data?.url));

  return {
    paths: filteredPages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}


export default function Page({ page }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      <Layout>
        {/* Render the Builder page */}
        <BuilderComponent model="page" content={page} />
      </Layout>
    </>
  );
}