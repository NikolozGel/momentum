import SvgIcon from "../icons/SvgIcon";

const Header = () => {
  return (
    <header className="flex items-center bg-midnight justify-between px-28 pt-7">
      <div className="flex gap-1">
        <h1 className="text-3xl text-pink-300 font-display font-bold">
          Momentum
        </h1>
        <SvgIcon />
      </div>
      <div className="flex gap-10">
        <button className="px-5 py-2.5 rounded-[0.31rem] border border-pink-300">
          თანამშრომლის შექმნა
        </button>

        <button className="text-white bg-pink-300 px-5 py-2.5 rounded-[0.31rem] ">
          + შექმენი ახალი დავალება
        </button>
      </div>
    </header>
  );
};

export default Header;
