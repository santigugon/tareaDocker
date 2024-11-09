import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import database from "@react-native-firebase/database";
import { firebase } from "@react-native-firebase/database";
import { ThemeProvider } from "@ui-kitten/components";
import {
  Button,
  Icon,
  IconElement,
  List,
  ListItem,
} from "@ui-kitten/components";

interface IListItem {
  title: string;
  description: string;
}

const data = new Array(8).fill({
  title: "Title for Item",
  description: "Description for Item",
});
export default function HomeScreen() {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("firebase", firebase);
    firebase.initializeApp({
      apiKey: "AIzaSyDoWmsR2NE-fXTQWe13d0tvr-FjwQUMgow",
      databaseURL: "https://tarea-firebase-mobil-default-rtdb.firebaseio.com/",
      messagingSenderId: "910290823716",
      storageBucket: "tarea-firebase-mobil.firebasestorage.app",
      projectId: "tarea-firebase-mobil",
      appId: "1:910290823716:android:a783d66cb2e5151b37c6b1",
    });
    const reference = database()
      .ref("/")
      .once("value")
      .then((snapshot) => {
        console.log("User data: ", snapshot.val());
        setUser(snapshot.val()[1].coche);
      });
    // reference.set({
    //   name: 'Ada Lovelace',
    //   age: 31,
    // });
    // reference.on('value', snapshot => {
    //   console.log('User data: ', snapshot.val());
    // });
  }, []);

  // const renderItemAccessory = (): React.ReactElement => (
  //   <Button size="tiny">FOLLOW</Button>
  // );

  // const renderItemIcon = (props: any): IconElement => (
  //   <Icon {...props} name="person" />
  // );

  // const renderItem = ({
  //   item,
  //   index,
  // }: {
  //   item: IListItem;
  //   index: number;
  // }): React.ReactElement => (
  //   <ListItem
  //     title={`${item.title} ${index + 1}`}
  //     description={`${item.description} ${index + 1}`}
  //     accessoryLeft={renderItemIcon}
  //     accessoryRight={renderItemAccessory}
  //   />
  // );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: WOWSSS {user}</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>

        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    maxHeight: 192,
  },
});
