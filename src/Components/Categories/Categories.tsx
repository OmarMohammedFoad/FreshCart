import { useEffect, useState } from 'react';
import axios from 'axios';

export const Categories = () => {
    const [category, setCategory] = useState<any[]>([]);

    async function getCategories() {
        try {
            const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
            setCategory(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <section className='py-36 px-9'>
            <div className="container mx-auto">
                <h1 className="text-2xl  mb-6 text-center font-encode-sans-expanded  font-[400]">Shop Popular Categoriesr</h1>
                <div className="overflow-hidden">
                    <div className="flex scroll-container">
                        {category.map((item) => (
                            <div key={item.id} className="flex-shrink-0 w-1/6 px-1">
                                <img className='w-full h-[70%] object-cover rounded' src={item.image} alt={item.name} />
                                <h2 className="text-center mt-2 font-encode-sans-expanded font-[700]">{item.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
