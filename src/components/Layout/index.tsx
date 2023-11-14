interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="h-screen pt-20 bg-white-primary dark:bg-black-primary flex justify-center">
      <div className="max-w-3xl flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Layout;
