import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const sections = [
  { icon: "💬", title: "Мессенджер", route: "/messenger" },
  { icon: "🗺️", title: "Карта", route: "/map" },
  { icon: "🎓", title: "Марийский язык", route: "/language" },
  { icon: "🎵", title: "Фольклор", route: "/folklore" },
  { icon: "🛍️", title: "Маркет", route: "/market" },
  { icon: "🧰", title: "Услуги", route: "/services" },
  { icon: "🌳", title: "Генеалогия", route: "/genealogy" },
  { icon: "📅", title: "События", route: "/events" },
  { icon: "🎬", title: "Молодёжь", route: "/youth" },
  { icon: "✉️", title: "MARI Mail", route: "/mail" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>MARI</Text>
            <Text style={styles.subtitle}>Единая экосистема для марийцев</Text>
          </View>
          <Pressable style={styles.avatar} onPress={() => router.push("/profile")}>
            <Text style={styles.avatarText}>А</Text>
          </Pressable>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.welcomeSmall}>Добро пожаловать</Text>
          <Text style={styles.welcomeTitle}>Место, где марийцы рядом</Text>
          <Text style={styles.welcomeText}>
            Общайтесь, изучайте язык, сохраняйте культуру, находите земляков и участвуйте в жизни сообщества.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Разделы MARI</Text>

        <View style={styles.grid}>
          {sections.map((item) => (
            <Pressable
              key={item.route}
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              onPress={() => router.push(item.route as never)}
            >
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.news}>
          <Text style={styles.newsLabel}>СОБЫТИЯ</Text>
          <Text style={styles.newsTitle}>Марий кас</Text>
          <Text style={styles.newsText}>Следите за культурными событиями, встречами и мероприятиями земляков.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F8F5EE" },
  content: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 22 },
  logo: { fontSize: 34, fontWeight: "900", letterSpacing: 3, color: "#173B32" },
  subtitle: { marginTop: 2, fontSize: 13, color: "#6D746E" },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: "#D9E6D7", alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 19, fontWeight: "800", color: "#173B32" },
  welcome: { backgroundColor: "#173B32", borderRadius: 24, padding: 22, marginBottom: 26 },
  welcomeSmall: { color: "#D7E6D4", fontSize: 13, fontWeight: "700", marginBottom: 7 },
  welcomeTitle: { color: "#FFFFFF", fontSize: 24, fontWeight: "800", lineHeight: 29 },
  welcomeText: { color: "#DCE7DF", fontSize: 14, lineHeight: 21, marginTop: 10 },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#202823", marginBottom: 14 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: { width: "48%", minHeight: 112, backgroundColor: "#FFFFFF", borderRadius: 20, padding: 16, justifyContent: "space-between", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 2 },
  pressed: { opacity: 0.72, transform: [{ scale: 0.98 }] },
  icon: { fontSize: 30 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#26332C", lineHeight: 19 },
  news: { marginTop: 22, backgroundColor: "#E9E0C9", borderRadius: 20, padding: 20 },
  newsLabel: { fontSize: 11, fontWeight: "800", letterSpacing: 1.2, color: "#78663F" },
  newsTitle: { fontSize: 21, fontWeight: "800", color: "#332D20", marginTop: 5 },
  newsText: { color: "#5B523F", lineHeight: 20, marginTop: 6 }
});
