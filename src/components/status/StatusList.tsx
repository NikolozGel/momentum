import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SvgMiniHaburgerIcon from "../icons/SvgMiniHaburgerIcon";
import SvgCommentIcon from "../icons/SvgCommentIcon";

interface IStatus {
  id: number;
  name: string;
}

const colors: Record<number, string> = {
  1: "bg-[#F7BC30]",
  2: "bg-[#FB5607]",
  3: "bg-[#FF006E]",
  4: "bg-[#3A86FF]",
};

const borderColors: Record<number, string> = {
  1: "border-[#F7BC30]",
  2: "border-[#FB5607]",
  3: "border-[#FF006E]",
  4: "border-[#3A86FF]",
};

const StatusList = () => {
  const { data, isLoading } = useQuery<IStatus[]>({
    queryKey: ["statuses"],
    queryFn: () =>
      axios
        .get("https://momentum.redberryinternship.ge/api/statuses")
        .then((response) => response.data),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        {data!.map((status) => (
          <div key={status.id}>
            <div
              className={`w-[381px] py-3 rounded-[10px] text-white ${
                colors[status.id]
              }`}
            >
              <p className="text-[1.25rem] text-center">{status.name}</p>
            </div>

            <div
              className={` mt-8 p-5 border w-[381px] rounded-[15px] ${
                borderColors[status.id]
              }`}
            >
              <div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 border-[0.5px] border-[#FFBE0B] p-1 rounded-sm">
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
                    <p className="text-[0.88rem] w-[320px] mt-3">
                      შექმენი საიტის მთავარი გვერდი, როლმეიც მოიცავს მთავარ
                      სექციებ, ნავიგაციას
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusList;
