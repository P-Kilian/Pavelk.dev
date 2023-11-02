const Header = () => {
  return (
    <header className="p-[20px]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2">
          <h1 className="text-primary">Pavel Kilian</h1>
          <button>H</button>
        </div>
        <button>L/D</button>
      </div>
    </header>
  );
};

export default Header;
