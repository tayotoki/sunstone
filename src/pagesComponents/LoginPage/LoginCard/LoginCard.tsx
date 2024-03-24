'use client';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Controller, RegisterOptions, useForm } from 'react-hook-form';
import { defaultRules } from '@/utils/consts/validation.const';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { PasswordInput } from '@/components/UI/Input/PasswordInput';
import { Divider } from '@/components/UI/Divider';
import Image from 'next/image';
import { AuthButton } from '@/components/UI/AuthButton/AuthButton';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const router = useRouter();
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

  const handleLogin = async (data: IFormType) => {
    setIsLoading(true);
    const res = await signIn('CredentialsSignIn', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res && !res.error) {
      setIsLoading(false);
      router.push(callbackUrl);
    } else console.log(res);
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className=" rounded-xl bg-white py-5 px-10 flex flex-col items-center shadow-lg"
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
        isLoading={isLoading}
      >
        Войти
      </Button>
      <Divider text="или" classNameWrapper="pb-10" />
      <div className="flex sm:flex-row flex-col justify-between gap-4 w-full">
        <AuthButton
          src="https://authjs.dev/img/providers/google.svg"
          alt="google logo"
          text="Sign with Google"
          width={24}
          height={24}
          onClick={() => signIn('google', { callbackUrl })}
        />
        <AuthButton
          src="https://authjs.dev/img/providers/yandex.svg"
          alt="yandex logo"
          text="Sign with Yandex"
          width={24}
          height={24}
        />
      </div>
    </form>
  );
};
