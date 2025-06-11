import React from "react";

// Define a type for our product data for better code quality and autocompletion.
// This step is optional but highly recommended with TypeScript.
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Make the component async to use 'await' for data fetching.
async function ProductsPage() {
  // This function fetches the data from the API.
  async function getProducts(): Promise<Product[]> {
    try {
      // We add '?limit=4' to the URL to get only 4 items.
      const res = await fetch("https://fakestoreapi.com/products?limit=4");

      // It's a good practice to handle potential errors.
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      return res.json();
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of an error.
    }
  }

  // Call the function and await the result.
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {/* We use the .map() function to loop over the 'products' array.
          For each 'product' object in the array, we render a card.
        */}
        {products.map((product) => (
          // The 'key' prop is essential for React to identify each item in a list.
          <div
            key={product.id}
            className="card w-96 bg-base-100 shadow-xl transition-transform hover:scale-105">
            <figure className="h-64">
              {/* Use the product image from the API */}
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-full p-4"
              />
            </figure>
            <div className="card-body">
              {/* Use the product title from the API */}
              <h2 className="card-title">
                {product.title}
                {/* You can even add badges */}
                <div className="badge badge-secondary">${product.price}</div>
              </h2>
              {/* Use the product description from the API */}
              <p>{product.description.substring(0, 100)}...</p>{" "}
              {/* Truncate description */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
