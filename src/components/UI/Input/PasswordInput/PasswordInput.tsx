'use client';
import { Input, InputProps } from '@nextui-org/react';
import { forwardRef, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { clsx } from 'clsx';

interface IPasswordInputProps extends InputProps {
  className?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
  ({ className, ...props }, passwordRef) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input
        ref={passwordRef}
        endContent={
          <button
            className="focus-visible:outline-focus focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:rounded-full p-2 m-[-8px]"
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
        {...props}
        type={isVisible ? 'text' : 'password'}
        className={className}
        classNames={{
          input: clsx({ 'text-xl': !isVisible }),
        }}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
