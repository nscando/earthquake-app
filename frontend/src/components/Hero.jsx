
export const Hero = ({ title }) => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-700 dark:to-gray-900 text-white p-12 text-center">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="font-semibold text-xl">Explore real-time data on seismic activities around the globe.</p>
        </div>
    );
}
