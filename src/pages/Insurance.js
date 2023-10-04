import React from 'react';
import MainHead from '../components/MainHead';
import MainTable from '../components/MainTable';
import sampleData from '../data/data';

const Insurance = () => {
  return (
    <div>
        <MainHead/>
        <MainTable data={sampleData}/>
    </div>
  )
}

export default Insurance