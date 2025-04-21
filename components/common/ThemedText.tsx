import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type FontWeightType = "thin" | "light" | "normal" | "black" | "bold";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  fontWeight?: FontWeightType;
  italicize?: boolean;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  fontWeight = "normal",
  italicize = false,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "colour--gray"
  );

  const fontFamily = getFontFamily(fontWeight, italicize);

  return (
    <Text
      style={[
        { color, fontFamily },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

function getFontFamily(weight: FontWeightType, isItalic: boolean): string {
  switch (weight) {
    case "thin":
      return isItalic ? "Lato-ThinItalic" : "Lato-Thin";
    case "light":
      return isItalic ? "Lato-LightItalic" : "Lato-Light";
    case "normal":
      return isItalic ? "Lato-Italic" : "Lato-Regular";
    case "bold":
      return isItalic ? "Lato-BoldItalic" : "Lato-Bold";
    case "black":
      return isItalic ? "Lato-BlackItalic" : "Lato-Black";
    default:
      return isItalic ? "Lato-Italic" : "Lato-Regular";
  }
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
