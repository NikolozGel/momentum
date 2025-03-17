import axios from "axios";
import { useEffect, useState } from "react";
import StatusList from "../components/status/StatusList";
import { DepartmentsPopup } from "./departments-popup";
import PrioritiesPopup from "./priority-popup";

// import EmployeesPopup from "./employee-popup";

interface IDepartments {
  id: number;
  name: string;
}

interface IPriorities {
  id: number;
  name: string;
  icon: string;
}

const TaskPage = () => {
  const [departments, setDepartments] = useState<IDepartments[]>([]);
  const [priorities, setPriorities] = useState<IPriorities[]>([]);
  const [selectedDepartmentsIds, setSelectedDepartmentsIds] = useState<
    number[]
  >([]);
  const [selectedPrioritiesIds, setSelectedPrioritiesIds] = useState<number[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [deptRes, prior] = await Promise.all([
          axios.get("https://momentum.redberryinternship.ge/api/departments"),
          axios.get("https://momentum.redberryinternship.ge/api/priorities"),
        ]);
        setDepartments(deptRes.data);
        setPriorities(prior.data);
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-28 mt-14">
      <h2 className="text-4xl mb-14 cursor-pointer font-semibold">
        დავალებების გვერდი
      </h2>
      <div className="flex items-center px-3 py-1.5   justify-between border border-[#DEE2E6] w-[688px] rounded-[10px]">
        <DepartmentsPopup
          departments={departments}
          onSave={setSelectedDepartmentsIds}
          selectedDepartmentsIds={selectedDepartmentsIds}
        />

        <PrioritiesPopup
          priorities={priorities}
          onSave={setSelectedPrioritiesIds}
          selectedPrioritiesIds={selectedPrioritiesIds}
        />
        <p className="">თანამშრომელი</p>
      </div>
      <StatusList />
    </div>
  );
};

export default TaskPage;
