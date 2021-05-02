import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function Home() {
    const cardStyle = {
        width: '14rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '30px'
    }
    const cartIconWrapperStyle = {
    position: 'absolute',
       right: '2%',
       top : '2%',
       width: '80px'
    }
    return (
        <div className="container">
            <div style={cartIconWrapperStyle}>
                <img src="http://www.clker.com/cliparts/T/P/W/w/1/q/shopping-cart-hi.png" width="100%"/>
            </div>
            <h1>Home Component</h1>
             <div className="card p-3" style={cardStyle}>
                <img className="card-img-top" src="https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">IPhone</h5>
                        <p className="card-text">Price = 1000$</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
            </div>
       </div>
    )
}
