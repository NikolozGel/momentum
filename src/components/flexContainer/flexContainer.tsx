import SvgCommentIcon from "../icons/SvgCommentIcon";
import SvgMiniHaburgerIcon from "../icons/SvgMiniHaburgerIcon";

const FlexContainer = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[#FFBE0B] p-1 rounded-sm">
              <SvgMiniHaburgerIcon />
              <p className="text-[#FFBE0B] text-sm">საშუალო</p>
            </div>

            <p className="text-sm px-2.5 py-[0.25rem] rounded-2xl bg-[#FF66A8] text-white">
              დიზაინი
            </p>
          </div>

          <div>
            <p className="text-sm">22 იანვ, 2020</p>
          </div>
        </div>
        <div className="mt-7 px-3">
          <h4 className="text-[0.94rem] text-[#212529] font-bold">
            Redberry-ს საიტის ლენდინგის დიზაინი
          </h4>
          <p className="text-[0.88rem] text-[#343A40] w-[320px] mt-3">
            შექმენი საიტის მთავარი გვერდი, როლმეიც მოიცავს მთავარ სექციებ,
            ნავიგაციას
          </p>
        </div>
        <div className="flex justify-between mt-7">
          <div className="bg-green-800 rounded-[31px] w-[31px] h-[31px]"></div>
          <div className="flex gap-1">
            <SvgCommentIcon />
            <p>8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
