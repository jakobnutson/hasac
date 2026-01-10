import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Simsiz Azadlıq: Niyə 2026-cı ildə Kabelli Sistemlər Artıq Keçmişdə Qalıb?",
    company: "Home Assistant",
    region: "Azerbaijan",
    description:
          " Divarları dağıtmadan peşəkar ağıllı ev qurmaq mümkündürmü? Home Assistant və müasir simsiz protokolların (Zigbee, Thread) kabelli sistemlərə (KNX, Loxone) qarşı üstünlüklərini mühəndislik perspektivindən analiz edirik.",
    technologies: [
      "TypeScript",
      "YAML",
      "HomeAssistant",
      "SonOff",
      "Tuya",
      "RaspberryPi",
      "Docker",
      "MiHome",
      
      
    ],
  },
  {
    title: "Strateji Keçid",
    company: "Home Assisatant",
    region: "Azerbaijan",
    description:
      "Əvvəllər (peşəkar ağıllı) ev dedikdə ağla yalnız divariçi kilometrlərlə kabel və bahalı mərkəzi panellər gəlirdi. Lakin paylanmış sistemlərin (distributed systems) inkişafı, bu yanaşmanı fundamental olaraq dəyişdi. Bu gün Home Assistant ilə qurulan kabelsiz sistemlər, kabelli rəqiblərindən daha çevik, daha ucuz və ən əsası — daha ağıllıdır.",
    technologies: [
      "TypeScript",
      "YAML",
      "HomeAssistant",
      "SonOff",
      "Tuya",
      "RaspberryPi",
      "Docker",
      "MiHome",
    ],
  },
  {
    title: "Qiymət və Zaman Effektivliyi",
    company: "Home Assistant",
    region: "Azerbaijan",
    description:
      "Kabelli sistemin quraşdırılması aylar çəkir və tikinti xərclərini kəskin artırır. Simsiz həllər isə: Tez quraşdırılır: Bir gündə bütün ev şəbəkəsini qurmaq mümkündür. Bu gün bir cihazi ağıllı edib, büdcəyə uyğun olaraq gələn ay digər cihazlar əlavə edə bilərsiniz.",
    technologies: [
       "TypeScript",
      "YAML",
      "HomeAssistant",
      "SonOff",
      "Tuya",
      "RaspberryPi",
      "Docker",
      "MiHome",
    ],
  },
  {
    title: "Self-Healing Mesh Network (Özünü Bərpa Edən Şəbəkə)",
    company: "Home Assistant",
    region: "Azerbaijan",
    description:
      "Wired sistemlərdə kabel qırılarsa, o xətt tamamilə sıradan çıxır (Single Point of Failure). Zigbee və ya Thread protokollarında isə hər bir cihaz həm də bir routerdir. Üstünlük: Əgər bir marşrut kəsilərsə, məlumat avtomatik olaraq digər qonşu cihaz üzərindən mərkəzə çatır. Bu, sistemin dayanıqlığını (redundancy) artırır.",
    technologies: [
      "TypeScript",
      "YAML",
      "HomeAssistant",
      "SonOff",
      "Tuya",
      "RaspberryPi",
      "Docker",
      "MiHome",
    ],
  },
];

export type WorkItem = (typeof work)[number];

