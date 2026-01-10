---
title: "Kamera və Görüntülü Qapı Zəngi: Məxfilik Ön Planda"
description: "Evinizin təhlükəsizlik kameralarını Home Assistant-a inteqrasiya edin və 24/7 yerli qeydiyyat aparın."
pubDate: 2026-01-11
heroImage: '../../assets/images/camera-doorbell.jpg'
category: "Video Nəzarət"
---

Müasir görüntülü qapı zəngləri (smart doorbell) çox vaxt məlumatları kənar serverlərə göndərir. Biz isə bütün görüntülərin yalnız sizin evinizdə qaldığı, **Frigate AI** və ya **Scrypted** əsaslı sistemlər qururuq.

![Doorbell View](../../assets/images/doorbell.jpeg)
*Şəkil 1: Qapı zənginə basıldıqda televizorda və telefonda anında canlı görüntü.*

### İnteqrasiyanın üstünlükləri:
1.  **AI İnsan Tanıma:** Sistem küləkdən tərpənən ağacla, qapınıza yaxınlaşan insanı fərqləndirir və yalnız vacib hallarda bildiriş göndərir.
2.  **İkitərəfli Səs:** Kuryer gəldikdə, evdə olmasanız belə Home Assistant tətbiqi vasitəsilə onunla danışa bilərsiniz.
3.  **Local NVR:** Heç bir aylıq abunə haqqı ödəmədən görüntüləri aylarla öz daxili diskinizdə saxlayın.

![Camera Grid](../../assets/images/camera-grid-ha.jpg)
*Şəkil 2: Bütün kameraların tək bir paneldən (Dashboard) izlənilməsi.*

### Texniki Detallar:
Biz **RTSP** və ya **ONVIF** protokollarını dəstəkləyən kameralardan istifadə edirik. Bu, cihazların Home Assistant ilə "native" (doğma) şəkildə danışmasını təmin edir və gecikməni (latency) 1 saniyədən aşağı salır.
