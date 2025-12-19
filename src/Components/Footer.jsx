import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black h-full  w-full'>
            <div className=' mx-auto  h-[400px] w-[1440px] text-white grid grid-cols-5 gap-3 justify-center p-16'>
                <div>
                    <h1 className='font-bold text-xl mb-2'>CS - Ticket System</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='ml-[80px]'>
                    <h1 className='font-bold text-xl mb-2'>Company</h1>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div className='ml-[50px]'>
                    <h1 className='font-bold text-xl mb-2'>Services</h1>
                    <p>Product and Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>
                <div  className='ml-[50px]'> 
                    <h1 className='font-bold text-xl mb-2'>Information</h1>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                    <p>Join Us</p>
                </div>
                <div  className='ml-[50px]'>
                    <h1 className='font-bold text-xl mb-2'>Social Links</h1>
                    <p>@CS — Ticket System</p>
                    <p>@CS — Ticket System</p>
                    <p>@CS — Ticket System</p>
                    <p>support@cst.com</p>


                </div>
            </div>
        </div>
    );
};

export default Footer;