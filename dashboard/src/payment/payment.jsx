import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './payment.css';
import GetData from '../data/getData';

const Payment = () => {
    const { productSlug } = useParams();
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await GetData.getProduct(productSlug);
                setProduct(productData);
                setAmount(productData.price); // Assuming the product data has a price field
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProduct();
    }, [productSlug]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        console.log('Payment submitted', { amount, cardNumber, expiryDate, cvv });
    };

    return (
        <div className="payment-container">
            {product && (
                <div className="product-details">
                    <img src={product.photo} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            )}
            <h2>Payment Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                </div>
                <a
                    href='/'
                >
                    <button>Submit Payment</button>
                </a>
            </form>
        </div>
    );
};

export default Payment;