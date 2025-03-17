import SvgIcon from "../icons/SvgIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center bg-midnight justify-between px-28 py-7">
      <div className="flex items-center gap-1">
        <Link to={"/"}>
          <h1 className="text-[1.94rem] text-pink-300">Momentum</h1>
        </Link>
        <SvgIcon />
      </div>
      <div className="flex gap-10">
        <button className="px-5 py-[0.1rem] rounded-[0.31rem] border border-pink-300">
          თანამშრომლის შექმნა
        </button>
        <Link to={"/createTask"}>
          <button className="text-white bg-pink-300 px-[1.45rem] py-[0.5rem] rounded-[0.31rem] ">
            + შექმენი ახალი დავალება
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
