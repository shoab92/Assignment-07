import React from 'react';
import InProgressCard1 from './InProgressCard1';
import InProgressCard2 from './InProgressCard2';
import CustomerTickets from './CustomerTickets';

const Hero = () => {
    return (
    <div className="min-h-screen max-h-full mx-auto max-w-[1440px] border-2 border-red-400 mt-10  ">
        <div className="flex justify-center gap-8">
        <section>
          <InProgressCard1 />
        </section>

        <section>
          <InProgressCard2 />
        </section>
        </div>

        <div className="border-2 border-blue-400 mt-20">
            <h5 className="text-2xl">Customer Tickets</h5>
            <div className="border-2 border-yellow-500 grid grid-cols-3 gap-1 !container mx-w-[100px]">

            <section>
            <CustomerTickets />
            <CustomerTickets />
            <CustomerTickets />
            <CustomerTickets />
            </section>

            <div className="">
            <CustomerTickets />
            <CustomerTickets />
            <CustomerTickets />
            <CustomerTickets />

            </div>

            <div>
            <p>Task Status</p>
            <p>Resolved task</p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Hero;
