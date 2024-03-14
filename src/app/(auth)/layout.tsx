import Logo from '@/assets/icons/logo_24.svg';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-3 items-center">
        <Logo />
        <span className="text-lg font-semibold">Sunstone</span>
      </div>
      {children}
    </div>
  );
}
