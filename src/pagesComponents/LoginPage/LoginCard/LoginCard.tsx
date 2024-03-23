'use client';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Controller, RegisterOptions, useForm } from 'react-hook-form';
import { defaultRules } from '@/app/utils/consts/validation.const';
import { regExpHelper } from '@/app/utils/helpers/regExp.helper';
import { PasswordInput } from '@/components/UI/Input/PasswordInput';

interface IFormType {
  email: string;
  password: string;
}
const formValidation: Record<keyof IFormType, RegisterOptions<IFormType>> = {
  email: {
    ...defaultRules,
    pattern: {
      value: regExpHelper('email'),
      message: 'Некорректный email',
    },
  },
  password: {
    ...defaultRules,
  },
};

export const LoginCard = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm<IFormType>({
    mode: 'all',
    delayError: 1000,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = (data: IFormType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="sm:w-[480px] w-full sm:rounded-xl bg-white py-5 px-10 flex flex-col items-center"
    >
      <span className="text-xl font-semibold pb-4">Войти</span>
      <span className="text-xs pb-6">
        Еще нет аккаунта?{' '}
        <Link href={'/signup'} className="text-primary">
          Зарегистрируйтесь
        </Link>
      </span>
      <div className="flex flex-col gap-5 w-full pb-10">
        <Controller
          control={control}
          name="email"
          rules={formValidation.email}
          render={({ field }) => (
            <Input
              {...field}
              errorMessage={errors.email?.message}
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
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={formValidation.password}
          render={({ field }) => (
            <PasswordInput
              {...field}
              errorMessage={errors.password?.message}
              variant="bordered"
              color="primary"
              label="Пароль"
              labelPlacement="outside"
              fullWidth
              classNames={{
                label: 'text-foreground-500',
              }}
            />
          )}
        />
        <Link href="/restore" className="text-primary text-small">
          Забыли пароль?
        </Link>
      </div>
      <Button
        type="submit"
        color="primary"
        className="text-white"
        fullWidth
        size="lg"
        isDisabled={!isValid}
      >
        Войти
      </Button>
    </form>
  );
};
