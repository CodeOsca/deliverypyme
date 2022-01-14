import { InfoCard } from "../interfaces/info-card";

export const INFO_CARD: InfoCard[] = [
  {
    title: 'CLIENTES INFORMADOS',
    description: 'Sistema de seguimiento y notificación automática, durante todo el proceso de envio.',
    image: './assets/imagenes/svg/image_indicator_progress.svg',
    revert: false
  },
  {
    title: 'RAPIDEZ',
    description: 'Repartimos en menos de 24 horas en Santiago Urbano y en 72 horas en Zonas Rurales.',
    image: './assets/imagenes/svg/image_fast.svg',
    revert: true
  },
  {
    title: 'SEGURIDAD',
    description: 'Tenemos bodegas de almacenamiento con sistema de seguridad 24 HORAS para todos tus paquetes.',
    image: './assets/imagenes/svg/image_person_security.svg',
    revert: false
  },
  {
    title: 'SOPORTE DIRECTO',
    description: 'Estamos para ti en todo momento, cuando te comunicas con nosotros, te responde una persona. No robots ni bots. Ante cualquier problema, trabajaremos rápidamente en darte una solución eficiente.',
    image: './assets/imagenes/svg/image_support.svg',
    revert: true
  }
]