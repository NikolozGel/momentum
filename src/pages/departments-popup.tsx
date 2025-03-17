import { Popover, Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import SvgArrow from "../components/icons/SvgArrow";

type DepartmentsPopupProps = {
  selectedDepartmentsIds: number[];
  departments: { id: number; name: string }[];
  onSave: (departmentIds: number[]) => void;
};

export const DepartmentsPopup = ({
  selectedDepartmentsIds,
  departments,
  onSave,
}: DepartmentsPopupProps) => {
  const [isDepartmentsPopupOpen, setIsDepartmentsPopupOpen] = useState(false);

  return (
    <Popover.Root open={isDepartmentsPopupOpen}>
      <Popover.Trigger onClick={() => setIsDepartmentsPopupOpen(true)}>
        <Button
          variant="soft"
          style={{
            color: "#0D0F10",
            backgroundColor: "white",
          }}
        >
          დეპარტამენტი
          <SvgArrow />
        </Button>
      </Popover.Trigger>

      <Popover.Content
        width="480px"
        style={{
          width: "auto",
          minWidth: "688px",
          marginTop: "11px",
          marginLeft: "-12px",
          border: "1px solid #8338EC",
          padding: "35px 25px 15px 25px",
        }}
      >
        <form
          className="p-2"
          action={(formData) => {
            const departmentIds = Array.from(formData.entries())
              .map(([departmentId, value]) =>
                value === "on" ? Number.parseInt(departmentId) : undefined
              )

              .filter(Boolean);

            onSave(departmentIds as number[]);
            setIsDepartmentsPopupOpen(false);
          }}
        >
          <Flex gap="2" direction="column">
            {departments.map((department) => (
              <Flex gap="2" align="center" key={department.id}>
                <Checkbox
                  style={{ color: "red" }}
                  name={department.id.toString()}
                  defaultChecked={selectedDepartmentsIds.includes(
                    department.id
                  )}
                />
                <Text>{department.name}</Text>
              </Flex>
            ))}
          </Flex>

          <Button style={{ float: "right", backgroundColor: "#8338EC" }}>
            არჩევა
          </Button>
        </form>
      </Popover.Content>
    </Popover.Root>
  );
};
