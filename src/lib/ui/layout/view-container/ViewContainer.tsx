import { ReactNode } from 'react';

export type ViewContainerProps = {
  title?: string;
  children: ReactNode;
};

export const ViewContainer = ({ title, children }: ViewContainerProps) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
};
