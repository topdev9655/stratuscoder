import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto pt-10">
        <div className="flex items-center justify-between pb-10 border-active-30 border-b sm:flex-wrap sm:px-10">
          <div className='sm:w-full'>
            <Link href="/" legacyBehavior>
              <a className="flex items-center sm:my-6">
                <Image src="/images/logo.png" className='sm:w-[60px] sm:h-[60px]' width="40" height="40" />
                <span className="text-lg font-bold text-white ml-3 align-middle sm:text-3xl">Stratuscoder Inc</span>
              </a>
            </Link>
          </div>
          <div className="flex gap-x-8 sm:w-full sm:justify-between sm:my-6">
            <Link href="/services" legacyBehavior>
              <a className="text-white hover:text-active font-semibold sm:font-normal sm:text-2xl">Services</a>
            </Link>
            <Link href="/jobs" legacyBehavior>
              <a className="text-white hover:text-active font-semibold sm:font-normal sm:text-2xl">Jobs</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:text-active font-semibold sm:font-normal sm:text-2xl">Contact</a>
            </Link>
          </div>
          <div className="flex gap-x-10 sm:w-full sm:justify-center sm:my-6">
            <Link href="https://facebook.com">
              <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-active">
                <path d="M22.9516 18.155L23.7808 12.6948H18.5936V9.15301C18.5936 7.65884 19.3169 6.20156 21.6402 6.20156H24V1.55301C24 1.55301 21.8594 1.18408 19.8137 1.18408C15.5397 1.18408 12.7489 3.79981 12.7489 8.53321V12.6948H8V18.155H12.7489V31.3553C13.7023 31.5066 14.6776 31.5841 15.6712 31.5841C16.6648 31.5841 17.6402 31.5066 18.5936 31.3553V18.155H22.9516Z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com">
              <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-active">
                <path d="M0 4.65308C0 3.62345 0.360371 2.77403 1.08108 2.10481C1.80179 1.43556 2.73875 1.10095 3.89189 1.10095C5.02446 1.10095 5.94079 1.4304 6.64093 2.08937C7.36164 2.76891 7.72201 3.65434 7.72201 4.74574C7.72201 5.73416 7.37195 6.55782 6.67181 7.21678C5.9511 7.89632 5.00386 8.23609 3.83012 8.23609H3.79923C2.66666 8.23609 1.75033 7.89632 1.05019 7.21678C0.350054 6.53725 0 5.68267 0 4.65308ZM0.401544 31.6801V11.0469H7.25869V31.6801H0.401544ZM11.0579 31.6801H17.9151V20.1589C17.9151 19.4381 17.9974 18.8821 18.1622 18.4909C18.4504 17.7908 18.888 17.1987 19.4749 16.7149C20.0618 16.2309 20.7979 15.989 21.6834 15.989C23.9897 15.989 25.1429 17.5437 25.1429 20.6531V31.6801H32V19.85C32 16.8024 31.2793 14.4909 29.8378 12.9156C28.3964 11.3403 26.4916 10.5527 24.1236 10.5527C21.4672 10.5527 19.3977 11.6955 17.9151 13.9813V14.043H17.8842L17.9151 13.9813V11.0469H11.0579C11.0991 11.7058 11.1197 13.7547 11.1197 17.1936C11.1197 20.6325 11.0991 25.4613 11.0579 31.6801Z" />
              </svg>
            </Link>
            <Link href="https://twitter.com">
              <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-active">
                <path d="M28.0768 9.95832C28.0892 10.2399 28.0892 10.5087 28.0892 10.7903C28.1015 19.328 21.8289 29.184 10.3579 29.184C6.97462 29.184 3.6531 28.1728 0.800781 26.2784C1.29469 26.3424 1.7886 26.368 2.2825 26.368C5.08543 26.368 7.81427 25.3952 10.0245 23.5904C7.3574 23.5392 5.01134 21.7344 4.19639 19.0976C5.13482 19.2896 6.09794 19.2512 7.01167 18.9824C4.10996 18.3936 2.0232 15.7439 2.01085 12.6591C2.01085 12.6335 2.01085 12.6079 2.01085 12.5823C2.87519 13.0815 3.85066 13.3631 4.83847 13.3887C2.10964 11.4943 1.25765 7.71832 2.91224 4.76151C6.08559 8.80632 10.753 11.2511 15.7662 11.5199C15.2599 9.27992 15.9514 6.92471 17.5689 5.33751C20.0755 2.8927 24.0268 3.0207 26.3975 5.61911C27.7928 5.33751 29.1387 4.79991 30.3611 4.0447C29.8919 5.54231 28.9165 6.80951 27.62 7.61592C28.8547 7.46232 30.0648 7.11671 31.2008 6.60471C30.3611 7.91032 29.2992 9.03672 28.0768 9.95832Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="py-5">
          <p className="text-center text-white text-sm font-normal opacity-60">
            Copyright © 2022 Stratuscoder Inc, Chandler Arizona. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;