'use client';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Controller, RegisterOptions, useForm } from 'react-hook-form';
import { defaultRules } from '@/utils/consts/validation.const';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { PasswordInput } from '@/components/UI/Input/PasswordInput';
import { Divider } from '@/components/UI/Divider';

interface IFormType {
  email: string;
  password: string;
}
const formValidation: FormType<IFormType> = {
  email: {
    ...defaultRules,
    pattern: {
      value: regExpHelper('email'),
      message: 'Некорректный email',
    },
  },
  password: {
    ...defaultRules,
    minLength: {
      value: 8,
      message: 'Минимальная длина пароля 8',
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[^A-Za-z\s]).{1,}$/,
      message: 'Пароль должен содержать хотя бы одну заглавную букву и цифру',
    },
  },
};

export const LoginCard = () => {
  const {
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
      className="sm:w-[480px] w-full rounded-xl bg-white py-5 px-10 flex flex-col items-center shadow-lg"
    >
      <span className="text-xl font-semibold pb-4">Войти</span>
      <span className="text-small pb-6">
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
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.email?.message}
              variant="bordered"
              color="primary"
              type="email"
              label="Email"
              labelPlacement="outside"
              isClearable
              onClear={() => field.onChange('')}
              isInvalid={!!errors.email}
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
              isInvalid={!!errors.password}
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
        className="text-white mb-10"
        fullWidth
        size="lg"
        isDisabled={!isValid}
      >
        Войти
      </Button>
      <Divider text="или" classNameWrapper="pb-10" />
      <div className="flex justify-between gap-4 w-full">
        <p>google</p>
        <p>yandex</p>
      </div>
    </form>
  );
};
