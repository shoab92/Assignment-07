import React from 'react';

const CustomerTickets = () => {
    return (
    <div className="w-full rounded-xl bg-white shadow-md p-6 border border-gray-200">
      {/* Title + Status */}


        <div className="flex justify-between items-center mb-2">
        <h2 className="text-SM font-semibold text-gray-800">
        Login Issues - Can't Access Account
        </h2>
        <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">
            In-Progress
        </span>
        </div>

      {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
        Customer cannot download their January invoice from the billing section. The download button is...
        </p>

      {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
            <span className="font-medium">Ticket #:</span> #1003
        </div>


        <div>
            <span className="font-medium">Priority:</span>
            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 rounded">
            Medium
            </span>
        </div>


        <div>
            <span className="font-medium">Agent:</span> Michael Brown
        </div>

        <div>
            <span className="font-medium">Date:</span> 1/17/2024
        </div>

        </div>

    </div>
    );
};

export default CustomerTickets;
