import React, { createRef, useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Camera, useCameraDevices, useFrameProcessor } from "react-native-vision-camera";
import { DBRConfig, decode } from "vision-camera-dynamsoft-barcode-reader";
import * as REA from "react-native-reanimated";
import { TextResult } from "vision-camera-dynamsoft-barcode-reader";
import { useWatch } from "../utils/utils";
import Lottie from "lottie-react-native";
import { rem } from "../global/rem";

export const QRScan = (): React.Component => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [barcodeResults, setBarcodeResults] = React.useState([]);
  const [isOnShot, setIsOnShot] = React.useState(true);
  const [lastTaken, setLastTaken] = React.useState("");

  const camera = createRef();

  const devices = useCameraDevices();
  const device = devices.back;


  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    let config = {};
    config.template = "{\"ImageParameter\":{\"BarcodeFormatIds\":[\"BF_QR_CODE\"],\"Description\":\"\",\"Name\":\"Settings\"},\"Version\":\"3.0\"}"; //scan qrcode only

    let results = decode(frame, config);
    REA.runOnJS(setBarcodeResults)(results);
  }, []);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "authorized");
    })();
  }, []);

  useWatch(barcodeResults, async () => {
    // if (!setIsOnShot) return;
    // // console.log(barcodeResults);
    // if (barcodeResults.length >= 1) {
    //   // do something....
    //   const photo = await camera.current.takePhoto({
    //     flash: "on",
    //   });
    //   setIsOnShot(false);
    //   setLastTaken("file://" + photo.path);
    // }
  });

  if (device == null) {
    return (
      <View>
        <Text>没有你的摄像头！</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Camera device={device}
              isActive={false}
        // style={StyleSheet.absoluteFill}
              style={[styles.camera, isOnShot ? {} : { display: "none" }]}
              frameProcessor={frameProcessor}
              frameProcessorFps={1}
              photo={true}
              ref={camera}
      />
      <View style={styles.lottie}>
        <View style={styles.lottie_wrapper}>
          <Lottie
            source={require("../assets/99062-green-scan.json")}
            autoPlay
            loop
          />
        </View>
        <Text style={styles.tip}>请把二维码尽可能居中放置以便扫描</Text>
      </View>
      {/*<View style={[styles.overview, isOnShot ? { display: "none" } : {}]}>*/}
      {/*  <Image source={""} style={styles.overview} />*/}
      {/*</View>*/}
      <View style={styles.footer}>

      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  camera: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 123,
  },
  lottie: {
    position: "absolute",
    width: "100%",
    height: "90%",
    zIndex: 233,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie_wrapper: {
    width: "100%",
    height: "50%",
  },
  overview: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: "10%",
    bottom: 0,
    backgroundColor: "#111",
    zIndex: 567,
  },
  tip: {
    fontSize: rem(14),
    color: "#e1e1e1",
  },
});
