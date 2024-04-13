import { CommentForm } from "./CommentForm";

export const FeatureCard = ({ feature }) => {
    const { title, magnitude, place, tsunami, mag_type, external_id, event_time } = feature.attributes;
    const { longitude, latitude } = feature.attributes.coordinates;
    const comments = feature.comments || [];
    const external_url = feature.links.external_url;


    // Renderizar los comentarios
    const renderComments = () => {
        if (Array.isArray(comments) && comments.length > 0) {
            return (
                <ul className="list-disc pl-5 mt-2">
                    {comments.map(comment => (
                        <li key={comment.id} className="text-blue-500 dark:text-violet-400 mb-1">
                            {comment.body}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <p className="text-blue-500 dark:text-violet-400">No comments yet.</p>;
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg m-4 transition-all duration-300 shadow-xl hover:shadow-2xl font-sans">
            <h2 className="text-lg font-bold text-green-900 dark:text-pink-500 font-secondary">{title}</h2>
            <br />
            <p className="text-gray-700 dark:text-gray-300">Id: <span className="text-blue-500 dark:text-pink-400">{external_id}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Magnitude: <span className="text-blue-500 dark:text-pink-400">{magnitude}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Location: <span className="text-blue-500 dark:text-pink-400">{place}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Type: <span className="text-blue-500 dark:text-pink-400">{mag_type}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Tsunami: <span className="text-blue-500 dark:text-pink-400">{tsunami ? 'Yes' : 'No'}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Coordinates: <span className="text-blue-500 dark:text-pink-400">{latitude}, {longitude}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Event Time: <span className="text-blue-500 dark:text-pink-400">{event_time}</span></p>
            <div className="text-gray-700 dark:text-gray-300">
                <p>Comments:</p>
                {renderComments()}
            </div>
            <CommentForm featureId={feature.id} />
            <br />
            <a href={external_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">More details</a>
        </div>
    );
};
