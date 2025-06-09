import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const categories = {
  "N-type – Topcon": [
    {
      title: "Glass Glass Bifacial PV Module",
      category: "Bifacial",
      image: 'https://www.pnsolarpv.com/storage/uploads/images/202308/11/1691747648_6YyCEdJdeI.webp',
      path: '/products/solar-panels',
      wattage: "585-605W",
     efficiency: "22.65-23.42%",
     type: "Bifacial N type ",
    },
    {
      title: "Glass Glass All Black PV Module",
      category: "Bifacial",
      image: 'https://greenmondi.de/media/64/54/39/1688712658/PV-Module-Mono-Halfcut-Full-Black-9.png?ts=1688712658',
      path: '/products/solar-panels',
      wattage: "585-605W",
     efficiency: "22.65-23.42%",
     type: "Bifacial N type ",
    },
    {
      title: "Glass Transparent Backsheet PV Module",
      category: "Bifacial",
      image: 'https://s.alicdn.com/@sc04/kf/H3139fbc9b7ae43ebbf653873f6f1f039f.png_720x720q50.jpg',
      path: '/products/solar-panels',
      wattage: "585-605W",
                    efficiency: "22.65-23.42%",
                    type: "Bifacial N type ",
    },
    {
      title: "Glass White Back Sheet PV Module",
      category: "Monofacial",
      image: 'https://metsolar.eu/wp-content/uploads/2017/11/Glass-blacksheet-layers.png',
      path: '/products/solar-panels',
      wattage: "585-605W",
                    efficiency: "22.65-23.42%",
                    type: "Monofacial N type ",
    },
    {
      title: "Glass Black Back Sheet – All Black PV Module",
      category: "Monofacial",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9nFoOyssxa3q14PjpIEgjsY9NXTTX9qRHA&s',
      path: '/products/solar-panels',
      wattage: "585-605W",
                    efficiency: "22.65-23.42%",
                    type: "Monofacial N type ",
    }
  ],
  "Heterojunction Technology": [],
  "Proven PERC Technology": [],
};

const SolarPanelsPage = () => {
  const [activeTab, setActiveTab] = useState('N-type – Topcon');

  const PerformanceChart = ({ efficiency, wattage }) => (
        <div className="relative h-20 sm:h-24 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute inset-0 px-2">
                <div className="flex justify-between items-end h-full">
                    <div className="flex-1 space-y-1 sm:space-y-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Efficiency</div>
                        <div className="h-6 sm:h-8 bg-gradient-to-t from-amber-500 to-orange-400 rounded-lg relative overflow-hidden transition-all duration-1000"
                            style={{ width: `${parseFloat(efficiency) * 4}%` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-800">{efficiency}</div>
                    </div>
                    <div className="flex-1 space-y-1 sm:space-y-2 ml-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Power</div>
                        <div className="h-6 sm:h-8 bg-gradient-to-t from-slate-600 to-slate-500 rounded-lg relative overflow-hidden transition-all duration-1000"
                            style={{ width: `${parseInt(wattage) / 10}%` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-800">{wattage}</div>
                    </div>
                </div>
            </div>
        </div>
    );

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
                      <li>
                        <span className="text-gray-500 mx-2">/</span>
                      </li>
                      <li>
                        <Link to="/products/solar-panels" className="text-gray-400 hover:text-gray-500">
                        Solar-panels
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </header>


              <div className="p-12">
      {/* Tabs */}
      <div className="flex flex-wrap mb-6 gap-4">
        {Object.keys(categories).map((cat) => (
          <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === cat
              ? 'bg-gradient-to-r from-[#B45A00] to-[#F15A24] text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveTab(cat)}
        >
          {cat}
        </button>
        
        ))}
      </div>
     
      {/* Cards */}
      <div className="container mx-auto px-4 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {categories[activeTab].map((product, index) => (
                  <Link
                    key={index}
                    to={product.path}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="space-y-4 sm:space-y-6">
                                <div className="relative group">
                                    <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden">
                                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-200">
                                        {product?.type}
                                    </div>
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img
                                                src={product?.image}
                                                alt={product?.name}
                                                className="w-full h-full  transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                        </div>
                                        
                                        <div className="p-6 text-center">
                                            
                      <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                    </div>
                                        <div className="p-4 sm:p-6">
                                            <PerformanceChart
                                                efficiency={product?.efficiency?.split('-')[1] || "23%"}
                                                wattage={product?.wattage?.split('-')[1] || "600W"}
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                </div>
                  </Link>
                ))}
                {categories[activeTab].length === 0 && (
          <p className="text-gray-600 col-span-full"> Coming soon – Next-generation <span className="font-semibold">{activeTab}</span></p>
        )}
      
              </div>
            </div>
      </div>
    </div>
   
  );
};

export default SolarPanelsPage;
