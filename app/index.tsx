import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { Card } from "@/components/ui/card";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "@/components/ui/actionsheet";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
} from "@/components/ui/checkbox";
import { Button, ButtonText } from "@/components/ui/button";

export default function index() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => {
    setShowActionsheet(false);
  };
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      image: "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-bluetooth-headset-electronics-red-transparent-png-image_6687197.png",
      price: "$49.99",
    },
    {
      id: 2,
      name: "4K Ultra HD Smart TV",
      image: "https://www.smarttech-tv.com/image/cache/catalog/4K_Android_55F3/55F3_4K_AndroidTV_Side-700x500.jpg",
      price: "$399.99",
    },
    {
      id: 3,
      name: "Gaming Mouse with RGB Lighting",
      image: "https://static.vecteezy.com/system/resources/previews/048/218/131/non_2x/gaming-mouse-with-colorful-lights-isolated-from-background-free-png.png",
      price: "$29.99",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      image: "https://pngimg.com/d/keyboard_PNG101839.png",
      price: "$69.99",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      image: "https://pngimg.com/d/wireless_speaker_PNG36.png",
      price: "$59.99",
    },
    {
      id: 6,
      name: "Smart Fitness Band",
      image: "https://png.pngtree.com/png-vector/20240510/ourmid/pngtree-black-silicone-fitness-tracker-watch-with-time-and-date-display-png-image_12433027.png",
      price: "$39.99",
    },
    {
      id: 7,
      name: "Noise-Cancelling Headphones",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1607605440/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/231421_n3yvmu.png?tr=w-600",
      price: "$199.99",
    },
    {
      id: 8,
      name: "USB-C Fast Charger",
      image: "https://www.pngarts.com/files/9/Type-C-Charger-Adapter-PNG-Photo.png",
      price: "$19.99",
    },
    {
      id: 9,
      name: "1080p HD Webcam",
      image: "https://pngimg.com/d/web_camera_PNG101403.png",
      price: "$89.99",
    },
    {
      id: 10,
      name: "External SSD - 1TB",
      image: "https://pics.clipartpng.com/Solid_State_Disk_SSD_PNG_Clipart-759.png",
      price: "$129.99",
    },
  ];

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "#000", light: "#fff" }}
        headerImage={
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1681488240099-f1f8585ef3e5?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="h-[250px] w-full"
          />
        }
      >
        <ThemedView className="flex flex-row items-center gap-2">
          <ThemedText type="title">Merry Christmas!</ThemedText>
          <HelloWave />
        </ThemedView>
        <View className="w-full flex">
          <TouchableOpacity
            className="w-1/2 p-2 rounded-md border-2 border-gray-500"
            onPress={() => setShowActionsheet(true)}
          >
            <Text className="font-bold">Filter</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row flex-wrap p-0">
          {products.map((product) => (
            <View className="w-1/2 p-2" key={product.id}>
              <Card className="p-0 shadow-lg bg-white rounded-lg">
                <Image
                  source={{ uri: product.image }}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <Text className="text-lg font-semibold px-2 pr-4">
                  {product.name}
                </Text>
                <Text className="text-sm text-gray-500 mb-4">
                  {product.price}
                </Text>
                <TouchableOpacity
                  className="bg-yellow-400 text-white py-2 px-4 rounded-b-md"
                  onPress={() => alert(`Added ${product.name} to cart`)}
                >
                  <Text className="text-center font-bold text-lg">Buy Now</Text>
                </TouchableOpacity>
              </Card>
            </View>
          ))}
        </View>
      </ParallaxScrollView>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        className="!border-0"
      >
        <ActionsheetContent className="bg-white rounded-t-xl p-1">
          <ActionsheetDragIndicatorWrapper className="flex justify-center">
            <ActionsheetDragIndicator className="bg-gray-300 w-36 h-2 mt-2 rounded-full" />
          </ActionsheetDragIndicatorWrapper>
          <View className="h-auto w-full p-4">
            {/* Category Filter */}
            <TouchableOpacity>
              <Text className="bg-black w-1/4 text-white text-center rounded-lg p-2 font-bold" onPress={() => handleClose()}>Close</Text>
            </TouchableOpacity>
            <Text className="font-bold text-lg">Filters</Text>
            <View className="mb-4">
              <Text className="font-bold text-lg">Sort By</Text>
              <ScrollView
                className="w-full mt-2"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 16, paddingHorizontal: 0 }} // Adds spacing between items and padding
              >
                <Button
                  size="lg"
                  className="p-2 rounded-xl border-[1.5px] border-gray-500"
                  action="secondary"
                >
                  <ButtonText>Low to High</ButtonText>
                </Button>

                <Button
                  size="lg"
                  className="p-2 rounded-xl border-[1.5px] border-gray-500"
                  action="secondary"
                >
                  <ButtonText>High to Low</ButtonText>
                </Button>

                <Button
                  size="lg"
                  className="p-2 rounded-xl border-[1.5px] border-gray-500"
                  action="primary"
                >
                  <ButtonText>Ratings</ButtonText>
                </Button>

                <Button
                  size="lg"
                  className="p-2 rounded-xl border-[1.5px] border-gray-500"
                  action="primary"
                >
                  <ButtonText>Number of Orders</ButtonText>
                </Button>
              </ScrollView>
            </View>
          </View>

          {/* Apply Button */}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
