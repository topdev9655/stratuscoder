import { Fragment } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Modal(props) {
  return (
    <Fragment>
      {props.modal ? (
        <Fragment>
          <div
            id="defaultModal"
            tabIndex="-1"
            className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal sm:px-6 md:h-full"
          >
            <div className="relative container h-full sm:h-auto sm:max-h-[95%]">
              <div className="relative bg-white px-20 sm:px-6 py-16 sm:mb-10">
                <Image
                  src="/images/close.png"
                  alt="Close"
                  width="40"
                  height="40"
                  className="absolute -top-5 -right-5 cursor-pointer"
                  onClick={props.toggle}
                />
                {props.children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-backdrop backdrop-blur" />
        </Fragment>
      ) : ''}
    </Fragment>
  );
}

export default Modal;