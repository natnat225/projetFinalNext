// RegisterModal.tsx
import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password || !name) {
      setErrorMessage('Tous les champs sont requis.'); 
      return;
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-800 p-6 mx-4 md:mx-0 rounded shadow-lg max-w-lg w-full overflow-auto text-slate-400">
        <button onClick={onClose} className="float-right"><XCircle/></button>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            Nom :
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 rounded" />
          </label>
          <label className="flex flex-col">
            Email :
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 rounded" />
          </label>
          <label className="flex flex-col">
            Mot de passe :
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 rounded" />
          </label>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="bg-orange-500 text-white p-2 rounded">Sinscrire</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;