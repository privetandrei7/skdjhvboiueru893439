import { router } from "expo-router";
import { SafeAreaView, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Назад</Text></Pressable>
        <View style={styles.avatar}><Text style={styles.avatarText}>А</Text></View>
        <Text style={styles.title}>Профиль</Text>
        <Text style={styles.name}>Ваш профиль MARI</Text>
        <Text style={styles.muted}>Здесь появятся настройки аккаунта, землячества, язык и устройства.</Text>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:"#F8F5EE"},content:{padding:24},back:{fontSize:17,color:"#173B32",fontWeight:"700",marginBottom:35},avatar:{width:86,height:86,borderRadius:43,backgroundColor:"#D9E6D7",alignItems:"center",justifyContent:"center"},avatarText:{fontSize:34,fontWeight:"900",color:"#173B32"},title:{fontSize:30,fontWeight:"900",color:"#202823",marginTop:18},name:{fontSize:18,fontWeight:"700",marginTop:8,color:"#334139"},muted:{fontSize:15,lineHeight:22,color:"#6D746E",marginTop:12}});
