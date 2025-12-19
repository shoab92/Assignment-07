// import React from 'react';

// const CustomerTickets1 = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default CustomerTickets1;
<section>
  {tickets.slice(0, 4).map((ticket => (
    <CustomerTickets key={ticket.id} ticket={ticket} />
  ))}
</section>
