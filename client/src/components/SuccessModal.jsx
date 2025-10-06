// SuccessModal.jsx
import React from 'react';

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Success!</h2>
        <p className="mb-4 text-gray-700">Successfully saved!</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
