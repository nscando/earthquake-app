import { useState } from 'react';
import { usePost } from '../hooks/usePost';

export const CommentForm = ({ featureId, onCommentAdded }) => {
    const [comment, setComment] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const { isLoading, error, postData } = usePost();

    // Alternar la visibilidad del formulario 
    const toggleForm = () => {
        setShowForm(!showForm);
        setSubmitSuccess(false);
        setComment('');
    };

    // Manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (comment.length < 2 || comment.length > 400) {
            alert('El comentario debe tener entre 2 y 400 caracteres.');
            return;
        }
        await postData(`http://127.0.0.1:3000/api/features/${featureId}/comments`, { body: comment });

        if (!error) {
            setComment('');
            setSubmitSuccess(true);
            if (onCommentAdded) {
                onCommentAdded(comment);
            }
            setTimeout(() => {
                setSubmitSuccess(false);
                setShowForm(false);
            }, 3000);
        } else {
            alert(error);
        }
    };

    return (
        <div>
            <button
                onClick={toggleForm}
                className="text-pink-600 hover:text-pink-800 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            >
                Do a Comment
            </button>
            {showForm && (
                <form className="mt-4 flex items-end gap-2" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-xs w-full mt-2">{error}</p>}
                    {submitSuccess && <p className="text-green-500 text-xs w-full mt-2">Comment successfully submitted</p>}
                    <textarea
                        className="flex-1 p-2 text-sm text-gray-900 bg-gray-300 dark:bg-gray-100 dark:text-pink-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
                        rows="2"
                        placeholder="Añade un comentario..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="p-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 rounded-full text-white transition-colors duration-300"
                        aria-label="Sent Comment"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </form>
            )}
        </div>
    );
};
