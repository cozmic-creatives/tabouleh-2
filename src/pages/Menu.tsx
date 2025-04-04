
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuList from '@/components/MenuList';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-clay-50 py-12">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our authentic Syrian dishes made with traditional recipes and the freshest ingredients.
            </p>
          </div>
        </section>
        
        <section className="py-8 md:py-12">
          <MenuList />
        </section>
        
        <section className="py-12 bg-spice-50 border-t border-b border-spice-100">
          <div className="container-custom mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ordering Information</h2>
              <p className="text-gray-600 mb-6">
                We offer takeout and delivery options. Orders can be placed via phone, online, or through our mobile app.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pickup</h3>
                  <p className="text-gray-600 mb-4">
                    Order ahead and pick up at your convenience.
                  </p>
                  <p className="text-spice-600 font-medium">Average wait: 15-20 minutes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    We deliver to locations within a 5-mile radius.
                  </p>
                  <p className="text-spice-600 font-medium">Delivery fee: $3.99</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Catering</h3>
                  <p className="text-gray-600 mb-4">
                    Special catering menu available for events.
                  </p>
                  <p className="text-spice-600 font-medium">Please call for details</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
