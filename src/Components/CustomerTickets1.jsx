// import React from 'react';

// const CustomerTickets1 = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default CustomerTickets1;

import React from 'react';

const CustomerTickets = ({ticket}) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md border border-gray-200">

      {/* Title + Status */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">
          {ticket.title}
        </h3>

        <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">
        {ticket.description}
      </p>

      {/* Meta */}
      <div className="text-sm text-gray-700 space-y-1">
        <p><span className="font-medium">Ticket #:</span> {ticket.id}</p>
        <p>
          <span className="font-medium">Priority:</span>
          <span className="ml-2 px-2 py-1 rounded bg-orange-100 text-orange-700">
            {ticket.priority}
          </span>
        </p>
        <p><span className="font-medium">Customer:</span> {ticket.customer}</p>
        <p><span className="font-medium">Date:</span> {ticket.createdAt}</p>
      </div>
    </div>
  );
};

export default CustomerTickets;
