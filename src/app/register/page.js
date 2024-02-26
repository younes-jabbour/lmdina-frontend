'use client';
import React from 'react';
import { registerUser } from '../../utils/auth';
import { userAPI } from '../../utils/api';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('');

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleOptionChange = (option) => {
    setRole(option);
  };

  const submitHandler = async () => {
    const payload = getValues();
    console.log(payload);
    const data = await registerUser(payload);
    window.localStorage.setItem('token', data.accessToken);
    window.localStorage.setItem('token', data.accessToken);
    const user = await userAPI.get();
    window.localStorage.setItem('user', JSON.stringify(user));
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full max-w-sm">
        <fieldset>
          <fieldset className="form-group">
            <input
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
              type="text"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              {...register('name', {
                required: 'Please enter name',
              })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </fieldset>

          <fieldset className="form-group">
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
              type="text"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email',
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </fieldset>
          <fieldset className="form-group">
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              {...register('password', {
                required: 'Please enter password',
                minLength: {
                  value: 6,
                  message: 'password is more than 5 chars',
                },
              })}
            />
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
          </fieldset>
          <fieldset className="form-group flex justify-around">
            <div className="flex justify-center items-center space-x-4">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="USER"
                  onChange={() => handleOptionChange('USER')}
                  className="hidden"
                  {...register('option', { required: true })}
                />
                <Image
                  src="/tourist.png"
                  alt="Tourist Image"
                  className="rounded-lg object-cover"
                  width={144}
                  height={144}
                />
                <p className="text-center">Tourist</p>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="COMPANY_OWNER"
                  onChange={() => handleOptionChange('COMPANY_OWNER')}
                  className="hidden"
                  {...register('option', { required: true })}
                />
                <Image
                  src="/company_owner.png"
                  alt="Company Owner Image"
                  className="rounded-lg object-cover"
                  width={200}
                  height={200}
                />
                <p className="text-center -mt-5">Company Owner</p>
              </label>
            </div>
          </fieldset>
          {errors.option && (
            <p className="text-red-500">Please select an option</p>
          )}
          <div className="flex justify-center items-center">
            <button
              className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4  py-2 px-4 rounded"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
