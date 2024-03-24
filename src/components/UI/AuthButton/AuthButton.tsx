import Image from 'next/image';
import { ComponentPropsWithoutRef, FC } from 'react';

interface IAuthButtonProps extends ComponentPropsWithoutRef<typeof Image> {
  text?: string;
}

export const AuthButton: FC<IAuthButtonProps> = ({ text, ...props }) => {
  return (
    <div className="flex py-4 px-6 mx-auto font-semibold items-center gap-2 border rounded-md hover:scale-105 transition-all cursor-pointer">
      <Image {...props} />
      <span>{text}</span>
    </div>
  );
};
