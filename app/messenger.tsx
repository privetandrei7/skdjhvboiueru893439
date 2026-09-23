import SectionScreen from "./[section]";
import { useEffect } from "react";
import { router } from "expo-router";
export default function MessengerTab() { useEffect(() => { router.setParams({ section: "messenger" }); }, []); return <SectionScreen />; }
