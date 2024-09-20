// InfiniteScroll.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const ITEMS_PER_PAGE = 10;

const InfiniteScroll = ({ renderItem }) => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); // State for loading indicator

    const fetchItems = useCallback(async () => {
        setLoading(true); // Show loading indicator
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`
            );
            setItems((prevItems) => [...prevItems, ...response.data]);
            setHasMore(response.data.length === ITEMS_PER_PAGE);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false); // Hide loading indicator after data is fetched
    }, [page]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100
        ) {
            if (hasMore && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div>
            {items.map((item) => renderItem(item))}
            {loading && <div className="loading">Loading...</div>} {/* Loading indicator */}
            {!hasMore && <p>No more items</p>}
        </div>
    );
};

export default InfiniteScroll;
