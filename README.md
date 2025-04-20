# Welcome to Propty 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Working with Git

To push your changes to a remote repository:

```bash
# Add all files to staging
git add .

# Commit your changes
git commit -m "Your commit message"

# Push to the remote repository
git push origin main # origin is the gitlab repository
git push gh-origin main # gh-origin is the github repository
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Using i18n translations

DOCS implementing [https://www.i18next.com/translation-function/plurals](plural) forms in translation
DOCS implementing [https://www.i18next.com/translation-function/nesting](nested) translation
DOCS [https://www.i18next.com/translation-function/formatting](foromatting) translation
DOCS inserting values programmatically, [https://www.i18next.com/translation-function/interpolation](interpolating) translation
DOCS [https://www.i18next.com/how-to/caching](Caching) translation

## Using Colors and other styles

Propty provides a set of predefined styles and utilities in the `primaryStyles.ts` file to maintain consistency across the application.

### Colors

The application supports both light and dark themes with a consistent color palette:

```typescript
import { colors } from "@/constants/primaryStyles";
import { useColorScheme } from "@/hooks/useColorScheme";

// In a component:
const colorScheme = useColorScheme();
const backgroundColor = colors[colorScheme]["colour--primary"];
```

#### Available Colors

- `colour--primary`: Primary brand color (#6E38E0)
- `colour--white`: White color (#FFFFFF)
- `colour--gray`: Gray color (#4D4D4D)
- `colour--black`: Black color (#1A1E25)

#### Applying Opacity to Colors

To apply opacity to colors, you can concatenate the opacity percentage to the color string:

```typescript
// Apply 95% opacity to gray color
const semiTransparentGray = colors.light["colour--gray"].concat("95");
```

### Spacing and Dimensions

#### Border Radius

```typescript
import { borderRadius } from "@/constants/primaryStyles";

// Usage:
const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg, // 11px
  },
});
```

#### Padding and Margin

```typescript
import { padding, margin } from "@/constants/primaryStyles";

// Usage:
const styles = StyleSheet.create({
  container: {
    padding: padding.md, // 8px
    marginBottom: margin.lg, // 12px
  },
});
```

### Responsive Dimensions

The following utilities help create responsive layouts:

```typescript
import {
  getWidthFromWindow,
  getHeightFromWindow,
  getWidthFromScreen,
  getHeightFromScreen,
} from "@/constants/primaryStyles";

// Usage examples:
const halfScreenWidth = getWidthFromWindow(0.5); // 50% of window width
const quarterScreenHeight = getHeightFromScreen(0.25); // 25% of screen height
```

#### Available Functions

- `getWidthFromWindow(percentage)`: Calculate width based on window dimensions
- `getHeightFromWindow(percentage)`: Calculate height based on window dimensions
- `getWidthFromScreen(percentage)`: Calculate width based on screen dimensions
- `getHeightFromScreen(percentage)`: Calculate height based on screen dimensions

All percentage values should be between 0 and 1 (e.g., 0.5 for 50%).

## Using Fonts

Propty comes with a complete Lato font family that offers various weights and styles to enhance your UI. The fonts are already configured and ready to use throughout the application.

### Available Font Variations

The following Lato font variations are available:

- `Lato-Regular`: For normal text
- `Lato-Bold`: For emphasized text
- `Lato-Light`: For lighter weight text
- `Lato-Thin`: For very light text
- `Lato-Black`: For extra bold text
- `Lato-Italic`: For italic text
- `Lato-BoldItalic`: For bold and italic text
- `Lato-LightItalic`: For light and italic text
- `Lato-ThinItalic`: For thin and italic text
- `Lato-BlackItalic`: For black and italic text

Additionally, `SpaceMono` is available for monospaced text needs.

### How to Use Fonts in Styles

You can use these fonts in your styles by specifying the fontFamily property:

```typescript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  normalText: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  boldText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  lightText: {
    fontFamily: "Lato-Light",
    fontSize: 14,
  },
  italicText: {
    fontFamily: "Lato-Italic",
    fontSize: 16,
  },
  heading: {
    fontFamily: "Lato-Black",
    fontSize: 24,
  },
  caption: {
    fontFamily: "Lato-ThinItalic",
    fontSize: 12,
  },
});
```

### Using with ThemedText Component

For consistent text styling that respects the theme, you can use the `ThemedText` component. The component provides convenient properties for styling text:

```typescript
import { ThemedText } from '@/components/common/ThemedText';

// Basic usage with default font (Lato-Regular)
<ThemedText>Regular text</ThemedText>

// Using fontWeight property to make text bold
<ThemedText fontWeight="bold">Bold text</ThemedText>

// Using fontWeight property to make text light
<ThemedText fontWeight="light">Light text</ThemedText>

// Using fontWeight property with italic style
<ThemedText fontWeight="bold" italicize={true}>Bold Italic text</ThemedText>

// Combining different properties with custom colors
<ThemedText
  fontWeight="black"
  italicize={true}
  lightColor="#6E38E0"
  darkColor="#8E58FF">
  Custom colored black italic text
</ThemedText>
```

#### ThemedText Props

The `ThemedText` component accepts the following special props:

| Prop         | Type                                                              | Description                                     |
| ------------ | ----------------------------------------------------------------- | ----------------------------------------------- |
| `fontWeight` | "thin" \| "light" \| "normal" \| "bold" \| "black"                | Controls the font weight                        |
| `italicize`  | boolean                                                           | When true, applies the italic style to the text |
| `type`       | "default" \| "title" \| "defaultSemiBold" \| "subtitle" \| "link" | Predefined text styles                          |
| `lightColor` | string                                                            | Text color for light theme                      |
| `darkColor`  | string                                                            | Text color for dark theme                       |

#### FontWeight to Font Family Mapping

| fontWeight Value | Font Family Used | With italicize=true |
| ---------------- | ---------------- | ------------------- |
| "thin"           | 'Lato-Thin'      | 'Lato-ThinItalic'   |
| "light"          | 'Lato-Light'     | 'Lato-LightItalic'  |
| "normal"         | 'Lato-Regular'   | 'Lato-Italic'       |
| "bold"           | 'Lato-Bold'      | 'Lato-BoldItalic'   |
| "black"          | 'Lato-Black'     | 'Lato-BlackItalic'  |

### Font Weight Quick Reference

| Text Style | Font Family to Use |
| ---------- | ------------------ |
| Normal     | 'Lato-Regular'     |
| Bold       | 'Lato-Bold'        |
| Light      | 'Lato-Light'       |
| Extra Bold | 'Lato-Black'       |
| Very Light | 'Lato-Thin'        |
| Italic     | 'Lato-Italic'      |

### Typography Constants

```typescript
// In constants/typography.ts
export const typography = {
  headingLarge: {
    fontFamily: "Lato-Black",
    fontSize: 28,
  },
  headingMedium: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
  },
  headingSmall: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
  },
  bodyRegular: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  bodyBold: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  caption: {
    fontFamily: "Lato-Light",
    fontSize: 14,
  },
  button: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
};

// Usage in components
import { typography } from "@/constants/typography";

const styles = StyleSheet.create({
  title: {
    ...typography.headingMedium,
  },
  description: {
    ...typography.bodyRegular,
  },
});
```
