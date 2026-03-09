import {AppLocale} from '@/i18n/routing';

type VisitAction = {label: string; href: string; primary?: boolean};
type VisitHourRow = {label: string; hours: string; note?: string};
type VisitNote = {title: string; text: string};

type VisitPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  practicalNote: string;
  hoursTitle: string;
  hoursIntro: string;
  hours: VisitHourRow[];
  reservationTitle: string;
  reservationIntro: string;
  reservationPoints: string[];
  locationTitle: string;
  locationIntro: string;
  addressLabel: string;
  address: string;
  neighborhoodLabel: string;
  neighborhood: string;
  arrivalLabel: string;
  arrival: string;
  actionsTitle: string;
  actions: VisitAction[];
  practicalTitle: string;
  practicalNotes: VisitNote[];
};

const visitByLocale: Record<AppLocale, VisitPageData> = {
  en: {
    eyebrow: 'Casa Nube · Barcelona',
    title: 'Calm, central, and easy to drop into.',
    intro: 'An all-day café in Eixample for coffee, brunch, and quiet meetings between city plans.',
    practicalNote: 'Walk-ins are welcome all day. Reservations are available for brunch tables of 5+.',
    hoursTitle: 'Hours & service rhythm',
    hoursIntro: 'A consistent weekly rhythm with slower mornings and flexible afternoons.',
    hours: [
      {label: 'Monday–Friday', hours: '08:00 — 19:00', note: 'Kitchen from 08:30 · brunch all day'},
      {label: 'Saturday', hours: '09:00 — 19:30', note: 'Terrace service starts at 09:30'},
      {label: 'Sunday', hours: '09:00 — 18:30', note: 'Last brunch orders at 17:00'}
    ],
    reservationTitle: 'Reservations & walk-ins',
    reservationIntro: 'Designed to stay easy. Come by spontaneously, or send us a short request for larger tables.',
    reservationPoints: [
      'Walk-ins are welcome for coffee, pastry, and most two-to-four person tables.',
      'Reservations are recommended for brunch groups, larger tables, or late-morning Saturdays.',
      'For same-day adjustments, WhatsApp is the fastest channel.'
    ],
    locationTitle: 'Location',
    locationIntro: 'In Dreta de l’Eixample, a short walk from Passeig de Sant Joan and Girona.',
    addressLabel: 'Address',
    address: 'Carrer de la Diputació 215, 08011 Barcelona',
    neighborhoodLabel: 'Neighborhood',
    neighborhood: 'Eixample Dreta · Barcelona',
    arrivalLabel: 'Arrival note',
    arrival: 'Metro Girona (L4) is 6 minutes on foot. Limited street parking nearby.',
    actionsTitle: 'Plan your visit',
    actions: [
      {label: 'Reserve a table', href: 'https://wa.me/34930000000?text=Hello%20Casa%20Nube%2C%20I%20would%20like%20to%20reserve%20a%20table.', primary: true},
      {label: 'Directions', href: 'https://maps.google.com/?q=Carrer+de+la+Diputaci%C3%B3+215+Barcelona'},
      {label: 'WhatsApp', href: 'https://wa.me/34930000000'},
      {label: 'Instagram', href: 'https://instagram.com'}
    ],
    practicalTitle: 'Practical notes',
    practicalNotes: [
      {title: 'Terrace', text: 'Outdoor tables available throughout the day, weather permitting.'},
      {title: 'Laptop-friendly', text: 'Best between 09:30 and 12:30 on weekdays.'},
      {title: 'Takeaway', text: 'Full coffee menu and a small pastry selection available to go.'},
      {title: 'Accessibility', text: 'Step-free entry and an accessible restroom on the main floor.'}
    ]
  },
  es: {
    eyebrow: 'Casa Nube · Barcelona',
    title: 'Calmado, céntrico y fácil de visitar.',
    intro: 'Un café de todo el día en Eixample para café, brunch y reuniones tranquilas entre planes de ciudad.',
    practicalNote: 'Atendemos sin reserva todo el día. Las reservas están disponibles para brunch en mesas de 5+ personas.',
    hoursTitle: 'Horario y ritmo de servicio',
    hoursIntro: 'Un ritmo semanal constante, con mañanas más calmadas y tardes flexibles.',
    hours: [
      {label: 'Lunes–Viernes', hours: '08:00 — 19:00', note: 'Cocina desde las 08:30 · brunch todo el día'},
      {label: 'Sábado', hours: '09:00 — 19:30', note: 'Servicio en terraza desde las 09:30'},
      {label: 'Domingo', hours: '09:00 — 18:30', note: 'Últimos pedidos de brunch a las 17:00'}
    ],
    reservationTitle: 'Reservas y visitas sin reserva',
    reservationIntro: 'Queremos que sea sencillo: puedes venir directamente o enviarnos una solicitud breve para grupos.',
    reservationPoints: [
      'Se atiende sin reserva para café, pastelería y la mayoría de mesas de dos a cuatro personas.',
      'Recomendamos reservar para grupos de brunch, mesas grandes o sábados a media mañana.',
      'Para cambios del mismo día, WhatsApp es el canal más rápido.'
    ],
    locationTitle: 'Ubicación',
    locationIntro: 'En Dreta de l’Eixample, a pocos minutos a pie de Passeig de Sant Joan y Girona.',
    addressLabel: 'Dirección',
    address: 'Carrer de la Diputació 215, 08011 Barcelona',
    neighborhoodLabel: 'Barrio',
    neighborhood: 'Eixample Dreta · Barcelona',
    arrivalLabel: 'Cómo llegar',
    arrival: 'Metro Girona (L4) a 6 minutos caminando. Aparcamiento en calle limitado.',
    actionsTitle: 'Planifica tu visita',
    actions: [
      {label: 'Reservar mesa', href: 'https://wa.me/34930000000?text=Hola%20Casa%20Nube%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa.', primary: true},
      {label: 'Cómo llegar', href: 'https://maps.google.com/?q=Carrer+de+la+Diputaci%C3%B3+215+Barcelona'},
      {label: 'WhatsApp', href: 'https://wa.me/34930000000'},
      {label: 'Instagram', href: 'https://instagram.com'}
    ],
    practicalTitle: 'Notas prácticas',
    practicalNotes: [
      {title: 'Terraza', text: 'Mesas exteriores disponibles todo el día, según clima.'},
      {title: 'Portátiles', text: 'Mejor franja entre 09:30 y 12:30 de lunes a viernes.'},
      {title: 'Takeaway', text: 'Toda la carta de café y una selección reducida de pastelería para llevar.'},
      {title: 'Accesibilidad', text: 'Entrada sin escalón y baño accesible en planta principal.'}
    ]
  },
  ca: {
    eyebrow: 'Casa Nube · Barcelona',
    title: 'Calmat, cèntric i fàcil de visitar.',
    intro: 'Un cafè de tot el dia a l’Eixample per a cafè, brunch i reunions tranquil·les entre plans de ciutat.',
    practicalNote: 'Atenem sense reserva durant tot el dia. Les reserves estan disponibles per a brunch en taules de 5+ persones.',
    hoursTitle: 'Horari i ritme de servei',
    hoursIntro: 'Un ritme setmanal estable, amb matins més tranquils i tardes flexibles.',
    hours: [
      {label: 'Dilluns–Divendres', hours: '08:00 — 19:00', note: 'Cuina des de les 08:30 · brunch tot el dia'},
      {label: 'Dissabte', hours: '09:00 — 19:30', note: 'Servei de terrassa des de les 09:30'},
      {label: 'Diumenge', hours: '09:00 — 18:30', note: 'Últimes comandes de brunch a les 17:00'}
    ],
    reservationTitle: 'Reserves i visites sense reserva',
    reservationIntro: 'Volem que sigui senzill: pots venir directament o enviar-nos una petició breu per a grups.',
    reservationPoints: [
      'Atenem sense reserva per a cafè, pastisseria i la majoria de taules de dues a quatre persones.',
      'Recomanem reservar per a grups de brunch, taules grans o dissabtes a mig matí.',
      'Per a canvis del mateix dia, WhatsApp és el canal més ràpid.'
    ],
    locationTitle: 'Ubicació',
    locationIntro: 'A la Dreta de l’Eixample, a pocs minuts a peu de Passeig de Sant Joan i Girona.',
    addressLabel: 'Adreça',
    address: 'Carrer de la Diputació 215, 08011 Barcelona',
    neighborhoodLabel: 'Barri',
    neighborhood: 'Eixample Dreta · Barcelona',
    arrivalLabel: 'Com arribar',
    arrival: 'Metro Girona (L4) a 6 minuts caminant. Aparcament al carrer limitat.',
    actionsTitle: 'Planifica la visita',
    actions: [
      {label: 'Reservar taula', href: 'https://wa.me/34930000000?text=Hola%20Casa%20Nube%2C%20m%27agradaria%20reservar%20una%20taula.', primary: true},
      {label: 'Com arribar', href: 'https://maps.google.com/?q=Carrer+de+la+Diputaci%C3%B3+215+Barcelona'},
      {label: 'WhatsApp', href: 'https://wa.me/34930000000'},
      {label: 'Instagram', href: 'https://instagram.com'}
    ],
    practicalTitle: 'Notes pràctiques',
    practicalNotes: [
      {title: 'Terrassa', text: 'Taules exteriors disponibles durant tot el dia, segons el temps.'},
      {title: 'Portàtils', text: 'Millor franja entre 09:30 i 12:30 de dilluns a divendres.'},
      {title: 'Takeaway', text: 'Tota la carta de cafè i una selecció reduïda de pastisseria per emportar.'},
      {title: 'Accessibilitat', text: 'Entrada sense esglaó i lavabo accessible a la planta principal.'}
    ]
  }
};

export function getVisitData(locale: AppLocale) {
  return visitByLocale[locale];
}
