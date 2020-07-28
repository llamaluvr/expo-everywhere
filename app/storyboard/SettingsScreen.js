import React, { Component } from "react";
import { View, Text } from "react-native";
import { useMediaQuery } from "react-responsive";

/**
 * Just a placeholder so we could have three tabs,
 * because two tabs would look a bit sparse.
 */
export default () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isDesktopOrLaptop && (
        <>
          <Text>You are a desktop or laptop</Text>
          {isBigScreen && <Text>You also have a huge screen</Text>}
          {isTabletOrMobile && (
            <Text>You are sized like a tablet or mobile phone though</Text>
          )}
        </>
      )}
      {isTabletOrMobileDevice && <Text>You are a tablet or mobile phone</Text>}
      <Text>
        Your are in {isPortrait ? "portrait" : "landscape"} orientation
      </Text>
      {isRetina && <Text>You are retina</Text>}
    </View>
  );
};
