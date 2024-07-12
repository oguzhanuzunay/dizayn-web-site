const Header = ({ text }: { text: string }) => {
  return (
    <div className="mb-5 mt-9 flex h-5 w-full items-center justify-center rounded-lg p-1 pr-14">
      <h2 className="font-spaceGrotesk text-3xl font-bold text-black">{text.toUpperCase()}</h2>
    </div>
  );
};

export default Header;
