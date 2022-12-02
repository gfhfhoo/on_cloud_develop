import React, { createRef, useEffect, useRef } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Camera, useCameraDevices, useFrameProcessor } from "react-native-vision-camera";
import { decode } from "vision-camera-dynamsoft-barcode-reader";
import * as REA from "react-native-reanimated";
import { TextResult } from "vision-camera-dynamsoft-barcode-reader";
import { useWatch } from "../utils/utils";
import Lottie from "lottie-react-native";
import { rem } from "../global/rem";
import { useNavigation } from "@react-navigation/native";

export const QRScan = (): React.Component => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [barcodeResults, setBarcodeResults] = React.useState([]);
  const [isOnShot, setIsOnShot] = React.useState(true);
  const [lastTaken, setLastTaken] = React.useState("");
  const [qrCoord, setQrCoord] = React.useState([]);

  const [frameH, setFrameH] = React.useState(720);
  const [frameW, setFrameW] = React.useState(1280);

  const navigator_ = useNavigation();

  const camera = createRef();

  const devices = useCameraDevices();
  const device = devices.back;

  const windowH = Dimensions.get("window").height;
  const windowW = Dimensions.get("window").width;

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    let config = {};
    config.template = "{\"ImageParameter\":{\"BarcodeFormatIds\":[\"BF_QR_CODE\"],\"Description\":\"\",\"Name\":\"Settings\"},\"Version\":\"3.0\"}"; //scan qrcode only

    let results = decode(frame, config);
    REA.runOnJS(setBarcodeResults)(results);
    REA.runOnJS(setFrameW)(frame.width);
    REA.runOnJS(setFrameH)(frame.height);
  }, []);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "authorized");
    })();
  }, []);

  useEffect(() => {
    navigator_.addListener("beforeRemove", (e) => {
      console.log("getinside");
      if (!isOnShot) {
        setQrCoord([]);
        setIsOnShot(true);
      } else {
        navigator_.dispatch(e.data.action);
      }
    });
  }, [navigator_, isOnShot]);

  const calculate_xy = (result: TextResult) => {
    const cx = windowW * (result.x1 + result.x2 + result.x3 + resultb.x4) / 4 / frameH;
    const cy = windowH * (result.y1 + result.y2 + result.y3 + result.y4) / 4 / frameW;
    return [cx, cy];
  };

  useWatch(barcodeResults, async () => {
    if (!setIsOnShot) return;
    // console.log(barcodeResults);
    if (barcodeResults.length >= 1) {
      let arr = [];
      barcodeResults.forEach(value => {
        arr.push(calculate_xy(value));
      });
      setQrCoord(arr);
      // do something....
      const photo = await camera.current.takeSnapshot({
        quality: 85,
        skipMetadata: true,
      });
      setLastTaken("file://" + photo.path);
      setIsOnShot(false);
    } else {
      setQrCoord([]);
      setIsOnShot(true);
    }
  });

  if (device == null) {
    return (
      <View>
        <Text>没有你的摄像头！</Text>
      </View>
    );
  }

  const SnapView = () => {
    if (!isOnShot && lastTaken !== "") {
      return (
        <Image source={{ uri: lastTaken }}
               style={styles.overview}
        />
      );
    }
  };

  const MyLottie = () => {
    if (isOnShot) {
      return (
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
      );
    }
  };


  return (
    <View style={styles.container}>
      <Camera device={device}
              isActive={isOnShot}
        // style={StyleSheet.absoluteFill}
              style={[styles.camera, isOnShot ? {} : { display: "none" }]}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
              photo={true}
              ref={camera}
      />
      <MyLottie />
      <View style={styles.recognition_wrapper}>
        {
          qrCoord.map(value => {
            return (
              <View style={[
                styles.recognition0, { left: value[0] - 10, top: value[1] - 10 },
              ]}>
                <View style={styles.recognition1} />
                <View style={styles.recognition2} />
              </View>
            );
          })
        }
      </View>
      {
        // snapshot view
        <SnapView />
      }
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
  recognition_wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 456,
  },
  recognition0: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  recognition1: {
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#147be7",
    zIndex: 2,
  },
  recognition2: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
    zIndex: 3,
  },
});
