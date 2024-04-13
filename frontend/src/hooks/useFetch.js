import { useEffect, useState } from 'react';

const CACHE_EXPIRATION_MINUTES = 5;
const localCache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    });

    useEffect(() => {
        const getFetch = async () => {
            const cachedEntry = localCache[url];
            if (cachedEntry && (Date.now() - cachedEntry.timestamp < CACHE_EXPIRATION_MINUTES * 60000)) {
                setState(cachedEntry.data);
                console.log('Caché funcionando', cachedEntry.data);
                return;
            }

            setState(prevState => ({ ...prevState, isLoading: true }));

            try {
                const response = await fetch(url);

                await new Promise(resolve => setTimeout(resolve, 1000));

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);


                setState({
                    data,
                    isLoading: false,
                    hasError: false,
                    errorMessage: null,
                });

                localCache[url] = {
                    timestamp: Date.now(),
                    data: {
                        data,
                        isLoading: false,
                        hasError: false,
                        errorMessage: null,
                    },
                };
            } catch (error) {
                console.error("Error fetching data: ", error);
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    errorMessage: error.message || 'Something went wrong',
                });
            }
        };

        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage,
    };
};
