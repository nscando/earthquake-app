import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    });

    useEffect(() => {
        if (!url) return;

        const getFetch = async () => {
            setState({ ...state, isLoading: true });

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setState({
                    data,
                    isLoading: false,
                    hasError: false,
                    errorMessage: null,
                });
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
