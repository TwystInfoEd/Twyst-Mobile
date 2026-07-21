import { Tabs } from "expo-router";
import { Path, Svg } from "react-native-svg";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#027FE3",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user" color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book" color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Achievements",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="trophy" color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon({ name, color }: { name: string; color: string }) {
  const getIcon = () => {
    switch (name) {
      case "home":
        return (
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={2}
          >
            <Path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M9 22V12h6v10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "user":
        return (
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={2}
          >
            <Path
              d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12 11a4 4 0 100-8 4 4 0 000 8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "book":
        return (
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={2}
          >
            <Path
              d="M4 19.5A2.5 2.5 0 016.5 17H20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "trophy":
        return (
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={2}
          >
            <Path
              d="M8 21h8m-4-4v4m-6.5-4h13a2.5 2.5 0 002.5-2.5V7a2.5 2.5 0 00-2.5-2.5h-13A2.5 2.5 0 002.5 7v7.5a2.5 2.5 0 002.5 2.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  return getIcon();
}
