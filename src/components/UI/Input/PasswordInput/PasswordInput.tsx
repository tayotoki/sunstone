'use client';
import { Input, InputProps } from '@nextui-org/react';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { clsx } from 'clsx';

interface IPasswordInputProps extends InputProps {
  className?: string;
}

export default function PasswordInput({
  className,
  ...props
}: IPasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IoEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className={className}
      classNames={{
        ...props.classNames,
        input: clsx(isVisible ? 'text-small' : 'text-xl'),
      }}
      {...props}
    />
  );
}
