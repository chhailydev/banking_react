import React, { useEffect, useState } from 'react'
import { GetApi } from '../api/API'
import { Skeleton }from '@mui/material';
import { Products } from '../pages';

import { Route, Routes } from 'react-router-dom';

import { Header, Footer, Content } from '../components'
import { NotFoundPage } from '../pages';

const RenderPages = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const fetchProduct = () => {
    GetApi('/api/pro')
    .then((res) =>{
      setProducts(res?.products);
      setLoading(false);
    })
    .catch(err => {
      console.log(err)
      setLoading(false);
      setError(false);
    });
  }

  const fetchData = () => {
    GetApi('/api/users')
    .then((res) => { 
       setData(res?.users);
       setLoading(false);
    })
    .catch(error => {
        console.error(error)
        setLoading(false);
        setError(false);
    });
  }

  useEffect(() => {
    // Set time loading
    const SkeletonTimer = setTimeout(() => {
      setShowSkeleton(false);
      fetchData();
      fetchProduct();
    }, 2000);

    return () => clearTimeout(SkeletonTimer);
  },[]);

  return (
    <React.Fragment>
      <Header />
      {!loading && error ? (
        <Routes>
          <Route exact path="/" element={<Content index={data}/>} /> 
          <Route path="/product" element={<Products index={products}/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      ) : (
        showSkeleton && <Skeleton animation="wave" sx={{ height:'90vh', width: `100%` }} />
      )}
      <Footer />
    </React.Fragment>
  )
}

export default RenderPages
