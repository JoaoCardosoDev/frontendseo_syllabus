'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products');
                setProducts(response.data);
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul className="flex flex-wrap gap-4">
                {products.map((product) => (
                    <li key={product.id}>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img 
                                    src={product.image} 
                                    width={350} 
                                    height={200} 
                                    className="mb-2" 
                                />
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <span>{product.price}</span>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;