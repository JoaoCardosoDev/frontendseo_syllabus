'use client'

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import axios from 'axios';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductForm = () => {
    const methods = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products', data);
            console.log('Product added:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <h1>Add a New Product</h1>

                <FormField
                    control={methods.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Product Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={methods.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="Image URL" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={methods.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Price" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={methods.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Description</FormLabel>
                            <FormControl className="text-black">
                                <textarea
                                    placeholder="Product Description"
                                    {...field}
                                    className="resize-none w-full h-24"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export default ProductForm;