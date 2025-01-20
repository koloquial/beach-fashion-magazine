'use client'
import React from 'react';

import Author from '@/components/Author'; // Reuse the Author component

import coco from "@/authors/coco-lune.json";
import daisy from  "@/authors/daisy-driftwood.json";
import kiki from  "@/authors/kiki-seabreeze.json";
import mia from '@/authors/mia-blossom.json'
import misty from '@/authors/misty-shoreline.json'
import poppy from '@/authors/poppy-palmtree.json'
import sunny from '@/authors/sunny-starlette.json'
import { use } from 'react'
const AuthorPage = ({params}) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  switch(slug){
    case 'coco-lune': return <Author author={coco} />
    case 'daisy-driftwood': return <Author author={daisy} />
    case 'kiki-seabreeze': return <Author author={kiki} />
    case 'mia-blossom': return <Author author={mia} />
    case 'misty-shoreline': return <Author author={misty} />
    case 'poppy-palmtree': return <Author author={poppy} />
    case 'sunny-starlette': return <Author author={sunny} />
    default: return <Author author={sunny} />
  }

};

export default AuthorPage;
