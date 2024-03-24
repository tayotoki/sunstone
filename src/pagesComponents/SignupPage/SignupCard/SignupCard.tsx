'use client';
import { PasswordInput } from '@/components/UI/Input/PasswordInput';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Divider } from '@/components/UI/Divider';
import { Controller, useForm } from 'react-hook-form';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { defaultRules } from '@/utils/consts/validation.const';
import { AuthButton } from '@/components/UI/AuthButton/AuthButton';

interface IFormType {
  email: string;
  password: string;
  confirmPassword: string;
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
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[^A-Za-z\s]).{1,}$/,
      message: 'Пароль должен содержать хотя бы одну заглавную букву и цифру',
    },
  },
  confirmPassword: {
    ...defaultRules,
  },
};

export const SignupCard = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
  } = useForm<IFormType>({
    mode: 'onChange',
    delayError: 1000,
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const isSamePassword = password === watch('confirmPassword');

  const handleSignup = (data: IFormType) => {
    if (!isSamePassword) {
      setError('confirmPassword', {
        message: 'Пароли не совпадают',
      });
    } else console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="sm:rounded-xl bg-white py-5 px-10 flex flex-col items-center shadow-lg rounded-xl"
    >
      <span className="text-xl font-semibold pb-4">Зарегистрироваться</span>
      <span className="text-small pb-6">
        Уже есть аккаунт?{' '}
        <Link href={'/signin'} className="text-primary">
          Авторизуйтесь
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
              isInvalid={!!errors.email}
              variant="bordered"
              color="primary"
              type="email"
              label="Email"
              labelPlacement="outside"
              isClearable
              onClear={() => field.onChange('')}
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
        <Controller
          control={control}
          name="confirmPassword"
          rules={formValidation.confirmPassword}
          render={({ field }) => (
            <PasswordInput
              {...field}
              errorMessage={errors.confirmPassword?.message}
              isInvalid={!!errors.confirmPassword}
              variant="bordered"
              color="primary"
              label="Подтвердить пароль"
              labelPlacement="outside"
              fullWidth
              classNames={{
                label: 'text-foreground-500',
              }}
            />
          )}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        className="text-white mb-10"
        fullWidth
        size="lg"
        isDisabled={!isValid}
      >
        Создать аккаунт
      </Button>
      <Divider text="или" classNameWrapper="pb-10" />
      <div className="flex sm:flex-row flex-col justify-between gap-4 w-full">
        <AuthButton
          src="https://authjs.dev/img/providers/google.svg"
          alt="google logo"
          text="Sign with Google"
          width={24}
          height={24}
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
