import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import SmallHamburgerBtn from "../components/layout/SmallHamburgerBtn";
import { Flex, Text } from "@radix-ui/themes";

const CreateTaskPage = () => {
  return (
    <div className="px-28 mt-14 ">
      <h2 className="text-4xl mb-[1.875rem] cursor-pointer font-semibold">
        შექმენი ახალი დავალება
      </h2>
      <Form.Root className="border border-[#DDD2FF] bg-[#fbf9ff] rounded-sm pt-16 pb-16 pl-14">
        <Flex className="flex  gap-40">
          <Flex className="flex flex-col ">
            <Form.Field name="title">
              <Form.Label>სათაური*</Form.Label>
              <Form.Control asChild className="flex">
                <input
                  type="text"
                  className="bg-white p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px]"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="description" className="my-14">
              <Form.Label>აღწერა</Form.Label>
              <Form.Control asChild={true} className="flex">
                <textarea
                  className="bg-white p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px] resize-none h-38"
                  required
                  placeholder="მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი, რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით."
                />
              </Form.Control>
            </Form.Field>
            <Flex gap="6">
              {/* პრიორიტეტი */}
              <Select.Root>
                <Flex className="flex flex-col">
                  <Text className="text-[#343A40]">პრიორიტეტი*</Text>
                  <Select.Trigger className="bg-white flex items-center justify-between p-3.5 border border-[#DEE2E6] rounded-[5px] w-[259px]">
                    <Flex gap="2" align="center">
                      <Select.Value placeholder="შეარჩიეთ სტატუსი" />
                    </Flex>
                    <Select.Icon>
                      <ChevronDownIcon />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-white border border-[#DEE2E6] rounded-md shadow-md">
                      <Select.Viewport>
                        <Select.Item value="pending">
                          <Select.ItemText>მოლოდინში</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="in_progress">
                          <Select.ItemText>მიმდინარე</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="completed">
                          <Select.ItemText>დასრულებული</Select.ItemText>
                        </Select.Item>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Flex>
              </Select.Root>

              {/* სტატუსი */}
              <Select.Root>
                <Flex className="flex flex-col">
                  <Text className="text-[#343A40]">სტატუსი*</Text>
                  <Select.Trigger className="bg-white flex items-center justify-between p-3.5 border border-[#DEE2E6] rounded-[5px] w-[259px]">
                    <Flex gap="2" align="center">
                      <Select.Value placeholder="შეარჩიეთ სტატუსი" />
                    </Flex>
                    <Select.Icon>
                      <ChevronDownIcon />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      side="bottom"
                      align="start"
                      sideOffset={50}
                      className="bg-white border border-[#DEE2E6] rounded-md shadow-md"
                    >
                      <Select.Viewport>
                        <Select.Item value="low">
                          <Select.ItemText>დაბალი</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="medium">
                          <Select.ItemText>საშუალო</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="high">
                          <Select.ItemText>მაღალი</Select.ItemText>
                        </Select.Item>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Flex>
              </Select.Root>
            </Flex>
          </Flex>

          <Flex className="flex flex-col gap-20">
            <Select.Root>
              <Flex className="flex flex-col">
                <Text className="text-[#343A40]">დეპარტამენტი*</Text>
                <Select.Trigger className="bg-white flex items-center justify-between p-3.5 border border-[#DEE2E6]   rounded-[5px] w-[550px]">
                  <Flex gap="2" align="center">
                    <Select.Value placeholder="შეარჩიეთ სტატუსი" />
                  </Flex>
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    side="bottom"
                    align="start"
                    sideOffset={50}
                    className="bg-white border border-[#DEE2E6] rounded-md shadow-md"
                  >
                    <Select.Viewport>
                      <Select.Item value="low">
                        <Select.ItemText>დაბალი</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="medium">
                        <Select.ItemText>საშუალო</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="high">
                        <Select.ItemText>მაღალი</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Flex>
            </Select.Root>
            <Select.Root>
              <Flex className="flex flex-col">
                <Text className="text-[#343A40]">
                  პასუხისმგებელი თანამშრომელი*
                </Text>
                <Select.Trigger className="bg-white flex items-center justify-between p-3.5 border border-[#DEE2E6]   rounded-[5px] w-[550px]">
                  <Flex gap="2" align="center">
                    <Select.Value placeholder="შეარჩიეთ სტატუსი" />
                  </Flex>
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    side="bottom"
                    align="start"
                    sideOffset={50}
                    className="bg-white border border-[#DEE2E6] rounded-md shadow-md"
                  >
                    <Select.Viewport>
                      <Select.Item value="low">
                        <Select.ItemText>დაბალი</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="medium">
                        <Select.ItemText>საშუალო</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="high">
                        <Select.ItemText>მაღალი</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Flex>
            </Select.Root>
            <Select.Root>
              <Flex className="flex flex-col mt-12">
                <Text className="text-[#343A40]">დედლაინი*</Text>
                <Select.Trigger className="bg-white flex items-center justify-between p-3.5 border border-[#DEE2E6]   rounded-[5px] w-[550px]">
                  <Flex gap="2" align="center">
                    <Select.Value placeholder="შეარჩიეთ სტატუსი" />
                  </Flex>
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    side="bottom"
                    align="start"
                    sideOffset={50}
                    className="bg-white border border-[#DEE2E6] rounded-md shadow-md"
                  >
                    <Select.Viewport>
                      <Select.Item value="low">
                        <Select.ItemText>დაბალი</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="medium">
                        <Select.ItemText>საშუალო</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="high">
                        <Select.ItemText>მაღალი</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Flex>
            </Select.Root>
          </Flex>
        </Flex>
      </Form.Root>

      {/* <div className="border border-[#DDD2FF] rounded-sm pt-16 pb-16 pl-14">
        <form>
          <div className="flex gap-40 items-start">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">სათაური*</label>
              <input
                type="text"
                id="title"
                className="p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px]"
                placeholder="რედბერის ლენდინგის დიზაინი"
              />
              <p className="text-[13px] text-[#08A508] font-[350] leading-tight">
                მინიმუმ 2 სიმბოლო
              </p>
              <p className="text-[13px] text-[#08A508] font-[350] leading-tight">
                მაქსიმუმ 255 სიმბოლო
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="department">დეპარტამენტი*</label>
              <input
                type="text"
                id="department"
                className="p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px]"
                placeholder="დეპარტამენტის დიზაინი"
              />
            </div>
          </div>
          <div className="flex gap-40 mt-14">
            <div className="flex flex-col ">
              <label htmlFor="description">აღწერა</label>
              <textarea
                id="description"
                className="p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px] h-[133px] resize-none"
                placeholder="შეიყვანეთ თქვენი ტექსტი..."
              ></textarea>
              <p className="text-[13px] text-[#08A508] font-[350] leading-tight mt-1">
                მინიმუმ 2 სიმბოლო
              </p>
              <p className="text-[13px] text-[#08A508] font-[350] leading-tight">
                მაქსიმუმ 255 სიმბოლო
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="employee">პასუხისმგებელი თანამშრომელი</label>
              <input
                type="text"
                id="employee"
                className="p-3.5 border border-[#DEE2E6] rounded-[5px] w-[550px]"
                placeholder="დეპარტამენტის დიზაინი"
              />
            </div>
          </div>
          <div className="mt-14">
            <label htmlFor="priority">პრიორიტეტი*</label>
            <input type="text" />
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default CreateTaskPage;
