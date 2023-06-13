"use client";
import { MdClose } from "react-icons/md";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
 
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="absolute w-full h-full z-10">
        <div className="flex items-center justify-center bg-black w-full h-full bg-opacity-50">
          <div className=" m-4 border border-gray p-4 rounded-lg bg-secondary shadow-lg transition">
            <div className="flex w-full justify-end border-b-2 mb-2 pb-2 border-gray ">
              <MdClose size={24} onClick={onClose} className="cursor-pointer" />
              <span className="sr-only">Close</span>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
