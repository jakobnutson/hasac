import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import Aqara from '../assets/logos/aqara.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import Mihome from '../assets/logos/mihome.svg?raw';
export const projects = [
	{
		title: "Ağıllı Təhlükəsizlik və Perimetr Mühafizəsi",
		techStack: "Home Assistant • Zigbee • Alarmo • Matter",
		description: "Qapı və pəncərələr üçün tam kabelsiz sensor şəbəkəsinin qurulması. 0.1s gecikmə ilə anlıq bildirişlər və lokal (cloud-free) siqnalizasiya idarəetməsi.",
		ctaText: "Detallara bax →",
		ctaLink: "/hasac/blog/security-system",
		icon: Aqara
	},
	{
		title: "İstilik Sistemi və Kombi Avtomatlaşdırılması",
		techStack: "Zigbee • Dry Contact • Home Assistant • ESPHome",
		description: "Qazan və kombilərin 'Dry Contact' (Quru Kontakt) vasitəsilə inteqrasiyası. Temperatur qrafiklərinə və varlıq sensorlarına əsaslanan 30% enerji qənaəti.",
		ctaText: "Texniki Analiz →",
		ctaLink: "/hasac/blog/thermostat-integration",
		icon: PythonIcon
	},
	{
		title: "AI-Powered Video Nəzarət və Giriş Sistemi",
		techStack: "Frigate AI • RTSP • WebSockets • Home Assistant",
		description: "Süni intellekt əsaslı insan tanıma sistemi və görüntülü qapı zəngi inteqrasiyası. Bütün görüntülərin lokal NVR-da tam məxfi saxlanılması.",
		ctaText: "Keysi Oxu →",
		ctaLink: "/hasac/blog/doorbell",
		icon: PhoenixIcon
	},
	{
		title: "Simsiz Mesh Şəbəkə İnfrastrukturu",
		techStack: "Zigbee 3.0 • Thread • MQTT • Docker",
		description: "Evin hər bir nöqtəsini əhatə edən 'Self-healing' (özünü bərpa edən) şəbəkə arxitekturası. Yüzlərlə cihazın stabil işləməsi üçün mərkəzi hab konfiqurasiyası.",
		ctaText: "Hardware Bələdçisi →",
		ctaLink: "/hasac/blog/niyəsimsiz",
		icon: N8nIcon
	},
];
