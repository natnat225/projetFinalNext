import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 mx-4 md:mx-0 rounded shadow-lg max-w-lg w-full overflow-auto">
                <button onClick={onClose} className="float-right">Fermer</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;