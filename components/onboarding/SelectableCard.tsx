import React, { useState } from "react";
import {
  borderRadius,
  colors,
  getHeightFromScreen,
  getWidthFromScreen,
  margin,
  padding,
} from "@/constants";

import { TouchableOpacity } from "react-native";
import { ThemedView } from "../common/ThemedView";
import RoundedSelect from "../ui/RoundedSelect";

const SelectableCard = ({
  isPressed,
  disabled = false,
  onPress,
  showBorderWhenInactive = false,
  children,
  alwaysShowBullet = false,
}: {
  onPress?: () => void;
  isPressed: boolean;
  disabled?: boolean;
  showBorderWhenInactive?: boolean;
  children?: React.ReactNode;
  alwaysShowBullet?: boolean;
}) => {
  const cardHeight = getHeightFromScreen(0.5);
  const cardWidth = getWidthFromScreen(0.8);

  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress?.();
        setIsActive(!isActive);
      }}
      disabled={disabled}
    >
      <ThemedView
        style={{
          height: cardHeight,
          width: cardWidth,
          borderWidth:
            isPressed || isActive || showBorderWhenInactive ? 2.5 : 0,
          borderColor:
            isPressed || isActive
              ? colors.light["colour--primary"]
              : showBorderWhenInactive
                ? colors.light["colour--gray"].concat("80")
                : "transparent",
          borderRadius:
            isPressed || isActive || showBorderWhenInactive
              ? borderRadius.lg
              : 0,
          padding: padding.lg,
          margin: margin.md,
        }}
      >
        <ThemedView
          style={{
            width: cardWidth * 0.9,
            alignItems: "flex-end",
          }}
        >
          <RoundedSelect
            useAsBullet={disabled && (isPressed || isActive)}
            isSelected={isActive}
            disabled={disabled}
            alwaysShowBullet={alwaysShowBullet}
            size="xs"
            onPress={() => {
              onPress?.();
              setIsActive(!isActive);
            }}
          />
        </ThemedView>
        {children}
      </ThemedView>
    </TouchableOpacity>
  );
};

export default SelectableCard;
