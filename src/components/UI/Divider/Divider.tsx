import clsx from 'clsx';
import { FC } from 'react';

interface IDivider {
  text: string;
  classNameWrapper?: string;
}
export const Divider: FC<IDivider> = ({ text, classNameWrapper }) => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center gap-2 w-full',
        classNameWrapper
      )}
    >
      <span className="h-[1px] bg-divider w-[45%]" />
      <span className="text-center  text-foreground-500 text-small">
        {text}
      </span>
      <span className="h-[1px] bg-divider w-[45%]" />
    </div>
  );
};
