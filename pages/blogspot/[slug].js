import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
  return <div>
    <Navbar/>
    {slug}
    </div>;
};

export default slug;