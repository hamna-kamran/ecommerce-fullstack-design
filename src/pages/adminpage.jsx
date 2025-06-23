import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    stock: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err.message);
    }
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // Edit existing product
        await axios.put(`http://localhost:5000/api/products/${editId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product updated');
      } else {
        // Add new product
        await axios.post('http://localhost:5000/api/products', form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product added');
      }

      setForm({ name: '', price: '', image: '', description: '', category: '', stock: '' });
      setEditId(null);
      fetchProducts();
    } catch (err) {
      alert('Action failed');
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product deleted');
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  const startEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
    setEditId(product._id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">👑 Admin Dashboard</h2>
      <p className="text-center">Hello, <strong>{user?.name || 'Admin'}</strong>!</p>

      {/* Form */}
      <form className="card p-4 shadow-sm mb-5" onSubmit={handleAddOrUpdate}>
        <h4>{editId ? 'Edit Product' : 'Add New Product'}</h4>

        <input type="text" className="form-control mb-2" placeholder="Name" required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input type="number" className="form-control mb-2" placeholder="Price" required
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input type="text" className="form-control mb-2" placeholder="Image Path (e.g., images/img.jpg)" required
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input type="text" className="form-control mb-2" placeholder="Category" required
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input type="text" className="form-control mb-2" placeholder="Description" required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input type="number" className="form-control mb-3" placeholder="Stock" required
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <button type="submit" className="btn btn-success w-100">
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* Product Grid */}
      <div className="row">
        {products.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          products.map((product) => (
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
                    <button className="btn btn-sm btn-warning" onClick={() => startEdit(product)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(product._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
