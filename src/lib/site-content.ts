/**
 * محتوى موقع رواد التقدم للدعاية والإعلان — Rowad Al Taqadom Advertising
 */

export const site = {
  brandAr: "رواد التقدم للدعاية والإعلان",
  brandEn: "Rowad Al Taqadom Advertising",
  logoSrc: "/brand/logo.svg",
  logoAlt: "شعار رواد التقدم للدعاية والإعلان — RT",
  homeMetadataTitle:
    "رواد التقدم للدعاية والإعلان — تصنيع لوحات إعلانية وتنفيذ إشارات في المملكة",
  homeMetadataDescription:
    "أفكار ترى ونتائج تقاس. تصنيع جميع أنواع اللوحات الإعلانية، صيانة ضمن الضمان، خبرة تقارب عشرين عاماً، وتغطية تنفيذ وتركيب في أنحاء المملكة.",
  servicesMetadataTitle: "خدماتنا وتخصصاتنا — رواد التقدم للدعاية والإعلان",
  servicesMetadataDescription:
    "الرؤية البصرية، تحليل الأعمال، التنفيذ المحترف، وحروف بارزة ولوحات ومطبوعات وهوية وتسوير.",
} as const;

export const nav = [
  { href: "/#about", label: "من نحن" },
  { href: "/#expertise", label: "خبراتنا" },
  { href: "/#products", label: "منتجاتنا" },
  { href: "/#portfolio", label: "أعمالنا" },
  { href: "/#partners", label: "شركاؤنا" },
  { href: "/services", label: "خدماتنا" },
  { href: "/#contact", label: "تواصل معنا" },
] as const;

export const hero = {
  headline:
    "تصنيع وتنفيذ لوحات إعلانية احترافية مع ضمان وجودة حقيقية",
  sloganAr: "أفكار ترى .. ونتائج تقاس",
  sloganEn: "Ideas to be seen... Results to be measured.",
  sub:
    "متخصصون في تصنيع جميع أنواع اللوحات الإعلانية، خدمات ما بعد البيع، والصيانة ضمن فترة ضمان محددة، مع كادر عمل متخصّص وتغطية تنفيذ وتركيب في أنحاء المملكة.",
  ctaPrimary: "تواصل معنا",
  ctaPrimaryHref: "/#contact",
  ctaSecondary: "معرض الأعمال",
  ctaSecondaryHref: "/#portfolio",
} as const;

export const about = {
  id: "about",
  title: "من نحن؟",
  imageSrc: "/brand/profile-slide-1.png",
  imageAlt:
    "لمحة من هوية رواد التقدم للدعاية والإعلان وأعمال اللوحات والطباعة",
  body:
    "شركة رواد التقدم للدعاية والإعلان، متخصصة في تصنيع جميع أنواع اللوحات الإعلانية، بالإضافة إلى خدمات ما بعد البيع التي تشمل ضمان صيانة مجاني من الشركة لفترة محددة. وبعد انتهاء فترة الضمان توفر الشركة خدمة الصيانة حسب الطلب بأسعار مدعومة للحفاظ على الثقة التي اكتسبتها الشركة، ولدينا أيضاً عقود صيانة سنوية. نتميز بوجود كادر عمل متخصص في هذا المجال منذ فترة التأسيس التي اقتربت من عشرين عاماً. ولدينا خدمة تغطية لتنفيذ وتركيب اللوحات في أنحاء المملكة، وتنظيم المعارض والفعاليات الوطنية والخاصة، وجذب المعلنين والرعاة. ولدينا قسم متخصص في تصميم وإنتاج الكتب والمجلات والهوية والمطبوعات على أعلى مستوى.",
} as const;

export type Pillar = {
  title: string;
  bullets: readonly string[];
};

export const pillars: readonly Pillar[] = [
  {
    title: "الرؤية البصرية",
    bullets: [
      "جذب انتباه الجمهور المستهدف لنجاح الإعلان.",
      "إيصال الرسالة بفعالية وبشكل أوضح.",
      "تعزيز التفاعل والانخراط من خلال الألوان والشعارات التي تميز العلامة عن المنافسين.",
      "الإبداع والابتكار المستمر لتحفيز اهتمام الجمهور.",
    ],
  },
  {
    title: "تحليل الأعمال",
    bullets: [
      "دراسة العلامة من جميع الجوانب التسويقية وتقديم التوصيات.",
      "تحليل السوق والجمهور المستهدف وفهم احتياجاتهم وتحديد المنافسين.",
      "تحويل تحليل الحملات الإعلانية إلى مبيعات فعلية.",
      "توصيات استراتيجية لتحسين الأداء التسويقي وفاعلية الحملات وزيادة المبيعات.",
    ],
  },
  {
    title: "التنفيذ المحترف",
    bullets: [
      "تحويل التصاميم والمخططات إلى واقع ملموس ومرئي.",
      "اختيار المواد والتقنيات والأبعاد والتفاصيل الفنية المناسبة.",
      "مراقبة الجودة أثناء التنفيذ لضمان المطابقة لمواصفات التصميم.",
      "ضمان حقيقي على المواد والمنفذ.",
    ],
  },
];

export type Product = { title: string; description: string };

export const products: readonly Product[] = [
  {
    title: "حروف بارزة",
    description:
      "تصنيع وتنفيذ حروف ثلاثية الأبعاد بإضاءة وخامات عالية الجودة لواجهات المحلات والمباني.",
  },
  {
    title: "بنرات ولوحات",
    description:
      "لوحات إعلانية داخلية وخارجية وبنرات بصيغ متعددة تناسب الحملات والعروض العقارية والتجارية.",
  },
  {
    title: "مطبوعات",
    description:
      "مطبوعات ورقية ودعائية بدقة ألوان عالية لتلبية احتياجات العلامة والفعاليات.",
  },
  {
    title: "الهوية",
    description:
      "تصميم وتطبيق الهوية البصرية والشركات والأدلة الإرشادية بمستوى احترافي.",
  },
  {
    title: "تسوير",
    description:
      "تسوير مواقع الإنشاءات والمشاريع بلوحات عالية الوضوح وتنسيق بصري يبرز المشروع.",
  },
];

export type PortfolioCategory =
  | "all"
  | "letters"
  | "banners"
  | "prints"
  | "hoarding";

export type PortfolioItem = {
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "all">;
};

/** صور من بروفايل الشركة؛ يمكن استبدالها بملفات أعلى دقة عند توفرها في public/portfolio */
export const portfolioItems: readonly PortfolioItem[] = [
  {
    src: "/portfolio/portfolio-01.png",
    alt: "معرض أعمال — لوحات وإعلانات من تنفيذ رواد التقدم للدعاية والإعلان",
    category: "banners",
  },
  {
    src: "/portfolio/portfolio-02.png",
    alt: "معرض أعمال — مطبوعات وهويات وتطبيقات إعلانية",
    category: "prints",
  },
];

export const portfolioCategoryLabels: Record<
  PortfolioCategory,
  string
> = {
  all: "الكل",
  letters: "حروف بارزة",
  banners: "بنرات ولوحات",
  prints: "مطبوعات",
  hoarding: "تسوير",
};

export type Partner = { name: string };

/** شركاء مذكورون في الطلب؛ يمكن إضافة شعارات لاحقاً في public/partners */
export const partners: readonly Partner[] = [
  { name: "KFC" },
  { name: "SAPAC" },
  { name: "نادي الرياض" },
  { name: "معهد الإدارة العامة" },
];

export const stats = [
  {
    value: "+20",
    label: "عاماً تقريباً",
    caption: "خبرة تراكمية وفريق متخصص منذ التأسيس",
  },
  {
    value: "المملكة",
    label: "تغطية التنفيذ",
    caption: "تنفيذ وتركيب اللوحات في أنحاء المملكة",
  },
  {
    value: "ضمان",
    label: "صيانة واحترافية",
    caption: "صيانة مجانية ضمن الضمان وعقود صيانة سنوية",
  },
] as const;

export const contactInfo = {
  phones: ["0544449721", "0566649993"] as const,
  addressAr: "المملكة العربية السعودية — الرياض — ظهرة لبن — شارع حائل",
  addressEn: "Hail Street, Dhahrat Laban, Riyadh, Saudi Arabia",
  websiteLabel: "rwoad-adv.com",
  websiteUrl: "https://rwoad-adv.com",
} as const;

export const socialLinks = [
  {
    label: "X",
    handle: "@rwoad_tqdm",
    href: "https://x.com/rwoad_tqdm",
  },
  {
    label: "Instagram",
    handle: "@rwoad_tqdm",
    href: "https://instagram.com/rwoad_tqdm",
  },
  {
    label: "TikTok",
    handle: "@rwoad.ksa",
    href: "https://www.tiktok.com/@rwoad.ksa",
  },
  {
    label: "Snapchat",
    handle: "@rwoad_tqdm",
    href: "https://www.snapchat.com/add/rwoad_tqdm",
  },
] as const;

export const contactForm = {
  title: "تواصل معنا",
  intro:
    "نرحّب باستفساراتكم وطلبات التوريد والتركيب والصيانة. املأ النموذج أو تواصل عبر الهاتف ووسائل التواصل.",
  fields: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "الرسالة",
  },
  submit: "إرسال الرسالة",
} as const;

/** نص تمهيدي لصفحة الخدمات — يكمّل الصفحة الرئيسية دون تكرار حرفي */
export const servicesPageCopy = {
  hero: {
    headline: "خدماتنا وتخصصاتنا",
    sub:
      "نطبّق منهجاً يبدأ بالرؤية البصرية ويمر بتحليل الأعمال ليصل إلى تنفيذ محترف على أرض الواقع، مع منتجات واضحة: حروف بارزة، بنرات ولوحات، مطبوعات، هوية، وتسوير مواقع.",
  },
  closing:
    "للمناقشة التفصيلية لمشروعك أو طلب عرض سعر، تواصل معنا عبر الهاتف أو نموذج التواصل في الصفحة الرئيسية.",
  closingCta: "انتقل إلى التواصل",
  closingHref: "/#contact",
} as const;
