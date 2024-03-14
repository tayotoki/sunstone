import { PasswordInput } from '@/components/UI/Input/PasswordInput';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export const LoginCard = () => {
  return (
    <div className="sm:w-[480px] w-full sm:rounded-xl bg-white py-5 px-10 flex flex-col items-center">
      <span className="text-xl font-semibold pb-4">Войти</span>
      <span className="text-xs pb-6">
        Еще нет аккаунта?{' '}
        <Link href={'/signup'} className="text-primary">
          Зарегистрируйтесь
        </Link>
      </span>
      <div className="flex flex-col gap-5 w-full">
        <Input
          type="email"
          label="Email"
          labelPlacement="outside"
          isClearable
          fullWidth
        />
        <PasswordInput label="Пароль" labelPlacement="outside" fullWidth />
      </div>
    </div>
  );
};
