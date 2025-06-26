import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo-symbol.png';
import brand from '../assets/Brand.png';
import profileIcon from '../assets/Profile.png';
import ordersIcon from '../assets/Orders.png';
import msgIcon from '../assets/Message.png';
import cartIcon from '../assets/Cart.png';
import shirt from '../assets/Shirt.png';
import coat from '../assets/coat.png';
import headphones from '../assets/headphones.png';
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import payment3 from '../assets/payment3.png';
import payment4 from '../assets/payment4.png';
import payment5 from '../assets/payment5.png';
import btn1 from '../assets/btn1.png';
import btn2 from '../assets/btn2.png';
import btn3 from '../assets/btn3.png';
import jacket from '../assets/jacket.png';
import shorts from '../assets/shorts.png';
import wallet from '../assets/wallet.png';
import bag from '../assets/bag.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';
import flagPAK from '../assets/PAK.png';
import flagTURKEY from '../assets/TURKEY.png';
import flagKOREA from '../assets/KOREA.png';
import flagUSD from '../assets/USD.png';
import flagNEWZEALAND from '../assets/Flag_of_New_Zealand.svg.png';
import flagCHINA from '../assets/CHINA.png';

export default function Cart() {

  const [selectedHelp, setSelectedHelp] = useState('Help');
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: '' });

const [cart, setCart] = useState(null);

const fetchCart = async () => {
  try {
    const token = localStorage.getItem('token');

    const res = await axios.get('https://ecommerce-backend-h3ra.onrender.com/api/cart', {
      headers: { Authorization: `Bearer ${token}` }
    });

    // ✅ Safely access the items array and filter out null products
    const validItems = res.data?.items?.filter(item => item.productId !== null) || [];

    setCart({ ...res.data, items: validItems });
  } catch (err) {
    console.error('❌ Error loading cart:', err.response?.data || err.message);
  }
};

useEffect(() => {
  fetchCart();
}, []);

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://ecommerce-backend-h3ra.onrender.com/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err.message);
    }
  };

  const handleHelpSelect = (label) => setSelectedHelp(label);
  const handleShipToSelect = (name, flag) => setShipTo({ name, flag });

  return (
    <>
      {/* Header */}
      <div className="container-fluid bg-light py-2 px-3 border-bottom">
        <div className="row align-items-center justify-content-between gx-2">
          {/* Logo */}
          <div className="col-auto d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '40px' }} className="me-2" />
            <img src={brand} alt="Brand" style={{ height: '40px' }} />
          </div>

          {/* Right-side Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => window.location.href = '/cart'} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-bottom my-2"></div>

      {/* Cart Content */}
<div className="bg-light min-vh-100 px-3 py-4">
  <h2 className="mb-4 fw-bold">Your Cart</h2>

  <div className="container mt-4">
    <div className="row g-4">
      {/* Left: Product Items */}
      <div className="col-lg-8">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4>Your Cart</h4>
          
          {!cart ? (
            <p>Loading cart...</p>
          ) : !cart.items || cart.items.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.items
              .filter((item) => item.productId) // ✅ Filter out items with null productId
              .map((item) => (
                <div key={item.productId._id} className="d-flex border-bottom py-3">
                  <img
                    src={`https://ecommerce-backend-h3ra.onrender.com/${item.productId.image}`}
                    alt={item.productId.name || "Product"}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h5>{item.productId.name}</h5>
                    <p className="mb-1">{item.productId.description}</p>
                    <strong className="me-3">${item.productId.price}</strong>
                    <p>Qty: {item.quantity}</p>
                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => removeItem(item.productId._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    


            {/* Right: Summary */}
            <div className="col-lg-4">
              <div className="bg-white p-3 mb-3 rounded shadow-sm">
                <h6>Have a coupon?</h6>
                <div className="input-group mt-2">
                  <input type="text" className="form-control" placeholder="Enter coupon code" />
                  <button className="btn btn-primary">Apply</button>
                </div>
              </div>

              <div className="bg-white p-3 rounded shadow-sm mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>$149.97</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Discount</span>
                  <span>-$10.00</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax</span>
                  <span>$5.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total</span>
                  <span>$144.97</span>
                </div>
                <button className="btn btn-success w-100">Checkout</button>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {[payment1, payment2, payment3, payment4, payment5].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`payment-${idx}`}
                    style={{ width: '40px', height: '26px', objectFit: 'contain' }}
                  />
                ))}
              </div>
            </div>
            </div>
      

        
      {/* Bottom Info Row: Secure Payment / Support / Delivery */}
      <div className="pt-4 ps-3">
        <div className="d-flex justify-content-start gap-4">
          {/* Secure Payment */}
          <div className="d-flex align-items-center">
            <button className="btn border-0 p-2">
              <img src={btn1} alt="Lock Icon" style={{ width: '40px' }} />
            </button>
            <span className="ms-2">Secure Payment</span>
          </div>

          {/* Customer Support */}
          <div className="d-flex align-items-center">
            <button className="btn border-0 p-2">
              <img src={btn2} alt="Support Icon" style={{ width: '40px' }} />
            </button>
            <span className="ms-2">Customer Support</span>
          </div>

          {/* Free Delivery */}
          <div className="d-flex align-items-center">
            <button className="btn border-0 p-2">
              <img src={btn3} alt="Cart Icon" style={{ width: '40px' }} />
            </button>
            <span className="ms-2">Free Delivery</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    


{/* Related Items - Clean Horizontal Layout */}
<div className="bg-white border rounded shadow p-4 mb-4">
  <h5 className="fw-bold mb-4">Saved for Later</h5>

  <div className="d-flex flex-wrap justify-content-center gap-3">
    {[
      { src: wallet, label: 'Wallet', price: '$6.50' },
      { src: bag, label: 'Denim Shorts', price: '$19.75' },
      { src: shorts, label: 'Coat', price: '$42.90' },
      { src: jacket, label: 'Winter Jacket', price: '$18.99' },
    ].map((item, idx) => (
      <div
        key={idx}
        className="text-center border rounded p-3 bg-light"
        style={{ width: '160px' }}
      >
        <img
          src={item.src}
          alt={item.label}
          className="mb-2"
          style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
        />
        <div className="fw-bold">{item.price}</div>
        <div className="text-muted mb-2">{item.label}</div>
        <button className="btn btn-sm btn-outline-primary">Add to Cart</button>
      </div>
    ))}
  </div>
</div>

{/* Blue Slim Offer Banner */}
<div className="d-flex justify-content-between align-items-center px-4 py-4 rounded" style={{ backgroundColor: '#007bff', color: 'white' }}>
  <div className="fw-bold">Get more discount than 100 USD</div>
  <button className="btn btn-light fw-semibold px-3">Shop Now</button>
</div>


{/* Footer Section */}
<div className="container-fluid bg-light border-top pt-5 pb-4 mt-5">
  <div className="container">
    <div className="row">

      {/* Left Column: Logo and Icons */}
      <div className="col-md-3 mb-4 text-center text-md-start">
        <img src={logoimg} alt="Brand Logo" className="mb-3" style={{ width: '120px' }} />
        <p className="text-muted mb-4">
          CONTACT US
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
          {[appicon1, appicon2, appicon3, appicon4, appicon5].map((icon, i) => (
            <button key={i} className="btn btn-outline-secondary p-2 rounded-circle border-0">
              <img src={icon} alt={`Icon ${i + 1}`} style={{ width: '25px', height: '25px' }} />
            </button>
          ))}
        </div>
      </div>

      {/* About Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">About</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">About Us</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Find Store</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Categories</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Blogs</button>
        </div>
      </div>

      {/* Information Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">Information</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">Help Centre</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Money Refund</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Shipping</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Contact Us</button>
        </div>
      </div>

      {/* For Users Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">For Users</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">Login</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Register</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Settings</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">My Orders</button>
        </div>
      </div>

      {/* Get App Column */}
      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">Get App</h6>
        <div className="d-flex flex-column gap-2">
        <a href="https://apps.apple.com/app-id" target="_blank" rel="noopener noreferrer">
  <img src={AppImg1} alt="App Store" style={{ width: '140px' }} />
</a>
<a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
  <img src={AppImg2} alt="Google Play" style={{ width: '140px' }} />
</a>

        </div>
      </div>

    </div>
  </div>
</div>


{/* Thin Grey Footer */}
<div style={{ backgroundColor: '#f1f1f1' }} className="border-top py-2">
  <div className="container d-flex justify-content-between align-items-center">

    {/* Left Side Text */}
    <small className="text-muted">©2023 Ecommerce</small>

    {/* Language Dropdown */}
    <div className="dropdown">
      <button
        className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold d-flex align-items-center gap-2"
        data-bs-toggle="dropdown"
      >
        <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
        {shipTo.name}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Urdu', flagPAK)}
          >
            <img src={flagPAK} alt="Urdu" style={{ height: '20px' }} /> Urdu
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Turkish', flagTURKEY)}
          >
            <img src={flagTURKEY} alt="Turkish" style={{ height: '20px' }} /> Turkish
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Korean', flagKOREA)}
          >
            <img src={flagKOREA} alt="Korean" style={{ height: '20px' }} /> Korean
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('English', flagUSD)}
          >
            <img src={flagUSD} alt="English" style={{ height: '20px' }} /> English
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Maori', flagNEWZEALAND)}
          >
            <img src={flagNEWZEALAND} alt="Maori" style={{ height: '20px' }} /> Maori
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Chinese', flagCHINA)}
          >
            <img src={flagCHINA} alt="Chinese" style={{ height: '20px' }} /> Chinese
          </button>
        </li>
      </ul>
    </div>

  </div>
</div>


     
    </>
  );
}

// Reusable component for icons
function HeaderIcon({ img, label, onClick }) {
  return (
    <button
      className="d-flex flex-column align-items-center mx-3 border-0 bg-transparent"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <img src={img} alt={label} style={{ height: '36px', width: '36px', marginBottom: '4px' }} />
    </button>
  );
}

