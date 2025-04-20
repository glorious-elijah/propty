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
