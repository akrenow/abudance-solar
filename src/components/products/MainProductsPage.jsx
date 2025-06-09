import React from 'react';
import { Link } from 'react-router-dom';

const mainProducts = [
  {
    title: 'Solar Panels',
    image: 'https://silfabsolar.com/wp-content/uploads/2021/08/Panels_Commercial.png',
    path: '/products/solar-panels',
  },
  {
    title: 'Solar Inverters',
    image: 'https://blog.athom.com/wp-content/uploads/2024/12/goodwe-inverter.png',
    path: '/products/solar-inverters',
  },
  {
    title: 'EPC Solution',
    image: 'https://silfabsolar.com/wp-content/uploads/2021/07/Homepage_type_installer.jpg',
    path: '/products/epc-solution',
  },
];

const MainProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gray-500">
                  Products
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Product Cards */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mainProducts.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-contain bg-white"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProductsPage;
