import { useState } from 'react';
import { Paginator } from './Paginator';
import { FeatureCard } from './FeatureCard';
import { useFetch } from '../hooks/useFetch';

export const FeatureList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, hasError, errorMessage } = useFetch(`http://localhost:3000/api/features?page=${currentPage}`);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (hasError) return <p className="text-center text-red-500">Error: There is a connection issue with your API. ({errorMessage})</p>;
    if (!data || data.data.length === 0) {
        return (
            <div className="text-center mt-10">
                <p>No features available. Please check the <a href="https://github.com/yourUsername/yourRepository" className="text-blue-500 hover:text-blue-700">GitHub repository README</a> for instructions on how to populate the database.</p>
            </div>
        );
    }

    return (
        <>
            <Paginator
                currentPage={currentPage}
                totalItems={data.pagination.total}
                itemsPerPage={data.pagination.per_page}
                onPageChange={handlePageChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.data.map(feature => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </>
    );
};
