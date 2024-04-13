import React from 'react'

export const Paginator = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center mt-2 space-x-2">
            {pages.map(page => (
                <button
                    key={page}
                    className={`px-4 py-2 rounded-full transition-colors duration-300 
               ${currentPage === page
                            ? 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500'
                            : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>

            ))}
        </div>
    );
};
