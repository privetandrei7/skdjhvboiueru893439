import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const sections = [
  ["💬", "Мессенджер", "Чаты и земляки", "/messenger"],
  ["🗺️", "Карта", "Марийский мир", "/map"],
  ["🎓", "Марийский язык", "Учись каждый день", "/language"],
  ["🎵", "Фольклор", "Песни и традиции", "/folklore"],
  ["🛍️", "Маркет", "Товары мастеров", "/market"],
  ["🧰", "Услуги", "Помощь рядом", "/services"],
  ["🌳", "Генеалогия", "История семьи", "/genealogy"],
  ["📅", "События", "Встречи и праздники", "/events"],
  ["🎬", "Молодёжь", "Идеи и творчество", "/youth"],
  ["✉️", "MARI Mail", "Почта внутри MARI", "/mail"],
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View><View style={styles.brandRow}><View style={styles.mark}><Text style={styles.markText}>M</Text></View><Text style={styles.logo}>MARI</Text></View><Text style={styles.subtitle}>Единая экосистема для марийцев</Text></View>
          <Pressable style={styles.avatar} onPress={() => router.push("/profile")}><Text style={styles.avatarText}>А</Text></Pressable>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>МАРИЙСКИЙ МИР • ВМЕСТЕ</Text>
          <Text style={styles.heroTitle}>Место, где{"\n"}марийцы рядом</Text>
          <Text style={styles.heroText}>Общайтесь, изучайте язык, сохраняйте культуру, находите земляков и создавайте будущее вместе.</Text>
          <Pressable style={styles.heroButton} onPress={() => router.push("/events")}><Text style={styles.heroButtonText}>Смотреть события</Text><Text style={styles.arrow}>→</Text></Pressable>
        </View>

        <View style={styles.stats}>
          <View><Text style={styles.num}>10</Text><Text style={styles.label}>разделов</Text></View><View style={styles.divider}/>
          <View><Text style={styles.num}>2</Text><Text style={styles.label}>литературных языка</Text></View><View style={styles.divider}/>
          <View><Text style={styles.num}>∞</Text><Text style={styles.label}>возможностей</Text></View>
        </View>

        <Text style={styles.title}>Возможности MARI</Text><Text style={styles.sub}>Всё важное — в одном приложении</Text>
        <View style={styles.grid}>
          {sections.map(([icon, title, caption, route], i) => <Pressable key={route} style={[styles.card, i === 0 && styles.featured]} onPress={() => router.push(route as never)}><View style={styles.cardTop}><View style={[styles.iconBox, i === 0 && styles.iconFeatured]}><Text style={styles.icon}>{icon}</Text></View>{i === 0 && <Text style={styles.online}>ONLINE</Text>}</View><View><Text style={styles.cardTitle}>{title}</Text><Text style={styles.cardCaption}>{caption}</Text></View><Text style={styles.cardArrow}>↗</Text></Pressable>)}
        </View>

        <Pressable style={styles.event} onPress={() => router.push("/events")}>
          <Text style={styles.badge}>БЛИЖАЙШЕЕ</Text><Text style={styles.eventTitle}>Марий кас</Text><Text style={styles.eventText}>Культурные события, встречи, концерты и мероприятия земляков.</Text><View style={styles.eventBottom}><Text style={styles.eventLink}>Открыть события</Text><Text style={styles.arrow}>→</Text></View>
        </Pressable>
        <View style={styles.footer}><Text style={styles.footerLogo}>MARI</Text><Text style={styles.footerText}>Культура. Язык. Люди. Будущее.</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:"#F4F2EC"}, content:{padding:18,paddingBottom:34},
  header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:20}, brandRow:{flexDirection:"row",alignItems:"center"},
  mark:{width:34,height:34,borderRadius:11,backgroundColor:"#174B3B",alignItems:"center",justifyContent:"center",marginRight:9}, markText:{color:"#F4E7BD",fontSize:20,fontWeight:"900"}, logo:{fontSize:29,fontWeight:"900",letterSpacing:3,color:"#173B32"}, subtitle:{marginTop:5,fontSize:12,color:"#777A73"},
  avatar:{width:44,height:44,borderRadius:15,backgroundColor:"#E2E9DE",borderWidth:1,borderColor:"#CBD8C7",alignItems:"center",justifyContent:"center"},avatarText:{fontSize:17,fontWeight:"800",color:"#174B3B"},
  hero:{minHeight:285,borderRadius:30,padding:24,backgroundColor:"#174B3B",overflow:"hidden",marginBottom:14}, eyebrow:{color:"#D9E6C9",fontSize:10,fontWeight:"800",letterSpacing:1.5,marginBottom:18}, heroTitle:{color:"#FFF",fontSize:34,lineHeight:38,fontWeight:"900"}, heroText:{color:"#DCE8DF",fontSize:14,lineHeight:21,marginTop:13},
  heroButton:{alignSelf:"flex-start",marginTop:22,backgroundColor:"#F1E4B8",borderRadius:15,paddingVertical:12,paddingHorizontal:15,flexDirection:"row",alignItems:"center"},heroButtonText:{color:"#254A3D",fontWeight:"800",fontSize:13},arrow:{color:"#55492D",fontSize:19,marginLeft:10},
  stats:{backgroundColor:"#FFF",borderRadius:20,padding:15,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginBottom:27,borderWidth:1,borderColor:"#E7E4DC"},num:{fontSize:19,fontWeight:"900",color:"#174B3B",textAlign:"center"},label:{fontSize:9,color:"#85877F",marginTop:2,textAlign:"center"},divider:{width:1,height:28,backgroundColor:"#E4E2DA"},
  title:{fontSize:22,fontWeight:"900",color:"#202B25"},sub:{fontSize:12,color:"#81837D",marginTop:3,marginBottom:14},
  grid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",rowGap:12},card:{width:"48.3%",minHeight:156,backgroundColor:"#FFF",borderRadius:21,padding:14,borderWidth:1,borderColor:"#E7E5DE",justifyContent:"space-between"},featured:{backgroundColor:"#E7EFE4",borderColor:"#D3E0D0"},
  cardTop:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},iconBox:{width:43,height:43,borderRadius:14,backgroundColor:"#F1F0EA",alignItems:"center",justifyContent:"center"},iconFeatured:{backgroundColor:"#D6E4D1"},icon:{fontSize:23},online:{backgroundColor:"#174B3B",color:"#E6F0DF",fontSize:7,fontWeight:"900",paddingVertical:4,paddingHorizontal:6,borderRadius:8},
  cardTitle:{fontSize:15,fontWeight:"800",color:"#26342C",lineHeight:19},cardCaption:{fontSize:11,color:"#888B83",marginTop:3,lineHeight:15},cardArrow:{position:"absolute",right:13,bottom:12,fontSize:17,color:"#9B9D96"},
  event:{marginTop:22,borderRadius:24,padding:21,backgroundColor:"#E8DEC4",borderWidth:1,borderColor:"#DCD0AF"},badge:{alignSelf:"flex-start",backgroundColor:"#75643E",color:"#FFF9E9",fontSize:8,fontWeight:"900",letterSpacing:1,paddingVertical:5,paddingHorizontal:8,borderRadius:7},eventTitle:{color:"#302B20",fontSize:24,fontWeight:"900",marginTop:12},eventText:{color:"#605641",fontSize:13,lineHeight:19,marginTop:5},eventBottom:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:19},eventLink:{color:"#55492D",fontWeight:"800",fontSize:12},
  footer:{alignItems:"center",paddingTop:30,paddingBottom:5},footerLogo:{fontSize:12,fontWeight:"900",letterSpacing:3,color:"#174B3B"},footerText:{fontSize:10,color:"#9A9B94",marginTop:4}
});