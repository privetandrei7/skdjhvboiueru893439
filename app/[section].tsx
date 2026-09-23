import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, Pressable, StyleSheet, Text, View } from "react-native";

const data: Record<string,{icon:string,title:string,description:string}> = {
  messenger:{icon:"💬",title:"Мессенджер",description:"Личные чаты, группы, землячества и сообщества MARI."},
  map:{icon:"🗺️",title:"Карта",description:"Марий Эл, святые места, музеи, мастера и места встреч."},
  language:{icon:"🎓",title:"Марийский язык",description:"Уроки лугового и горного марийского, аудио, тесты и разговорные клубы."},
  folklore:{icon:"🎵",title:"Фольклор",description:"Песни, сказания, частушки, аудио и видео на марийских языках."},
  market:{icon:"🛍️",title:"Маркет",description:"Традиционные изделия, мастера и марийские товары."},
  services:{icon:"🧰",title:"Услуги",description:"Сервисы и специалисты сообщества MARI."},
  genealogy:{icon:"🌳",title:"Генеалогия",description:"Семейные деревья, родственные связи, деревни и тукым."},
  events:{icon:"📅",title:"События",description:"Встречи, праздники, фестивали и мероприятия земляков."},
  youth:{icon:"🎬",title:"Молодёжь",description:"Конкурсы, творчество, короткие видео и молодёжные сообщества."},
  mail:{icon:"✉️",title:"MARI Mail",description:"Будущая защищённая почта внутри экосистемы MARI."}
};

export default function SectionScreen() {
  const { section } = useLocalSearchParams<{section:string}>();
  const item = data[section] ?? {icon:"🌿",title:"Раздел MARI",description:"Раздел находится в разработке."};
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Pressable onPress={()=>router.back()}><Text style={styles.back}>‹ Назад</Text></Pressable>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.placeholder}><Text style={styles.placeholderTitle}>Скоро здесь</Text><Text style={styles.placeholderText}>Это рабочий экран первого APK. Функциональность раздела будем подключать поэтапно.</Text></View>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:"#F8F5EE"},content:{padding:24},back:{fontSize:17,color:"#173B32",fontWeight:"700",marginBottom:42},icon:{fontSize:54},title:{fontSize:32,fontWeight:"900",color:"#202823",marginTop:14},description:{fontSize:17,lineHeight:25,color:"#5E6861",marginTop:10},placeholder:{marginTop:32,backgroundColor:"#FFFFFF",borderRadius:22,padding:20},placeholderTitle:{fontSize:18,fontWeight:"800",color:"#173B32"},placeholderText:{fontSize:14,lineHeight:21,color:"#6D746E",marginTop:8}});
