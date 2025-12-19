// import React, { useState } from 'react';
// import InProgressCard1 from './InProgressCard1';
// import InProgressCard2 from './InProgressCard2';
// import CustomerTickets from './CustomerTickets';
// import { tickets as allTickets } from '../data/tickets';

// const Hero = () => {
//   // State for left column tickets
//   const [tickets, setTickets] = useState(allTickets);
//   // State for Task Status (right column)
//   const [taskStatusTickets, setTaskStatusTickets] = useState([]);

//   // Click on ticket to move it to Task Status
//   const handleAddToTaskStatus = (ticketId) => {
//     const ticketToAdd = tickets.find(t => t.id === ticketId);
//     if (ticketToAdd) {
//       setTaskStatusTickets(prev => [...prev, ticketToAdd]);
//       setTickets(prev => prev.filter(t => t.id !== ticketId));
//       alert(`Ticket "${ticketToAdd.title}" added to Task Status!`);
//     }
//   };

//   // Click Complete button in Task Status
//   const handleComplete = (ticketId) => {
//     const completedTicket = taskStatusTickets.find(t => t.id === ticketId);
//     if (completedTicket) {
//       alert(`Ticket "${completedTicket.title}" completed!`);
//       // Optionally remove from Task Status if you want:
//       setTaskStatusTickets(prev => prev.filter(t => t.id !== ticketId));
//     }
//   };

//   return (
//     <div className="min-h-screen max-h-full mx-auto max-w-[1440px] border-2 border-red-400 mt-10 p-4">
    
//       {/* Top Cards */}
//       <div className="flex justify-center gap-8 mb-10">
//         <InProgressCard1 count={taskStatusTickets.length} />
//         <InProgressCard2 count={0} /> {/* Resolved can stay 0 if you want */}
//       </div>

//       {/* Three-column layout */}
//       <div className="border-2 border-blue-400 p-4 grid grid-cols-3 gap-4">

//         {/* Left Column: Tickets */}
//         <div>
//           <h5 className="text-xl mb-2">Customer Tickets</h5>
//           {tickets.map(ticket => (
//             <div
//               key={ticket.id}
//               onClick={() => handleAddToTaskStatus(ticket.id)}
//               className="cursor-pointer mb-2"
//             >
//               <CustomerTickets ticket={ticket} />
//             </div>
//           ))}
//         </div>

//         {/* Middle Column: Optional (can leave empty or slice tickets) */}
//         <div>
//           <h5 className="text-xl mb-2">Open / In-Progress</h5>
//           {/* You can slice or show other tickets here */}
//         </div>

//         {/* Right Column: Task Status */}
//         <div>
//           <h5 className="text-xl mb-2">Task Status</h5>
//           {taskStatusTickets.length === 0 ? (
//             <p>No tasks yet.</p>
//           ) : (
//             taskStatusTickets.map(ticket => (
//               <div
//                 key={ticket.id}
//                 className="flex justify-between items-center mb-2 border p-2 rounded"
//               >
//                 <span>{ticket.title}</span>
//                 <button
//                   className="bg-green-500 text-white px-2 py-1 rounded text-sm"
//                   onClick={() => handleComplete(ticket.id)}
//                 >
//                   Complete
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
