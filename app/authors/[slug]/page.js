'use client'
import React, { use, useState, useEffect } from 'react'
import Author from '@/components/Author';
import Loading from '@/components/Loading';

const fetchAuthorBySlug = async (slug) => {
  try {
    const response = await fetch(`http://localhost:5000/authors/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const author = await response.json();
    return author;
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
};

const AuthorPage = ({params}) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedAuthor = await fetchAuthorBySlug(slug);
      setAuthor(resolvedAuthor);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading author...</Loading>;
  }

  if (!author) {
    return <p>Author not found.</p>;
  }

  return <Author author={author} />

};

export default AuthorPage;
