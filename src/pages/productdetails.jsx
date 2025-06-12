import React, { useState } from 'react';
import logo from '../assets/logo-symbol.png';
import brand from '../assets/Brand.png';
import profileIcon from '../assets/Profile.png';
import ordersIcon from '../assets/Orders.png';
import msgIcon from '../assets/Message.png';
import cartIcon from '../assets/Cart.png';
import flagPAK from '../assets/PAK.png';
import flagTURKEY from '../assets/TURKEY.png';
import flagKOREA from '../assets/KOREA.png';
import flagUSD from '../assets/USD.png';
import flagNEWZEALAND from '../assets/Flag_of_New_Zealand.svg.png';
import flagCHINA from '../assets/CHINA.png';
import gallery from '../assets/Gallery.png';
import greyshirt from '../assets/Group 1004.png';
import tradeprice from '../assets/Trade price.png';
import shirt from '../assets/Shirt.png';
import coat from '../assets/coat.png';
import jacket from '../assets/jacket.png';
import shorts from '../assets/shorts.png';
import bag from '../assets/bag.png';
import headphones from '../assets/headphones.png';
import wallet from '../assets/wallet.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';


export default function Productdetails() {
  const [selectedHelp, setSelectedHelp] = useState('Help');
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: flagUSD });

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

          {/* Category Dropdown + Search */}
          <div className="col col-md-6 d-flex">
            <select className="form-select w-auto me-2">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <input type="text" className="form-control me-2" placeholder="Search products..." />
            <button className="btn btn-primary">Search</button>
          </div>

          {/* Right-side Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => console.log('Go to Cart')} />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-bottom my-2"></div>

      {/* Navbar */}
      <div className="container-fluid px-3">
        <div className="row align-items-center justify-content-between gx-2">

          {/* Category Button */}
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-sm btn-outline-secondary d-flex align-items-center me-2 fw-bold">
              All Categories
            </button>
          </div>

          {/* Nav Links */}
          <div className="col d-flex justify-content-center flex-wrap">
            <NavTextButton label="Hot Offers" />
            <NavTextButton label="Gift Boxes" />
            <NavTextButton label="Projects" />
            <NavTextButton label="Menu Items" />

            {/* Help Dropdown (Dynamic) */}
            <div className="dropdown mx-2">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold"
                type="button"
                data-bs-toggle="dropdown"
              >
                {selectedHelp}
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => handleHelpSelect('FAQ')}>FAQ</button></li>
                <li><button className="dropdown-item" onClick={() => handleHelpSelect('Customer Service')}>Customer Service</button></li>
              </ul>
            </div>
          </div>

          {/* Language/Currency + Ship To */}
          <div className="col-auto d-flex align-items-center">
            {/* Language/Currency */}
            <select className="form-select form-select-sm me-2 w-auto fw-bold">
              <option>EN / USD</option>
              <option>ES / EUR</option>
              <option>FR / EUR</option>
              <option>IN / INR</option>
            </select>

            {/* Ship To (Dynamic) */}
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
              >
                <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
                {shipTo.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Pakistan', flagPAK)}><img src={flagPAK} alt="Pakistan" style={{ height: '20px' }} />Pakistan</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Turkey', flagTURKEY)}><img src={flagTURKEY} alt="Turkey" style={{ height: '20px' }} />Turkey</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Korea', flagKOREA)}><img src={flagKOREA} alt="Korea" style={{ height: '20px' }} />Korea</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('USA', flagUSD)}><img src={flagUSD} alt="USA" style={{ height: '20px' }} />USA</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('New Zealand', flagNEWZEALAND)}><img src={flagNEWZEALAND} alt="New Zealand" style={{ height: '20px' }} />New Zealand</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('China', flagCHINA)}><img src={flagCHINA} alt="China" style={{ height: '20px' }} />China</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      {/* Breadcrumb Navigation */}
<div className="container-fluid px-3 mt-2 bg-grey">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-2">
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-decoration-none fw-bold">Home</button>
      </li>
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-decoration-none fw-bold">Clothing</button>
      </li>
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-decoration-none fw-bold">Men's wear</button>
      </li>
      <li className="breadcrumb-item active fw-bold" aria-current="page">
        <button className="btn btn-link p-0 text-decoration-none fw-bold">Summer Clothing</button>
      </li>
    </ol>
  </nav>
</div>


{/* Product Details Box */}
<div className="container shadow-sm p-4 mb-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>

  <div className="row">

    {/* Left Side: Product Image and Thumbnails */}
    <div className="col-md-4">
      {/* Main Image */}
      <img
        src={greyshirt}
        alt="Product"
        className="img-fluid border mb-3"
      />

      {/* Thumbnails */}
      <div className="d-flex gap-2">
        <img src={gallery} className="img-thumbnail" alt="Thumb1" />
      </div>
    </div>

    {/* Middle Info Section */}
    <div className="col-md-5">
      {/* Stock status */}
      <div className="d-flex align-items-center mb-2 text-success fw-semibold">
        ✅ In Stock
      </div>

      {/* Rating, Reviews, Sold */}
      <div className="mb-3">
        ⭐⭐⭐⭐☆ (4.0) · 120 reviews · 300 sold
      </div>

      {/* Brand Image */}
      <div className="mb-3">
        <img src={tradeprice} alt="Brand" />
      </div>

      {/* Product Info */}
      <div>
        <p className="mb-1"><strong>Material:</strong> 100% Cotton</p>
        <p className="mb-1"><strong>Fit:</strong> Regular Fit</p>
        <p className="mb-1"><strong>Color:</strong>Light gery</p>
        <p className="mb-1"><strong>Size:</strong> M, L, XL</p>
        <p className="mb-1"><strong>Description:</strong> Comfortable summer shirt perfect for casual wear. Breathable and durable with a modern look.</p>
      </div>
    </div>

    {/* Right Side: Seller Info */}
    <div className="col-md-3">
      <div className="border rounded p-3 bg-light">
        <h6 className="fw-bold mb-2">Seller Info</h6>

        <p className="mb-1"><strong>Name:</strong> Global Fashions</p>
        <p className="mb-1 d-flex align-items-center">
          <strong>Country:</strong>
          <img src={flagUSD} alt="USA" className="ms-2" style={{ height: '20px' }} /> USA
        </p>
        <p className="mb-1">✅ Verified Seller</p>
        <p className="mb-3">🌍 Sells Worldwide</p>

        <button className="btn btn-outline-primary btn-sm w-100 mb-2">Send Inquiry</button>
        <button className="btn btn-outline-secondary btn-sm w-100">Seller's Profile</button>
      </div>
    </div>

  </div>

  {/* Save for Later Button */}
  <div className="text-end mt-3">
    <button className="btn btn-outline-warning">⭐ Save for Later</button>
  </div>

</div>
{/* Product Detail Tabs and Side Image Strip */}
<div className="container-fluid mt-4 px-3">
  <div className="d-flex gap-3 align-items-start">

    {/* LEFT: Main Tabs Section */}
    <div
      className="flex-grow-1 bg-white border rounded p-3 d-flex flex-column"
      style={{ height: '70vh' }}
    >
      {/* Tab Buttons */}
      <div className="d-flex mb-3 border-bottom pb-2 gap-3">
        {['Description', 'Reviews', 'Shipping', 'About Seller'].map((tab, idx) => (
          <button key={idx} className="btn btn-outline-primary fw-bold btn-sm">
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content - Description */}
      <div className="flex-grow-1 overflow-auto">
        <h5 className="fw-bold mb-2">Product Description</h5>
        <p>
          This summer shirt is crafted with breathable cotton to keep you cool and stylish in warm weather.
          Designed with modern patterns, it's perfect for casual outings, beach days, or relaxed evenings.
        </p>

        <h6 className="mt-4 fw-bold">Specifications</h6>
        <table className="table table-striped table-bordered w-75">
          <tbody>
            <tr><th>Material</th><td>100% Cotton</td></tr>
            <tr><th>Color</th><td>Light grey</td></tr>
            <tr><th>Sizes Available</th><td>S, M, L, XL</td></tr>
            <tr><th>Wash Type</th><td>Machine Wash</td></tr>
          </tbody>
        </table>

        <h6 className="mt-4 fw-bold">Features</h6>
        <ul className="list-unstyled">
          <li>✅ Breathable fabric</li>
          <li>✅ Lightweight and comfortable</li>
          <li>✅ Stylish design</li>
          <li>✅ Available in multiple sizes</li>
        </ul>
      </div>
    </div>

{/* RIGHT: Vertical Image Strip */}
<div
  className="bg-white border rounded p-2 d-flex flex-column gap-3"
  style={{ width: '160px', height: '45vh', overflowY: 'auto' }}
>
  <h6 className="text-center fw-bold">You May Also Like</h6>
  {[
    { src: shirt, name: 'Casual Blue Shirt', price: 19.99 },
    { src: jacket, name: 'Winter Jacket', price: 21.49 },
    { src: coat, name: 'Classic Blue Coat', price: 18.75 },
    { src: bag, name: 'Blue Bag', price: 22.99 },
    { src: shorts, name: 'Denim Blue Shorts', price: 24.59 },
  ].map((item, index) => (
    <div key={index} className="border p-1 rounded bg-white text-center">
      <img
        src={item.src}
        alt={`Image ${index + 1}`}
        className="img-fluid mb-1"
        style={{ maxHeight: '60px', objectFit: 'contain' }}
      />
      <h6 className="mb-0 small">{item.name}</h6>
      <p className="text-muted mb-0 small">${item.price.toFixed(2)}</p>
    </div>
  ))}
</div>

</div>
</div>


{/* Related Items - Clean Horizontal Layout */}
<div className="bg-white border rounded shadow p-4 mb-4">
  <h5 className="fw-bold mb-4">Related Items</h5>

  <div className="d-flex justify-content-between flex-wrap">
    {[
      { src: shirt, label: 'Shirt', price: '$10.89' },
      { src: wallet, label: 'Wallet', price: '$6.50' },
      { src: bag, label: 'Travel Bag', price: '$19.75' },
      { src: coat, label: 'Coat', price: '$42.90' },
      { src: headphones, label: 'Headphones', price: '$18.99' },
    ].map((item, idx) => (
      <div key={idx} className="text-center border rounded p-3 bg-light mx-2" style={{ width: '160px' }}>
        <img
          src={item.src}
          alt={item.label}
          className="mb-2"
          style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
        />
        <div className="fw-bold">{item.price}</div>
        <div className="text-muted">{item.label}</div>
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
      <span className="fw-semibold" style={{ fontSize: '0.8rem' }}>{label}</span>
    </button>
  );
}

// Reusable text nav button
function NavTextButton({ label }) {
  return (
    <button className="btn btn-sm btn-outline-secondary fw-bold mx-1">
      {label}
    </button>
  );
}
