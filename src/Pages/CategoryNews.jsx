import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    
    
    useEffect(() => {
        const filteredNews = data.filter(news => news.category_id == id);
        console.log(filteredNews);
        
    }, [data, id])
    
    
    
    return (
        <div>
            category {id}
        </div>
    );
};

export default CategoryNews;