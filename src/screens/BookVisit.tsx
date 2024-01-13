import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import CloseICon from "assets/icons/MaterialSymbolsCloseRounded.svg";
import tw from "lib/tailwind";
import SafeArea from "components/SafeArea";
import { useNavigation } from "@react-navigation/native";
import BookVisitExperience from "components/BookVisitExperience";
import BookVisitStays from "components/BookVisitStays";

type CurrentView = "stays" | "experience";

export default function BookVisit() {
  const [currentView, setCurrentView] = useState<CurrentView>("experience");
  const navigation = useNavigation();

  return (
    <SafeArea>
      <View style={tw`flex-1 p-3 bg-gray-50`}>
        <View style={tw`flex-row items-center gap-x-4 my-6`}>
          <TouchableOpacity
            style={tw`bg-white rounded-full p-1 border`}
            onPress={() => navigation.goBack()}
          >
            <CloseICon width={20} height={20} color={"#a1a1a1"} />
          </TouchableOpacity>

          <View style={tw`flex-row justify-center gap-x-4 flex-1`}>
            <TouchableOpacity onPress={() => setCurrentView("stays")}>
              <Text
                style={tw`${
                  currentView === "stays"
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 font-normal"
                }`}
              >
                Stays
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentView("experience")}>
              <Text
                style={tw`${
                  currentView === "experience"
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 font-normal"
                }`}
              >
                Experiences
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {currentView === "experience" ? (
          <BookVisitExperience />
        ) : (
          <BookVisitStays />
        )}
      </View>
    </SafeArea>
  );
}
