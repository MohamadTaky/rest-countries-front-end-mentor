import { cookies } from "next/headers";

export default function isDarkMode() {
	return cookies().get("dark")?.value === "1";
}
