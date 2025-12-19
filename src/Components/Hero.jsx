import React from 'react';
import InProgressCard1 from './InProgressCard1';
import InProgressCard2 from './InProgressCard2';
import CustomerTickets from './CustomerTickets';
import {tickets} from '../data/tickets';
import { useState } from 'react';



const inProgressTickets = tickets.filter((t) => t.status === 'In-Progress');
const resolvedTickets = tickets.filter((t)=> t.status === 'Resolved');

const Hero = () => {
    const [activeStatus, setActiveStatus] = useState("All");
    const filteredTickets= activeStatus==="All" ? tickets : tickets.filter((t)=>t.status===activeStatus);

    const inProgressTickets = tickets.filter((t) =>t.status==="In-Progress");
    const resolvedTickets = tickets.filter((t) => t.status==="Resolved");





  return (
    <div className="min-h-screen max-h-full mx-auto max-w-[1440px] border-2 border-red-400 mt-10  ">
        <div className="flex justify-center gap-8">
            <section>
            <InProgressCard1 count={inProgressTickets.length} /> 
            </section>

        <section>
        <InProgressCard2 count={resolvedTickets.length} />
        </section>
      </div>

      <div className="border-2 border-blue-400 mt-20">
        <h5 className="text-2xl">Customer Tickets</h5>

        {/* filter btn er positino */}
        <div className="border-2 border-yellow-500 grid grid-cols-3 gap-1 !container mx-w-[100px]">

        <section>
            {tickets.slice (0, 4).map((ticket => (
                <CustomerTickets key={ticket.id} ticket={ticket} />
            )))}
        </section>

        <div>
            {tickets.slice(4, 8).map((ticket) => (
            <CustomerTickets key={ticket.id} ticket={ticket} />
            ))}
</div>

          <div>
            <p>Task Status</p>
            <p>Resolved: {resolvedTickets.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
