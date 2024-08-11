import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import "flowbite";

export const Product = () => {
    const [products, setProducts] = useState<any[]>([]);
    // useEffect(() => {
    //     axios.get('https://ecommerce.routemisr.com/api/v1/products')
    //         .then((res) => {

    //             const updatedProduct = res.data.data.map((product: any) => ({
                  
    //                 ...product,
    //                 liked:false

    //             }));
    //             setProducts(updatedProduct);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // });

    useEffect(() => {
        axios.get('https://ecommerce.routemisr.com/api/v1/products',{params:{
            page:2
        }})
            .then((res) => {
                // Add a `liked` property to each product to manage the heart icon state
                const updatedProducts = res.data.data.map((product: any) => ({
                    ...product,
                    liked: false
                }));
                setProducts(updatedProducts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []); 

    const toggleHeart = (index: number) => {
        
        setProducts(products.map((product, i) =>
            i === index ? { ...product, liked: !product.liked } : product
        ));
    };


    return (
        <>
            <section className=' px-9'>
                <div className="conatiner ms=auto">
                    <h1>Recent Products</h1>
                    <div className="flex mx-auto flex-wrap">
                        {products.map((product,index) => (
                            <div className="relative w-1/6 px-6 m-4 ">
                                <div className="absolute  right-2 ">
                                    <button onClick={() => toggleHeart(index)}><FontAwesomeIcon icon={faHeart} className={product.liked ? 'text-red-500' : 'text-gray-300'} /></button>
                                </div>
                                <img src={product.imageCover} className="w-full h-64" alt={product.name} />
                                <span>{product.category.name}</span>
                                <h2>{product.name}</h2>
                                <div className="flex justify-between ">
                                    <span>${product.price}</span>
                                    <div className="stars space-x-2">
                                       <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                            <span>{product.ratingsAverage}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
};
