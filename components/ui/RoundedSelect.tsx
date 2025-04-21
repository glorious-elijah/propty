import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "@/constants";
import { ThemedView } from "../common/ThemedView";

const RoundedSelect = ({
  useAsBullet = false,
  onPress,
  isSelected,
  size = "sm",
  disabled,
  alwaysShowBullet = false,
}: {
  useAsBullet?: boolean;
  onPress?: () => void;
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  isSelected?: boolean;
  disabled?: boolean;
  alwaysShowBullet?: boolean;
}) => {
  const [isActive, setIsActive] = useState(false);

  const sizeStyles = {
    xl: { width: 36, height: 36 },
    lg: { width: 32, height: 32 },
    md: { width: 28, height: 28 },
    sm: { width: 24, height: 24 },
    xs: { width: 20, height: 20 },
  };

  const { width, height } = sizeStyles[size];

  useEffect(() => {
    if (isSelected) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isSelected]);

  return (
    <TouchableOpacity
      disabled={useAsBullet || disabled}
      onPress={() => {
        setIsActive(!isActive);
        onPress?.();
      }}
      style={{
        width: width,
        height: height,
      }}
    >
      <ThemedView
        style={{
          width: width,
          height: height,
          borderWidth: 3,
          borderRadius: 99999,
          justifyContent: "center",
          alignItems: "center",
          borderColor:
            useAsBullet || isActive
              ? colors.light["colour--primary"]
              : colors.light["colour--gray"].concat("95"),
        }}
      >
        {(useAsBullet || isActive || alwaysShowBullet) && (
          <ThemedView
            style={{
              width: width - 10,
              height: height - 10,
              borderRadius: 99999,
              backgroundColor:
                useAsBullet || isActive
                  ? colors.light["colour--primary"]
                  : colors.light["colour--gray"],
            }}
          />
        )}
      </ThemedView>
    </TouchableOpacity>
  );
};

export default RoundedSelect;
