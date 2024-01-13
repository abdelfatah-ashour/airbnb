import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  DatePickerModal,
  registerTranslation,
  en,
} from "react-native-paper-dates";

import According from "components/According";
import Regions from "components/Regions";
import { Separator } from "components/Separator";
import tw from "lib/tailwind";
import { RowComing } from "components/RowComing";
import Search from "assets/icons/IconamoonSearch.svg";

registerTranslation("en", en);

export default function BookVisitExperience() {
  const [indexAccording, setIndexAccording] = useState<number>(1);
  const [region, setRegion] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dates, setDates] = useState();
  const [open, setOpen] = useState(false);
  const [people, setPeople] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [animals, setAnimals] = useState<number>(0);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback((params: any) => {
    setOpen(false);
    setDates(params.dates);
  }, []);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 gap-y-8 mt-4`}>
        <View
          style={[
            tw`${
              indexAccording === 1 ? "shadow-2xl shadow-gray-400" : ""
            } bg-white rounded-xl`,
          ]}
        >
          <According
            open={indexAccording === 1}
            onChangeOpen={() => setIndexAccording(1)}
            header={
              <View style={tw`flex-row justify-between p-3`}>
                {indexAccording === 1 ? (
                  <Text style={tw`font-extrabold text-xl`}>Where to?</Text>
                ) : (
                  <Text style={tw`text-sm text-gray-400 font-medium`}>
                    Where
                  </Text>
                )}
                {region ? (
                  <Text style={tw`font-medium text-xs`}>{region}</Text>
                ) : null}
              </View>
            }
            body={
              <View style={tw`p-3`}>
                <Regions
                  selected={region}
                  onSelect={(value: string) => setRegion(value)}
                />
              </View>
            }
          />
        </View>
        <View
          style={[
            tw`${
              indexAccording === 2 ? "shadow-2xl shadow-gray-400" : ""
            } bg-white rounded-xl`,
          ]}
        >
          <According
            open={indexAccording === 2}
            onChangeOpen={() => {
              setIndexAccording(2);
              setOpen(true);
            }}
            header={
              <View style={tw`flex-row justify-between p-3`}>
                {indexAccording === 2 ? (
                  <Text style={tw`font-extrabold text-xl`}>
                    When's your trip?
                  </Text>
                ) : (
                  <Text style={tw`text-sm text-gray-400 font-medium`}>
                    When
                  </Text>
                )}

                {indexAccording === 2 ? (
                  <Text style={tw`text-xs font-normal`}>{selectedDate}</Text>
                ) : (
                  <Text style={tw`text-xs font-normal`}>Add dates</Text>
                )}
              </View>
            }
            body={
              <View style={tw`p-3`}>
                <DatePickerModal
                  locale="en"
                  mode="multiple"
                  visible={open}
                  onDismiss={onDismiss}
                  dates={dates}
                  onConfirm={onConfirm}
                  dateMode="start"
                  animationType="slide"
                />
              </View>
            }
          />
        </View>
        <View
          style={[
            tw`${
              indexAccording === 3 ? "shadow-2xl shadow-gray-400" : ""
            } bg-white rounded-xl`,
          ]}
        >
          <According
            open={indexAccording === 3}
            onChangeOpen={() => setIndexAccording(3)}
            header={
              <View style={tw`flex-row justify-between p-3`}>
                {indexAccording === 3 ? (
                  <Text style={tw`font-extrabold text-xl`}>Who's coming</Text>
                ) : (
                  <Text style={tw`text-sm text-gray-400 font-medium`}>who</Text>
                )}
                <Text style={tw`text-xs font-normal`}>{selectedDate}</Text>
              </View>
            }
            body={
              <View style={tw`p-3 gap-4`}>
                <RowComing
                  title="Adults"
                  label="Ages 13 or above"
                  count={people}
                  increase={() => setPeople((prev) => ++prev)}
                  decrease={() => setPeople((prev) => --prev)}
                />
                <Separator />
                <RowComing
                  title="Children"
                  label="Ages 2–12"
                  count={children}
                  increase={() => setChildren((prev) => ++prev)}
                  decrease={() => setChildren((prev) => --prev)}
                />
                <Separator />
                <RowComing
                  title="Infants"
                  label="Under 2"
                  count={infants}
                  increase={() => setInfants((prev) => ++prev)}
                  decrease={() => setInfants((prev) => --prev)}
                />
                <Separator />
                <RowComing
                  title="Pets"
                  label="Bringing a service animal?"
                  count={animals}
                  increase={() => setAnimals((prev) => ++prev)}
                  decrease={() => setAnimals((prev) => --prev)}
                />
              </View>
            }
          />
        </View>
      </View>
      <View
        style={tw`flex-row items-center justify-between sticky bottom-0 bg-white border border-gray-200 p-2`}
      >
        <TouchableOpacity>
          <Text style={tw`text-base underline font-semibold text-gray-800`}>
            Clear all
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center p-2 bg-red-600 gap-x-2 rounded-md px-4`}
        >
          <Search width={20} height={20} color={"#fff"} />
          <Text style={tw`text-white font-semibold`}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
