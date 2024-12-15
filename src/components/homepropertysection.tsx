'use client';
import React from 'react';
import PropertyCard from './propertycard';

export default function HomePropertySection() {
  return (
    <section className="px-4 py-8 md:px-8">
      <h2 className="text-2xl text-black font-semibold mb-6 text-start">Featured Properties For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}
