import React from 'react';

const Nav = () => {
  return (
    <div className="w-full h-20 bg-white flex items-center justify-center mx-auto">
      <div className="nav grid grid-cols-2 w-[1440px] items-center">

        <div>
          <h2 className="font-bold text-2xl mr-64">CS - Ticket System</h2>
        </div>

        <div>
          <ul className="flex space-x-3 justify-end items-center">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <button className="btn bg-gradient-to-r from-[#6b56e3] to-[#9f62f2]  rounded-sm px-4  py-2 w-auto text-white font-bold">
              + New Ticket
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
