'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; 
import { RootState } from '../../redux/store'; 
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Slice/authSlice';
import Header from '../../components/header';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state: RootState) => state.users.users); 
  const router = useRouter(); 
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
    if (!email || !password) {
      alert('Tous les champs sont requis.');
      return;
    }

    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Bienvenue ' + user.name + ' !'); 
      dispatch(logIn());
      router.push('/'); 
    } else {
      alert('Email ou mot de passe incorrect.');
    }

    
    setEmail('');
    setPassword('');
  };
  
  return (
    <div>
      <Header/>

    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <div className="bg-white p-6 mx-4 md:mx-0 rounded shadow-lg max-w-lg w-full bg-zinc-700 overflow-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col text-white">
            Email :
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 rounded" />
          </label>
          <label className="flex flex-col text-white">
            Mot de passe :
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 rounded" />
          </label>
          <button type="submit" className="bg-orange-500 text-white p-2 rounded">Se connecter</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;