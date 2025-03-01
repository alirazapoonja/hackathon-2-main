"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const MayAlsoLike = () => {
  // State to manage the visibility of the products
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the visibility of products
  const toggleProducts = () => {
    setShowAll(!showAll);
  };

  // Product data for demonstration 
  const prodcutData = [
    { name: "Tshirt", rating: "4.5/5", price: "120$" },
    { name: "Skinny Fit Jeans", rating: "3.5/5", price: "240$" },
    { name: "Checkered Shirt", rating: "4.6/5", price: "120$" },
    { name: "Sleeve Stripped T-shirt", rating: "4.5/5", price: "120$" },
    { name: "Tshirt", rating: "4.5/5", price: "120$" },
    { name: "Skinny Fit Jeans", rating: "3.5/5", price: "240$" },
    { name: "Checkered Shirt", rating: "4.6/5", price: "120$" },
    { name: "Sleeve Stripped T-shirt", rating: "4.5/5", price: "120$" },
  ];

  const productImages = [
    "/arrival.svg",
    "/arrival1.svg",
    "/arrival2.svg",
    "/arrival3.svg",
    "/arrival.svg",
    "/arrival1.svg",
    "/arrival2.svg",
    "/arrival3.svg",
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold mb-4">YOU MAY ALSO LIKE</h2>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-8">
        {prodcutData.slice(0, showAll ? prodcutData.length : 4).map((product, index) => (
          <div key={product.name} className='flex flex-col items-center justify-center'>
            <div className="bg-[#F0EEED] shadow-lg h-56 w-72 rounded-md p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
              <Image
                src={productImages[index]}
                alt={`Image of ${product.name}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-left m-4 w-[80%]">
              <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
              <div className='flex justify-between'>
                <Image width="104" height="19" src="/star-rating.svg" alt="star rating" />
                <p className="text-gray-500">{product.rating}</p>
              </div>
              <p className="text-gray-500">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for medium screens */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:hidden">
        {prodcutData.slice(0, showAll ? prodcutData.length : 3).map((product, index) => (
          <div key={product.name} className='flex flex-col items-center justify-center'>
            <div className="bg-[#F0EEED] shadow-lg h-56 w-72 rounded-md p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
              <Image
                src={productImages[index]}
                alt={`Image of ${product.name}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-left m-4 w-[80%]">
              <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
              <div className='flex justify-between'>
                <Image width="104" height="19" src="/star-rating.svg" alt="star rating" />
                <p className="text-gray-500">{product.rating}</p>
              </div>
              <p className="text-gray-500">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for smaller screens (mobile/tablet) */}
      <div className="lg:hidden grid grid-cols-2 gap-8">
        {prodcutData.slice(0, showAll ? prodcutData.length : 2).map((product, index) => (
          <div key={product.name} className='flex flex-col items-center justify-center'>
            <div className="bg-[#F0EEED] shadow-lg h-48 w-36 rounded-md p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center">
              <Image
                src={productImages[index]}
                alt={`Image of ${product.name}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-left m-4 w-[80%]">
              <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
              <div className='flex justify-between max-w-screen'>
                <Image width="104" height="19" src="/star-rating.svg" alt="star rating" />
                <p className="text-gray-500">{product.rating}</p>
              </div>
              <p className="text-gray-500">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button to show more products */}
      <div className="mt-8 text-center">
        <Button variant="outline" onClick={toggleProducts}>
          {showAll ? 'View Fewer Products' : 'View All Products'}
        </Button>
      </div>
    </div>
  );
};

export default MayAlsoLike;
