import SectionScreen from "./[section]";
import { useEffect } from "react";
import { router } from "expo-router";
export default function MapTab() { useEffect(() => { router.setParams({ section: "map" }); }, []); return <SectionScreen />; }
