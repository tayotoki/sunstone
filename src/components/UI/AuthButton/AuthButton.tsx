import Image from 'next/image';
import { ComponentPropsWithoutRef, FC, MouseEvent } from 'react';

interface IAuthButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof Image>, 'onClick'> {
  text?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const AuthButton: FC<IAuthButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <div
      className="flex py-4 px-6 mx-auto font-semibold items-center gap-2 border rounded-md hover:scale-105 transition-all cursor-pointer"
      onClick={onClick}
    >
      <Image {...props} />
      <span>{text}</span>
    </div>
  );
};
