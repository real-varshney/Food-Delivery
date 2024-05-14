# Deliveroo: A Simplified Food Ordering App (React Native)

This project offers a streamlined food ordering experience built with React Native, allowing users to explore restaurants and place "mock" orders without user registration or online payment functionalities.

## Features

- **Intuitive UI:** React Native Material UI provides a beautiful and consistent design system across platforms (iOS and Android).
- **Effortless Navigation:** React Navigation simplifies app navigation and user flow management.
- **Tailwind CSS Styling:** Employ Tailwind's utility-first approach for efficient styling and rapid UI development.
- **Flexible Content Management:** Sanity.io offers a robust and user-friendly headless CMS for managing app content, restaurants, food items, and more.
- **State Management:** Redux facilitates centralized state management and ensures data consistency throughout the app.



## Screenshots

<img src="https://github.com/real-varshney/Food-Delivery/assets/109132583/1711bd0e-95ec-4a46-a0d6-3a24faf1daff" width="400" height="900"> 
<img src="https://github.com/real-varshney/Food-Delivery/assets/109132583/4bec0cfb-5a9f-4a3c-ad9b-40ddfe1a1cd5" width="400" height="900"> 
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-------------------------------------------------------
<img src="https://github.com/real-varshney/Food-Delivery/assets/109132583/c096e8ba-2d68-4abe-82a4-4aae7d4212a3" width="400" height="900">  
<img src="https://github.com/real-varshney/Food-Delivery/assets/109132583/dfc58846-0790-46f3-a393-69a6b71a74d5" width="400" height="900">  

## Getting Started

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system.
- A code editor (VS Code, Atom, etc.) for development.
- Basic understanding of React Native, React, and JavaScript.

**Clone the Repository:**

```bash
git clone https://github.com/your-username/deliveroo-react-native.git
```

**Install Dependencies:**

```bash
cd deliveroo-react-native
npm install
```
(or `yarn install`)

### Configuration

**Sanity.io:**

1. Create a Sanity.io project and configure your dataset.
2. Update `src/config/sanity.js` with your project details.

**Navigation:**

1. Review the navigation configuration in `src/navigation/index.js`.
2. Customize the screens and their navigation flows as needed.

### Running the App

**Start the Development Server:**

- Choose your preferred method:
  - Using Expo: `expo start` (if you prefer Expo's development environment)
  - Using React Native: `npx react-native run-android` or `npx react-native run-ios` (for native development)

**Access the App:**

- If using Expo: Follow the provided instructions to view the app in your device's browser or using the Expo Go app.
- If using React Native: The app will launch in your connected emulator or device.

## Usage

**Browsing Restaurants:**

- Users can explore restaurants based on location, cuisine, or other criteria.
- Access detailed menus with food items, descriptions, and images.

**Placing Mock Orders:**

- Users can add items to a "mock" cart, manage quantities, and view a simulated order summary.
- Note: Actual ordering and payment functionality are not currently implemented.

**Next Steps:**

- Upon reaching the order confirmation stage, a clear explanation informs users that the app primarily focuses on browsing and mock ordering.
- Provide options to contact restaurants directly or visit their websites for actual ordering.

## Additional Notes

- This is a foundation for a simplified food ordering experience. To enable online ordering with payment, you'll need to integrate a backend solution (e.g., Node.js, Python) and a payment gateway (e.g., Stripe, PayPal).
- Consider implementing features like user feedback or restaurant reviews to enhance the app's functionality.
- Unit and integration tests are crucial for ensuring app quality.
