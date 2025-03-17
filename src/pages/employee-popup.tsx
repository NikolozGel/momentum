const EmployeesPopup = () => {
  return (
    <Popover.Root open={isDepartmentsPopupOpen}>
      <Popover.Trigger onClick={() => setIsDepartmentsPopupOpen(true)}>
        <Button
          variant="soft"
          style={{ color: "#8338ec", backgroundColor: "white" }}
        >
          დეპარტამენტი
        </Button>
      </Popover.Trigger>

      <Popover.Content width="688px">
        <form
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
                  name={priority.id.toString()}
                  defaultChecked={selectedPrioritiesIds.includes(priority.id)}
                />
                <Text>{priority.name}</Text>
              </Flex>
            ))}
          </Flex>

          <Button style={{ float: "right" }}>არჩევა</Button>
        </form>
      </Popover.Content>
    </Popover.Root>
  );
};

export default EmployeesPopup;
