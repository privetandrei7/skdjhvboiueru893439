import { Tabs } from "expo-router";
import { Text } from "react-native";

const icons = {
  index: "⌂",
  messenger: "☵",
  map: "⌖",
  events: "◷",
  profile: "◯",
};

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#174B3B",
        tabBarInactiveTintColor: "#9A9B94",
        tabBarStyle: {
          height: 108,
          paddingTop: 7,
          paddingBottom: 28,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E7E5DE",
          elevation: 12,
        },
        tabBarItemStyle: {
          height: 72,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginTop: 0,
          marginBottom: 0,
        },
        tabBarIcon: ({ color, focused }) => (
          <Text style={{ fontSize: focused ? 25 : 23, color }}>
            {icons[route.name as keyof typeof icons] ?? "•"}
          </Text>
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Главная" }} />
      <Tabs.Screen name="messenger" options={{ title: "Чаты" }} />
      <Tabs.Screen name="map" options={{ title: "Карта" }} />
      <Tabs.Screen name="events" options={{ title: "События" }} />
      <Tabs.Screen name="profile" options={{ title: "Профиль" }} />
      <Tabs.Screen name="[section]" options={{ href: null }} />
    </Tabs>
  );
}
