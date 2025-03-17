import { Popover, Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import SvgArrow from "../components/icons/SvgArrow";

type PrioritiessPopupProps = {
  selectedPrioritiesIds: number[];
  priorities: { id: number; name: string }[];
  onSave: (departmentIds: number[]) => void;
};

const PrioritiesPopup = ({
  selectedPrioritiesIds,
  priorities,
  onSave,
}: PrioritiessPopupProps) => {
  const [isDepartmentsPopupOpen, setIsDepartmentsPopupOpen] = useState(false);
  return (
    <Popover.Root open={isDepartmentsPopupOpen}>
      <Popover.Trigger onClick={() => setIsDepartmentsPopupOpen(true)}>
        <Button
          variant="soft"
          style={{ color: "#0D0F10", backgroundColor: "white" }}
        >
          პრიორიტეტი
          <SvgArrow />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        style={{
          width: "auto",
          height: "308px",
          minWidth: "688px",
          marginTop: "11px",
          marginLeft: "-287px",
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
            {priorities.map((priority) => (
              <Flex gap="2" align="center" key={priority.id}>
                <Checkbox
                  style={{ color: "red" }}
                  name={priority.id.toString()}
                  defaultChecked={selectedPrioritiesIds.includes(priority.id)}
                />
                <Text>{priority.name}</Text>
              </Flex>
            ))}
          </Flex>

          <Button
            style={{
              float: "right",
              backgroundColor: "#8338EC",
              marginTop: "128px",
            }}
          >
            არჩევა
          </Button>
        </form>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PrioritiesPopup;
