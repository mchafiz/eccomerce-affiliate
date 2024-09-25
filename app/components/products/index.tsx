const Products = () => {
  return (
    <main className="col-span-12 lg:col-span-9 max-h-full overflow-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-transparent p-4 border-b-[1.5px] border-r-[1.5px] border-gray-600"
          >
            <img
              className="h-44 w-full object-cover rounded-lg"
              src={`https://via.placeholder.com/300x300?text=Product+${
                index + 1
              }`}
              alt={`Product ${index + 1}`}
            />
            {/* Product Name */}
            <h2 className="text-lg font-semibold mt-4">Product {index + 1}</h2>
            {/* Rating Stars */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
              <span className="ml-2 text-sm text-gray-500">(4.5)</span>
            </div>
            {/* Price */}
            <p className="text-lg font-bold text-blue-600 mt-2">$29.99</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
