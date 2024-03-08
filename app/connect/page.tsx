
'use client';
import React, { FC, FormEvent, useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { addUser } from '../../redux/Slice/userSlice';
import Header from '../../components/header'
import { useRouter } from 'next/navigation'; 

const RegisterPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.users.users);
  const router = useRouter();
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

   
    if (!email || !password || !name) {
      alert('Tous les champs sont requis.');
      return;
    }

    
    dispatch(addUser({ email, name, password } ));

    router.push('/');

    
    setEmail('');
    setName('');
    setPassword('');
  };
  console.log(User)

    return (
        <div>
        <Header/>

    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
        
      <div className="bg-zinc-700 p-6 mx-4 md:mx-0 rounded shadow-lg max-w-lg w-full overflow-auto text-slate-300 border-orange-500">
        <h1 className='my-2 text-4xl flex items-center justify-center text-white font-bold'> Subscription </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            Nom :
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 rounded text-orange-500 font-bold border-orange-500" />
          </label>
          <label className="flex flex-col">
            Email :
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 rounded text-orange-500 font-bold border-orange-500" />
          </label>
          <label className="flex flex-col">
            Mot de passe :
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 rounded text-orange-500 font-bold border-orange-500" />
          </label>
          <button type="submit" className="bg-orange-500 text-white p-2 rounded">Sinscrire</button>
        </form>
      </div>
    </div>
    </div>
    );
};
export default RegisterPage;



