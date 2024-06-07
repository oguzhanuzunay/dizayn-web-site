'use client';
import MapComponent from '@/components/MapComponent/MapComponent';

const Bayilerimiz = () => {
  return (
    <div>
      <div className="mb-0 flex h-5 w-full items-center bg-gray-500 p-5">
        <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">Bayilerimiz</h2>
      </div>
      <div>
        <MapComponent show />
      </div>
    </div>
  );
};

export default Bayilerimiz;
