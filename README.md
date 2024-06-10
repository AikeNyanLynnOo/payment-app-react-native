## Welcome to Omise Payment App 👋

<p style="text-align:center;">
<image style="width:50%;height: auto; object-fit:cover;" src="https://github.com/AikeNyanLynnOo/payment-app-react-native/blob/main/assets/payment_record.gif?raw=true"/>
</p>

### Features & Best Practice covered

- ✅ Expo status bar, expo-font, expo-splash-screen, expo-constants for easy-to-main exporting for fonts/images & styles
- ✅ NativeWind, TailwindCSS, React Native safe area context
- ✅ Toast message with react-native-toast-message, currency drop down with react-native-select-dropdown
- ✅ Omise react native package
- ✅ Manage omise config and export new createCharge method for payment
- ✅ Highly reusable components with custom stylings as props
- ✅ Store sensitive data in .env and use react-native-dotenv to load envs
- ✅ Implement custom hooks, use Context API for state management
- ✅ Use Flatlist for better performance and Reusable Empty State Component
- ✅ Clean UI/UX

### To improve

- We can implement user auth flow. I read the Opn payment documentation and found we can create customers who hold one or more cards.
- To develop test cases

### Run locally

1. Install dependencies

   ```bash
   $ npm install
   ```

2. Start the app

   ```bash
   $ npm run start
   ```

   OR

   ```bash
   $ npm run no-cache
   ```

### Build production

1. EAS login

   ```bash
   $ eas login
   ```

2. Configure project

   ```bash
   $ eas build:configure
   ```

3. Build the project

   ```bash
   $ eas build --platform android
   ```

   OR

   ```bash
   $ eas build --platform ios
   ```

   OR

   ```bash
   $ eas build --platform all
   ```
