import React, { useState, useRef } from "react";
import { SelectableCard, ThemedText, ThemedView } from "@/components";
import { useTranslation } from "react-i18next";
import {
  borderRadius,
  colors,
  getHeightFromWindow,
  getWidthFromWindow,
  margin,
  padding,
  typography,
} from "@/constants";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Onboarding = () => {
  const { t } = useTranslation();
  const pageHeight = getHeightFromWindow(1);
  const pageWidth = getWidthFromWindow(1);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollViewRef = useRef(null);

  // Track scroll position to determine which card is in view
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const cardWidth = getWidthFromWindow(0.9); // Adjust based on your card width
    const viewableIndex = Math.round(contentOffsetX / cardWidth);
    setActiveCardIndex(viewableIndex);
  };

  return (
    <ThemedView
      testID="onboarding-container"
      style={{
        height: pageHeight,
        width: pageWidth,
        justifyContent: "space-between",
        paddingVertical: padding.lg,
      }}
    >
      <ThemedView
        testID="onboarding-header"
        style={{
          justifyContent: "center",
          height: pageHeight * 0.2,
          alignItems: "center",
        }}
      >
        <ThemedText
          style={{
            ...typography.headingLarge,
            fontSize: 22,
            color: colors.light["colour--primary"],
          }}
        >
          {t("onboarding.user-purpose")}
        </ThemedText>
        <ThemedText
          style={{
            ...typography.headingMedium,
            fontSize: 16,
            color: colors.light["colour--black"],
            marginTop: margin.sm,
          }}
        >
          {t("onboarding.select-user-type")}
        </ThemedText>
      </ThemedView>
      <ThemedView
        testID="onboarding-cards"
        style={{
          height: pageHeight * 0.67,
          paddingHorizontal: padding.lg,
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flex: 1 }}
          onScroll={handleScroll}
          scrollEventThrottle={16} // For smooth tracking
          pagingEnabled // Optional: for snap behavior
        >
          <SelectableCard
            alwaysShowBullet
            disabled={true}
            isPressed={activeCardIndex === 0}
          >
            <ThemedView
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "65%",
              }}
            >
              <Image
                source={require("@/assets/images/onboarding/UserSelectionFindingProperty.png")}
              />
            </ThemedView>
            <ThemedText
              style={{
                marginBottom: margin.lg,
                textTransform: "capitalize",
                ...typography.headingSmall,
              }}
            >
              {t("onboarding.looking-to-buy-or-rent.title")}
            </ThemedText>
            <ThemedText>
              {t("onboarding.looking-to-buy-or-rent.description")}
            </ThemedText>
          </SelectableCard>
          <SelectableCard
            alwaysShowBullet
            disabled={true}
            isPressed={activeCardIndex === 1}
          >
            <ThemedView
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "65%",
              }}
            >
              <Image
                source={require("@/assets/images/onboarding/UserSelectionSellingProperty.png")}
              />
            </ThemedView>
            <ThemedText
              style={{
                marginBottom: margin.lg,
                textTransform: "capitalize",
                ...typography.headingSmall,
              }}
            >
              {t("onboarding.property-to-list.title")}
            </ThemedText>
            <ThemedText>
              {t("onboarding.property-to-list.description")}
            </ThemedText>
          </SelectableCard>
        </ScrollView>
      </ThemedView>
      <ThemedView
        testID="onboarding-button"
        style={{
          height: pageHeight * 0.13,
          width: pageWidth,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <ThemedView
            style={{
              width: pageWidth * 0.94,
              backgroundColor: colors.light["colour--primary"],
              padding: padding.md,
              borderRadius: borderRadius.md,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText style={{ color: colors.light["colour--white"] }}>
              {t("label.continue")}
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default Onboarding;
