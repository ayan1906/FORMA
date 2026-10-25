import React from 'react';

const ProductLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-[#FAF9F6] py-12">
            {/* Loading Spinner Container */}
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>

                {/* Inner Pulse Dot */}
                <div className="absolute w-6 h-6 bg-black rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <div className="mt-6 flex flex-col items-center gap-1">
                <h3 className="text-black font-semibold text-lg tracking-wider uppercase">Loading Products</h3>
                <p className="text-gray-500 text-sm tracking-wide">Please wait while we fetch the latest collection...</p>
            </div>
        </div>
    );
};

export default ProductLoader;