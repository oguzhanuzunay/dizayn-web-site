const Header = ({ text }: { text: string }) => {
  return (
    <div className="mb-5 flex h-5 w-full items-center bg-gray-500 p-5">
      <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">{text}</h2>
    </div>
  );
};

export default Header;
