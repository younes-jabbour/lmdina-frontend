'use client';
import { useRouter } from 'next/navigation';

import React from 'react';
import { loginUser } from '../../utils/auth';
import { userAPI } from '../../utils/api';
import { useForm } from 'react-hook-form';

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async () => {
    const payload = getValues();
    console.log(payload);
    const data = await loginUser(payload);
    window.localStorage.setItem('token', data.accessToken);
    const user = await userAPI.get();
    window.localStorage.setItem('user', JSON.stringify(user));
    router.push('/');
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full max-w-sm"
        >
          <fieldset>
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

            <div className="flex justify-center items-center">
              <button
                className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4  py-2 px-4 rounded"
                type="submit"
              >
                Log in
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
