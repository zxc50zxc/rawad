/**
 * Exact Arabic copy from the live site — do not edit wording.
 * Home: http://lightcyan-chicken-121198.hostingersite.com/
 * Services: http://lightcyan-chicken-121198.hostingersite.com/services
 */

export const site = {
  brand: "رواد للإعلان",
  homeMetadataTitle: "رواد للإعلان - حلول تسويق رقمي متكاملة",
  servicesMetadataTitle: "خدماتنا - رواد للإعلان",
} as const;

export const home = {
  hero: {
    headline: "حلول إعلانية وتسويقية متكاملة لنمو عملك",
    sub:
      "نساعدك في بناء هوية بصرية قوية وتحقيق أهدافك التسويقية من خلال استراتيجيات رقمية مبتكرة وإدارة احترافية",
    ctaPrimary: "احصل على استشارة مجانية",
    ctaSecondary: "اكتشف خدماتنا",
  },
  project: {
    title: "افتح مشروعك معنا",
    body: "سواء كنت تبدأ مشروعاً جديداً أو ترغب في تطوير عملك الحالي، فريقنا جاهز لتحويل أفكارك إلى واقع ملموس يحقق النجاح.",
    cta: "ابدأ الآن",
  },
  why: {
    title: "لماذا تختار رواد للإعلان؟",
    intro:
      "نحن نجمع بين الإبداع والاستراتيجية لتقديم حلول تسويقية تحقق نتائج ملموسة",
  },
  stats: [
    {
      value: "247+",
      label: "عميل راضٍ",
      caption: "نفخر بثقة عملائنا",
    },
    {
      value: "89%",
      label: "زيادة في المبيعات",
      caption: "متوسط نمو عملائنا",
    },
    {
      value: "4.8",
      label: "تقييم العملاء",
      caption: "من أصل 5 نجوم",
    },
  ],
  contact: {
    title: "تواصل معنا",
    intro:
      "نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك",
    fields: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "الرسالة",
    },
    submit: "إرسال الرسالة",
  },
} as const;

export const servicesPage = {
  hero: {
    headline: "خدماتنا المتكاملة",
    sub: "نقدم باقة شاملة من الخدمات الإعلانية والتسويقية المصممة خصيصاً لتلبية احتياجات عملك وتحقيق أهدافك",
  },
} as const;

export type ServiceItem = {
  title: string;
  description: string;
  /** Tailwind grid classes for home bento (md+) */
  homeBentoClass: string;
  /** Tailwind grid classes for /services bento (md+) */
  servicesBentoClass: string;
};

export const services: ServiceItem[] = [
  {
    title: "تصميم الهوية التجارية",
    description:
      "نبتكر هويات بصرية متكاملة تعكس شخصية علامتك التجارية وتترك انطباعاً لا يُنسى لدى جمهورك المستهدف.",
    homeBentoClass: "md:col-span-3 md:row-span-2",
    servicesBentoClass: "md:col-span-3 lg:col-span-4 md:row-span-2",
  },
  {
    title: "تنفيذ اللوحات الإعلانية",
    description:
      "تصميم وتصنيع وتركيب كافة أنواع اللوحات الإعلانية الداخلية والخارجية بأعلى معايير الجودة والمتانة.",
    homeBentoClass: "md:col-span-3 md:row-span-1",
    servicesBentoClass: "md:col-span-3 lg:col-span-2 md:row-span-1",
  },
  {
    title: "تجهيز المعارض والبوثات",
    description:
      "حلول متكاملة لتصميم وتنفيذ أجنحة المعارض والفعاليات لضمان حضور بارز ومميز لشركتك.",
    homeBentoClass: "md:col-span-2 md:row-span-1",
    servicesBentoClass: "md:col-span-2 lg:col-span-2 md:row-span-1",
  },
  {
    title: "الطباعة الرقمية",
    description:
      "خدمات طباعة رقمية متطورة لكافة المطبوعات الورقية والدعائية بدقة عالية وألوان زاهية.",
    homeBentoClass: "md:col-span-2 md:row-span-1",
    servicesBentoClass: "md:col-span-2 lg:col-span-2 md:row-span-1",
  },
  {
    title: "الإنتاج المرئي",
    description:
      "إنتاج فيديوهات ترويجية، موشن جرافيك، وتغطيات مصورة احترافية تبرز خدماتك ومنتجاتك.",
    homeBentoClass: "md:col-span-2 md:row-span-2",
    servicesBentoClass: "md:col-span-2 lg:col-span-3 md:row-span-2",
  },
  {
    title: "التسويق الرقمي",
    description:
      "إدارة حسابات التواصل الاجتماعي، حملات إعلانية ممولة، وتحسين محركات البحث لزيادة مبيعاتك.",
    homeBentoClass: "md:col-span-4 md:row-span-1",
    servicesBentoClass: "md:col-span-4 lg:col-span-3 md:row-span-1",
  },
];
