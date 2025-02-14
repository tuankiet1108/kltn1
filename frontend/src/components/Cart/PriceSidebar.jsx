import React, { useState } from 'react';

const PriceSidebar = ({ cartItems }) => {

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalCuttedPrice = cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0);
    const discount = totalCuttedPrice - totalPrice;
    const shippingCost = totalPrice < 30000000 ? 0 : 15000;

    const totalAmount = totalPrice + shippingCost;

    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">PRICE DETAILS</h1>
                <div className="flex flex-col gap-4 p-6 pb-3">
                    <p className="flex justify-between">Price ({cartItems.length} items) <span>{totalPrice.toLocaleString()}đ</span></p>
                    <p className="flex justify-between">Discount <span className="text-primary-green">-{discount.toLocaleString()}đ</span></p>
                    <p className="flex justify-between">Delivery Charges <span className="text-primary-green">{shippingCost === 0 ? 'FREE' : shippingCost.toLocaleString() + 'đ'}</span></p>

                    {/* Radio buttons for selecting shipping type */}

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Total Amount <span>{totalAmount.toLocaleString()}đ</span></p>
                    <div className="border border-dashed"></div>

                    <p className="font-medium text-primary-green">You will save {discount.toLocaleString()}đ on this order</p>
                </div>
            </div>
        </div>
    );
};

export default PriceSidebar;
