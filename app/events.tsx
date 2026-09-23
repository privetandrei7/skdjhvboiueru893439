import SectionScreen from "./[section]";
import { useEffect } from "react";
import { router } from "expo-router";
export default function EventsTab() { useEffect(() => { router.setParams({ section: "events" }); }, []); return <SectionScreen />; }
