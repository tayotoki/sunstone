import { PasswordInput } from '@/components/UI/Input/PasswordInput';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export const SignupCard = () => {
  return (
    <div className="sm:w-[480px] w-full sm:rounded-xl bg-white py-5 px-10 flex flex-col items-center">
      <span className="text-xl font-semibold pb-4">Зарегистрироваться</span>
      <span className="text-xs pb-6">
        Уже есть аккаунт?{' '}
        <Link href={'/signin'} className="text-primary">
          Авторизуйтесь
        </Link>
      </span>
      <div className="flex flex-col gap-5 w-full pb-10">
        <Input
          variant="bordered"
          color="primary"
          type="email"
          label="Email"
          labelPlacement="outside"
          isClearable
          fullWidth
          classNames={{
            label: 'text-foreground-500',
          }}
        />
        <PasswordInput
          variant="bordered"
          color="primary"
          label="Пароль"
          labelPlacement="outside"
          fullWidth
          classNames={{
            label: 'text-foreground-500',
          }}
        />
        <PasswordInput
          variant="bordered"
          color="primary"
          label="Подтвердить пароль"
          labelPlacement="outside"
          fullWidth
          classNames={{
            label: 'text-foreground-500',
          }}
        />
      </div>
      <Button color="primary" className="text-white" fullWidth size="lg">
        Создать аккаунт
      </Button>
    </div>
  );
};
