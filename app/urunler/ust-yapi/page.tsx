'use client';
import Header from '@/components/Header';
import { SectionWrapper } from '@/hoc';

const Products = () => {
  return (
    <div>
      <Header text="Üst Yapı" />

      <div className="m-auto mb-5 mt-[-30px] w-1/2"></div>
    </div>
  );
};

export default SectionWrapper(Products, 'urunler');
