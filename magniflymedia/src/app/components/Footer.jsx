import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='px-12 lg:h-[650px] py-14 xs:h-auto bg-[#804CE1] rounded-t-[50px] flex items-center justify-center flex-col'>
        <img
          src='/images/white.png'
          alt='footer-logo'
          className='w-auto lg:h-32 xs:h-auto'
        />
        <div className='links lg:flex gap-8 xs:grid grid-cols-2 mt-12'>
          <div className='h-12 w-40 border border-[#E1EF40] rounded-full flex items-center justify-center'>
            <Link
              href={'/about'}
              className='text-[#E1EF40] text-xl flex items-center justify-center gap-2'
            >
              About
              <span>
                <img src='/images/arrowup.svg' alt=' srcset=' />
              </span>
            </Link>
          </div>
          <div className='h-12 w-40 border border-[#E1EF40] rounded-full flex items-center justify-center'>
            <Link
              href={'/work'}
              className='text-[#E1EF40] text-xl flex items-center justify-center gap-2 h-12 w-40'
            >
              Work
              <span>
                <img src='/images/arrowup.svg' alt=' srcset=' />
              </span>
            </Link>
          </div>
          <div className='h-12 w-40 border border-[#E1EF40] rounded-full flex items-center justify-center'>
            <Link
              href={'/services'}
              className='text-[#E1EF40] text-xl flex items-center justify-center gap-2'
            >
              Services
              <span>
                <img src='/images/arrowup.svg' alt=' srcset=' />
              </span>
            </Link>
          </div>
          <div className='h-12 w-40 border border-[#E1EF40] rounded-full flex items-center justify-center'>
            <Link
              href={'/contact'}
              className='text-[#E1EF40] text-xl flex items-center justify-center gap-2'
            >
              Contact
              <span>
                <img src='/images/arrowup.svg' alt=' srcset=' />
              </span>
            </Link>
          </div>
        </div>
        <div className='border-[1px] border-[#D997F6] w-full mt-14'></div>
        <div className='footer-menu lg:flex justify-between xs:xs:grid grid-cols-1 w-full'>
          <div className='menu1'>
            <h1 className='text-white text-[36px] font-medium mt-5 mb-4 tracking-[-2px]'>
              Reach us
            </h1>
            <h1 className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'>
              +919819567949 / +919326870161
            </h1>
            <h1 className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'>
              bizz@magnifly.media
            </h1>
            <h1 className='text-white text-[15px] font-normal mt-5 mb-4'>
              Magni-flyed with ❤️ Made in 🇮🇳
            </h1>
          </div>
          <div className='menu2'>
            <h1 className='text-white text-[36px] font-medium mt-5 mb-4 tracking-[-2px]'>
              Social
            </h1>
            <Link
              href={'/'}
              className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'
            >
              instagram
              <span>
                <img src='/images/footer-arrow.png' alt=' srcset=' />
              </span>
            </Link>
            <Link
              href={'/'}
              className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'
            >
              facebook
              <span>
                <img src='/images/footer-arrow.png' alt=' srcset=' />
              </span>
            </Link>
            <Link
              href={'/'}
              className='text-white text-[20px] font-normal flex items-center gap-2'
            >
              linkedin
              <span>
                <img src='/images/footer-arrow.png' alt=' srcset=' />
              </span>
            </Link>
          </div>
          <div className='menu3'>
            <h1 className='text-white text-[36px] font-medium mt-5 mb-4 tracking-[-2px]'>
              Legal
            </h1>
            <Link
              href={'/'}
              className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'
            >
              privacy policy
              <span>
                <img src='/images/footer-arrow.png' alt=' srcset=' />
              </span>
            </Link>
            <Link
              href={'/'}
              className='text-white text-[20px] font-normal flex items-center gap-2 mb-4'
            >
              terms & conditions
              <span>
                <img src='/images/footer-arrow.png' alt=' srcset=' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
