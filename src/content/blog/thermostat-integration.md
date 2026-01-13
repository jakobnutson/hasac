---
title: "Kombi və Qazanların Ağıllı İdarəedilməsi: Dry Contact Metodu"
description: "İstilik sisteminizi Home Assistant-a bağlayaraq qaz xərclərinə qənaət edin."
pubDate: 2026-01-11
heroImage: "../../assets/images/thermostat-hero.jpg"
category: "Enerji Qənaəti"
---

İstilik sisteminin (boiler/kombi) ağıllı idarəedilməsi həm rahatlıq, həm də ciddi maliyyə qənaətidir. Biz kombiləri Home Assistant-a ən təhlükəsiz metod olan **"Dry Contact" (Quru Kontakt)** ilə inteqrasiya edirik.

![Dry Contact qoşulma sxemi](../../assets/images/dry-contact-wiring.jpg)
*Şəkil 1: Kombi anakartına quru kontakt relesinin qoşulma nöqtəsi.*

### Texniki Həll: Dry Contact nədir?
Bir çox müasir kombilər xarici termostat üçün xüsusi girişə malikdir. Biz bu girişə Zigbee və ya Wi-Fi dəstəkli bir cihaz (məsələn: Sonoff və ya Aqara) qoşuruq.
![Drysensor](../../assets/images/sensortemp.jpg)
Bu cihaz heç bir gərginlik vermədən yalnız kombini işə salır və ya söndürür.

Termostat funksiyasini isə evdə olan hər hansi temperaturu olçən cihaz ola bilər.

![Tempsensor](../../assets/images/sensoraqara.jpg)

**Şəkil 2: Home Assistant üzərindən temperaturun idarə edilməsi.**

![Smart Thermostat UI](../../assets/images/ha-climate-card.jpg)

### Avtomatlaşdırma imkanları:
* **Hər otağa fərdi nəzarət:** Hər otaqda kiçik temperatur sensorları yerləşdirərək, kombini yalnız ehtiyac olan otağa görə işlətmək.
* **Qənaət:** Statik termostatlarla müqayisədə ağıllı sistemlər qaz sərfiyyatını 25-30% azaldır.
