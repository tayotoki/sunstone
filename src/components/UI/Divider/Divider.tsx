export const Divider = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="h-[1px] bg-divider w-[45%]" />
      <span className="text-center  text-foreground-500 text-small">
        {text}
      </span>
      <span className="h-[1px] bg-divider w-[45%]" />
    </div>
  );
};
