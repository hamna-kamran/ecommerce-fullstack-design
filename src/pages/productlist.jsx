import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from '../pages/cart';
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
import gridIcon from '../assets/gridviewbutton.png';
import listIcon from '../assets/listviewbutton.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';


export default function ProductView() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:5000/api/cart/add',
      { productId, quantity: 1 },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert('Product added to cart');
  } catch (err) {
    console.error('Add to cart error:', err.response?.data || err.message);
    alert(`Failed to add to cart: ${err.response?.data?.message || err.message}`);
  }
};



  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
      });
  }, []);
const filteredProducts = products.filter((product) => {
  // Only filter by category if not "All"
  const matchesCategory =
    selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();

  const matchesSearch = searchQuery.trim() === '' || (
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return matchesCategory && matchesSearch;
});



  
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

      <div className="container mt-4">
  {/* Category + Search */}
  <div className="row mb-4">
    <div className="col-md-8 d-flex">
      <select
        className="form-select w-auto me-2"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bags">Bags</option>
      </select>

      <input
        type="text"
        className="form-control me-2"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="btn btn-primary" disabled>
        Search
      </button>
    </div>
  </div>
   {/* Right-side Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => navigate('/cart')} />
          </div>


  
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
<div className="container-fluid px-3 mt-2">
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
    
 <div className="container mt-4">
  <div className="row">
   {/* Sidebar */}
<div className="col-md-3 mb-3">
  <div className="border rounded p-3 bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
    
    {/* All Filters */}
    <div>
      {/* Category Dropdown */}
      <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul className="dropdown-menu w-100">
          <li><a className="dropdown-item" href="#">Mobile Accessory</a></li>
          <li><a className="dropdown-item" href="#">Electronics</a></li>
          <li><a className="dropdown-item" href="#">Smartphones</a></li>
          <li><a className="dropdown-item" href="#">Modern Tech</a></li>
          <li><a className="dropdown-item text-primary" href="#">See All</a></li>
        </ul>
      </div>

      {/* Brands Dropdown with checkboxes */}
      <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Brands
        </button>
        <ul className="dropdown-menu w-100 px-3">
          {["Apple", "Samsung", "Xiaomi", "OnePlus"].map((brand) => (
            <li className="form-check" key={brand}>
              <input className="form-check-input" type="checkbox" id={brand.toLowerCase()} />
              <label className="form-check-label" htmlFor={brand.toLowerCase()}>{brand}</label>
            </li>
          ))}
          <li><a className="dropdown-item text-primary" href="#">See All</a></li>
        </ul>
      </div>

      {/* Features Dropdown with checkboxes */}
      <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Features
        </button>
        <ul className="dropdown-menu w-100 px-3">
          {[
            { id: "5g", label: "5G Support" },
            { id: "waterproof", label: "Waterproof" },
            { id: "wireless", label: "Wireless Charging" },
            { id: "faceunlock", label: "Face Unlock" }
          ].map((feature) => (
            <li className="form-check" key={feature.id}>
              <input className="form-check-input" type="checkbox" id={feature.id} />
              <label className="form-check-label" htmlFor={feature.id}>{feature.label}</label>
            </li>
          ))}
          <li><a className="dropdown-item text-primary" href="#">See All</a></li>
        </ul>
      </div>

      {/* More Options */}
      <div className="dropdown mb-3">
        <button className="btn btn-secondary dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          More Options
        </button>
        <ul className="dropdown-menu w-100">
          <li><a className="dropdown-item" href="#">Best Sellers</a></li>
          <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          <li><a className="dropdown-item" href="#">Top Rated</a></li>
          <li><a className="dropdown-item text-primary" href="#">See All</a></li>
        </ul>
      </div>

      {/* Condition Section */}
      <div className="mb-3">
        <h6 className="mb-2 fs-6 fw-semibold">Condition</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="conditionAny" />
          <label className="form-check-label" htmlFor="conditionAny">Any</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="conditionNew" />
          <label className="form-check-label" htmlFor="conditionNew">Brand New</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="conditionOld" />
          <label className="form-check-label" htmlFor="conditionOld">Old</label>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mb-3">
        <h6 className="mb-2 fs-6 fw-semibold">Rating</h6>
        {[5, 4, 3, 2, 1, 0].map((star) => (
          <div className="form-check" key={star}>
            <input className="form-check-input" type="checkbox" id={`rating-${star}`} />
            <label className="form-check-label" htmlFor={`rating-${star}`}>
              {Array.from({ length: star }, (_, i) => (
                <span key={i} className="text-warning">&#9733;</span> // filled star
              ))}
              {Array.from({ length: 5 - star }, (_, i) => (
                <span key={i} className="text-muted">&#9734;</span> // empty star
              ))}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Price Range Filter */}
    <div className="border-top pt-3 mt-3">
      <h6 className="mb-3 fs-6 fw-semibold">Price Range</h6>
      <input
        type="range"
        className="form-range"
        min="0"
        max="100000"
        step="100"
        id="priceRangeSlider"
        onChange={(e) => {
          const value = e.target.value;
          document.getElementById("maxPriceInput").value = value;
        }}
      />
      <div className="d-flex justify-content-between mb-2">
        <input type="number" className="form-control form-control-sm me-2" placeholder="Min" id="minPriceInput" style={{ width: '45%' }} />
        <input type="number" className="form-control form-control-sm" placeholder="Max" id="maxPriceInput" style={{ width: '45%' }} />
      </div>
      <button
        className="btn btn-sm btn-primary w-100"
        onClick={() => {
          const min = document.getElementById("minPriceInput").value;
          const max = document.getElementById("maxPriceInput").value;
          alert(`Filtering products between Rs. ${min} and Rs. ${max}`);
        }}
      >
        Apply
      </button>
    </div>
  </div>
</div>

 {/* Main Content Area */}
    <div className="col-md-9">
      {/* Content Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        {/* Verified Only Checkbox */}
        <div className="form-check me-3">
          <input className="form-check-input" type="checkbox" id="verifiedOnly" />
          <label className="form-check-label" htmlFor="verifiedOnly">
            Verified Only
          </label>
        </div>

        {/* Features Dropdown */}
        <div className="dropdown me-3">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Features
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">5G</a></li>
            <li><a className="dropdown-item" href="#">Wireless Charging</a></li>
            <li><a className="dropdown-item" href="#">Waterproof</a></li>
            <li><a className="dropdown-item text-primary" href="#">See All</a></li>
          </ul>
        </div>

        {/* View Toggle Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-light border me-2 p-1" title="Grid View">
            <img src={gridIcon} alt="Grid View" width="24" height="24" />
          </button>
          <button className="btn btn-light border p-1" title="List View">
            <img src={listIcon} alt="List View" width="24" height="24" />
          </button>
        </div>
      </div>

      

    {/* Product Grid */}
  <div className="row">
  {filteredProducts.length === 0 ? (
    <p>No products found.</p>
  ) : (
    filteredProducts.map((product) => (
      <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100">
          <img
            src={`http://localhost:5000/${product.image}`}
            className="card-img-top"
            alt={product.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>
            <p className="text-muted">{product.category}</p>
            <p>{product.description}</p>
            <p className="fw-bold text-primary">${product.price}</p>
            <p className="text-muted small">Stock: {product.stock}</p>

            <div className="mt-auto d-flex justify-content-between">
              <button
  className="btn btn-sm btn-outline-primary"
  onClick={() => navigate(`/product/${product._id}`)}
>
  See Details
</button>

              <button
  className="btn btn-sm btn-success"
  onClick={() => addToCart(product._id)}
>
  Add to Cart
</button>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>

  {/* Product list above this */}

<div className="d-flex justify-content-between align-items-center">

  {/* Show dropdown */}
  <div className="d-flex align-items-center">
    <label htmlFor="showCount" className="me-2 mb-0">Show</label>
    <select id="showCount" className="form-select form-select-sm" style={{ width: '80px' }}>
      <option value="5">5</option>
      <option value="10" selected>10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>

  {/* Pagination */}
  <nav>
    <ul className="pagination pagination-sm mb-0">
      <li className="page-item"><button className="page-link">{'<'}</button></li>
      <li className="page-item active"><button className="page-link">1</button></li>
      <li className="page-item"><button className="page-link">2</button></li>
      <li className="page-item"><button className="page-link">3</button></li>
      <li className="page-item"><button className="page-link">{'>'}</button></li>
    </ul>
  </nav>

</div>



</div>

    </div>
 
  </div>
  


{/* Subscribe Newsletter Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="bg-light border rounded shadow p-5 text-center">

        {/* Heading */}
        <h5 className="fw-bold mb-2">Subscribe on our newsletter</h5>

        {/* Subtext */}
        <p className="text-muted mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Email Input + Subscribe Button */}
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            style={{ maxWidth: '300px' }}
          />
          <button className="btn btn-primary fw-semibold">Subscribe</button>
        </div>

      </div>
    </div>
  </div>
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
