import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const RoomBox = ({ image }) => {
  return (
    <View style={styles.roomBox}>
      <Image
        style={{ height: "80%", width: "80%", resizeMode: "contain" }}
        source={image}
      />
    </View>
  );
};

const DeviceBox = ({ deviceName, isOn, changeDeviceStatus }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF6A5",
        height: 100,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: !isOn ? "red" : "green",
            height: 20,
            width: 20,
          }}
        />
        <View style={{ width: 200 }}>
          <Text style={{ fontSize: 20 }}>{deviceName}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 80,
            width: 45,
            marginLeft: 70,
            flexDirection: "column",
          }}
        >
          <Button
            onPress={() => {
              if (!isOn) {
                changeDeviceStatus(true);
              }
            }}
            title="On"
          />
          <Button
            onPress={() => {
              if (isOn) {
                changeDeviceStatus(false);
              }
            }}
            title="Off"
          />
        </View>
      </View>
    </View>
  );
};

const HeaderText = ({ text }) => {
  return (
    <Text
      style={{
        fontSize: 28,
        fontWeight: "bold",
        marginTop: "5%",
        alignSelf: "flex-start",
      }}
    >
      {text}
    </Text>
  );
};

export default function App() {
  const livingRoom = require("./assets/living-room.png");
  const bedRoom = require("./assets/bed.png");
  const kitchen = require("./assets/kitchen.png");

  const smartHome = require("./assets/house.png");

  const [devicesOn, setDevicesOn] = useState(0);

  const [devices, setDevices] = useState({
    livingRoom: false,
    heater: false,
    tv: false,
  });

  function changeDeviceStatusCount(turnedOn) {
    if (turnedOn) {
      setDevicesOn(devicesOn + 1);
    } else {
      setDevicesOn(devicesOn - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "90%", alignItems: "center" }}>
        <View
          style={{
            height: "10%",
            flexDirection: "row",
            alignContent: "flex-start",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ height: 60, width: 60 }}>
            <Image
              style={{ height: "100%", width: "100%", resizeMode: "contain" }}
              source={smartHome}
            />
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: "10%",
              color: "#358584",
            }}
          >
            Smarthome
          </Text>
        </View>

        <View
          style={{ alignContent: "flex-start", width: "100%", height: "7%" }}
        >
          <HeaderText text="Rooms" />
        </View>
        <View style={{ flexWrap: "wrap", width: "100%" }}>
          <View style={styles.containerTwo}>
            <RoomBox image={bedRoom} />
            <RoomBox image={livingRoom} />
            <RoomBox image={kitchen} />
          </View>
        </View>

        <View style={styles.devicesContainer}>
          <HeaderText text="Devices" />
          <DeviceBox
            deviceName="Living Room Lamp"
            isOn={devices.livingRoom}
            changeDeviceStatus={(turnedOn) => {
              setDevices({ ...devices, livingRoom: turnedOn });
              changeDeviceStatusCount(turnedOn);
            }}
          />

          <DeviceBox
            deviceName="Heater"
            isOn={devices.heater}
            changeDeviceStatus={(turnedOn) => {
              setDevices({ ...devices, heater: turnedOn });
              changeDeviceStatusCount(turnedOn);
            }}
          />
          <DeviceBox
            deviceName="TV"
            isOn={devices.tv}
            changeDeviceStatus={(turnedOn) => {
              setDevices({ ...devices, tv: turnedOn });
              changeDeviceStatusCount(turnedOn);
            }}
          />

          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Total Devices On:{" "}
            <Text style={{ fontWeight: "normal" }}>{devicesOn}</Text>
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  containerTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  roomBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41BAB9",
    height: 130,
    width: 120,
  },

  devicesContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "55%",
  },
});
