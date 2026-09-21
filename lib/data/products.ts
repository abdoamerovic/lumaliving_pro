import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name_en: "Nova Coffee Table",
    name_ar: "طاولة نوفا",
    image: "/hero_image/coffee_table_1.avif",
    images: ["/hero_image/coffee_table_1.avif", "/hero_image/coffee_table_2.avif"],
    type: "table",
    typear: "طاولة",
    review: "4.7 (63)",
    reviewar: "4.7 (63)",
    rating: 4.7,
    price: 980,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#B8764F", "#96603D", "#2A2724"],
    descripetion_en:
      "The Nova Coffee Table pairs a handcrafted travertine top with slender blackened steel legs — a sophisticated focal point for the modern living room.",
    descripetion_ar:
      "تجمع طاولة القهوة نوفا بين سطح من الترافرتين مصنوع يدويًا وأرجل من الفولاذ الأسود الرقيق - وهي نقطة محورية أنيقة لغرفة المعيشة الحديثة.",
    spesifcation_en: {
      Dimensions: '36" W x 36" D x 16" H',
      Materials: ["Travertine", "Steel"],
      Care: "Wipe clean with a soft, dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: '36" عرض × 36" عمق × 16" ارتفاع',
      Materials: ["ترافرتين", "فولاذ"],
      Care: "امسحها بقطعة قماش ناعمة وجافة.",
    },
  },

  {
    id: 2,
    name_en: "Cloud Sofa",
    name_ar: "أريكة كلاود",
    image: "/hero_image/sofra_1.avif",
    images: ["/hero_image/sofra_1.avif", "/hero_image/sofra_2.avif"],
    type: "sofa",
    typear: "أريكة",
    review: "4.8 (124)",
    reviewar: "4.8 (124)",
    rating: 4.8,
    price: 4200,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#8A8478", "#2A2724", "#B8764F"],
    descripetion_en:
      "The Cloud Sofa wraps you in deep, plush cushions with a solid oak frame beneath — built for long evenings and lasting comfort.",
    descripetion_ar:
      "أريكة كلاود تحيطك بوسائد عميقة وفخمة فوق هيكل من خشب البلوط الصلب - مصممة لأمسيات طويلة وراحة تدوم.",
    spesifcation_en: {
      Dimensions: '92" W x 38" D x 34" H',
      Materials: ["Oak frame", "Velvet upholstery"],
      Care: "Spot clean, professional upholstery cleaning recommended.",
    },
    spesifcation_ar: {
      Dimensions: '92" عرض × 38" عمق × 34" ارتفاع',
      Materials: ["هيكل بلوط", "قماش مخملي"],
      Care: "تنظيف موضعي، ويُنصح بالتنظيف الاحترافي للأقمشة.",
    },
  },

  {
    id: 3,
    name_en: "Oslo Lounge Chair",
    name_ar: "كرسي أوسلو",
    image: "/hero_image/chair_1.avif",
    images: ["/hero_image/chair_1.avif", "/hero_image/chair_2.avif"],
    type: "chair",
    typear: "كرسي",
    review: "4.6 (89)",
    reviewar: "4.6 (89)",
    rating: 4.6,
    price: 1850,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#2A2724", "#B8764F", "#D9C9B6"],
    descripetion_en:
      "The Oslo Lounge Chair bends bentwood and buttoned leather into one fluid silhouette, made for reading corners and quiet mornings.",
    descripetion_ar:
      "يجمع كرسي أوسلو بين الخشب المقوس والجلد المزرر في خط واحد انسيابي، مصمم لزوايا القراءة والصباحات الهادئة.",
    spesifcation_en: {
      Dimensions: '26" W x 30" D x 40" H',
      Materials: ["Bentwood", "Leather upholstery"],
      Care: "Wipe with a damp cloth, condition leather every 6 months.",
    },
    spesifcation_ar: {
      Dimensions: '26" عرض × 30" عمق × 40" ارتفاع',
      Materials: ["خشب مقوس", "جلد"],
      Care: "امسحه بقطعة قماش مبللة، ورطّب الجلد كل 6 أشهر.",
    },
  },

  {
    id: 4,
    name_en: "Cove Armchair",
    name_ar: "كرسي كوف",
    image: "/hero_image/cova_1.avif",
    images: ["/hero_image/cova_1.avif", "/hero_image/cova_2.avif"],
    type: "chair",
    typear: "كرسي",
    review: "4.6 (67)",
    reviewar: "4.6 (67)",
    rating: 4.6,
    price: 1450,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#96603D", "#2A2724", "#E8DFD3"],
    descripetion_en:
      "The Cove Armchair sets a boucle seat inside slim black metal arms, striking a soft-meets-industrial balance for any corner.",
    descripetion_ar:
      "يضع كرسي كوف مقعدًا من قماش البوكليه داخل أذرع معدنية سوداء نحيلة، محققًا توازنًا بين النعومة والطابع الصناعي.",
    spesifcation_en: {
      Dimensions: '28" W x 30" D x 32" H',
      Materials: ["Boucle fabric", "Powder-coated steel"],
      Care: "Vacuum with upholstery attachment, spot clean spills.",
    },
    spesifcation_ar: {
      Dimensions: '28" عرض × 30" عمق × 32" ارتفاع',
      Materials: ["قماش بوكليه", "فولاذ مطلي بالمسحوق"],
      Care: "نظفه بالمكنسة الكهربائية، وامسح البقع فورًا.",
    },
  },

  {
    id: 5,
    name_en: "Forma Dining Table",
    name_ar: "طاولة فورما",
    image: "/hero_image/dining_table_1.avif",
    images: ["/hero_image/dining_table_1.avif"],
    type: "table",
    typear: "طاولة",
    review: "4.4 (55)",
    reviewar: "4.4 (55)",
    rating: 4.4,
    price: 2750,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#5C4A3A", "#2A2724", "#8A8478"],
    descripetion_en:
      "The Forma Dining Table seats six around a solid walnut top raised on angular hairpin legs, built for everyday meals and long dinners alike.",
    descripetion_ar:
      "تتسع طاولة فورما لست أشخاص حول سطح من الجوز الصلب مرتفع على أرجل رفيعة مائلة، مناسبة للوجبات اليومية والعشاء الطويل.",
    spesifcation_en: {
      Dimensions: '70" W x 36" D x 30" H',
      Materials: ["Solid walnut", "Steel legs"],
      Care: "Wipe clean with a soft, dry cloth, use coasters for hot dishes.",
    },
    spesifcation_ar: {
      Dimensions: '70" عرض × 36" عمق × 30" ارتفاع',
      Materials: ["خشب جوز صلب", "أرجل فولاذية"],
      Care: "امسحها بقطعة قماش ناعمة وجافة، واستخدم قواعد للأطباق الساخنة.",
    },
  },

  {
    id: 6,
    name_en: "Arc Floor Lamp",
    name_ar: "مصباح آرك",
    image: "/hero_image/arc_floor_1.avif",
    images: ["/hero_image/arc_floor_1.avif", "/hero_image/arc_floor_2.avif"],
    type: "light",
    typear: "إضاءة",
    review: "4.5 (47)",
    reviewar: "4.5 (47)",
    rating: 4.5,
    price: 620,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#1C1C1C", "#B8764F", "#8A8478"],
    descripetion_en:
      "The Arc Floor Lamp curves gently over the sofa on a weighted marble base, casting warm, focused light exactly where you need it.",
    descripetion_ar:
      "ينحني مصباح آرك بلطف فوق الأريكة على قاعدة رخامية ثقيلة، ليلقي إضاءة دافئة ومركزة بالضبط حيث تحتاجها.",
    spesifcation_en: {
      Dimensions: '84" H, arm reach 40"',
      Materials: ["Marble base", "Brushed steel arm"],
      Care: "Dust with a dry cloth, avoid direct sunlight on the marble.",
    },
    spesifcation_ar: {
      Dimensions: '84" ارتفاع، امتداد الذراع 40"',
      Materials: ["قاعدة رخامية", "ذراع فولاذي مصقول"],
      Care: "امسح الغبار بقطعة قماش جافة، وتجنب أشعة الشمس المباشرة على الرخام.",
    },
  },

  {
    id: 7,
    name_en: "Line Pendant Light",
    name_ar: "مصباح لاين",
    image: "/hero_image/line_light_1.avif",
    images: ["/hero_image/line_light_1.avif", "/hero_image/line_light_2.avif"],
    type: "light",
    typear: "إضاءة",
    review: "4.3 (31)",
    reviewar: "4.3 (31)",
    rating: 4.3,
    price: 540,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#2A2724", "#C9A877", "#E8DFD3"],
    descripetion_en:
      "The Line Pendant Light traces a single slender bar across the ceiling, holding three warm-glass globes for a soft linear glow over dining tables.",
    descripetion_ar:
      "يمتد مصباح لاين المعلق على شكل قضيب رفيع واحد عبر السقف، يحمل ثلاث كرات زجاجية دافئة لإضاءة خطية ناعمة فوق طاولات الطعام.",
    spesifcation_en: {
      Dimensions: '40" W, adjustable drop up to 60"',
      Materials: ["Brass finish", "Glass globes"],
      Care: "Dust gently, do not use abrasive cleaners on the finish.",
    },
    spesifcation_ar: {
      Dimensions: '40" عرض، قابل للتعديل حتى 60" ارتفاعًا',
      Materials: ["طلاء نحاسي", "كرات زجاجية"],
      Care: "امسح الغبار برفق، وتجنب المنظفات الكاشطة على الطلاء.",
    },
  },

  {
    id: 8,
    name_en: "Nest Side Tables",
    name_ar: "طاولات نيست الجانبية",
    image: "/hero_image/nest_1.avif",
    images: ["/hero_image/nest_1.avif", "/hero_image/nest_2.avif"],
    type: "table",
    typear: "طاولة",
    review: "4.6 (38)",
    reviewar: "4.6 (38)",
    rating: 4.6,
    price: 760,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#D9C9B6", "#2A2724", "#96603D"],
    descripetion_en:
      "The Nest Side Tables slot together as a set of two, their curved oak tops tucking neatly beneath one another when you need the floor space back.",
    descripetion_ar:
      "تتداخل طاولات نيست الجانبية كطقم من قطعتين، وتنزلق أسطحها المنحنية من خشب البلوط تحت بعضها عند الحاجة لمساحة أرضية أكبر.",
    spesifcation_en: {
      Dimensions: 'Large 20" W x 18" H, Small 16" W x 15" H',
      Materials: ["Solid oak"],
      Care: "Wipe clean with a soft, dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: 'الكبيرة 20" عرض × 18" ارتفاع، الصغيرة 16" عرض × 15" ارتفاع',
      Materials: ["خشب بلوط صلب"],
      Care: "امسحها بقطعة قماش ناعمة وجافة.",
    },
  },

  {
    id: 9,
    name_en: "Ridge Bed Frame",
    name_ar: "سرير ريدج",
    image: "/hero_image/ridge_1.avif",
    images: ["/hero_image/ridge_1.avif", "/hero_image/ridge_2.avif"],
    type: "bed",
    typear: "سرير",
    review: "4.7 (78)",
    reviewar: "4.7 (78)",
    rating: 4.7,
    price: 3100,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#8A8478", "#2A2724", "#B8764F"],
    descripetion_en:
      "The Ridge Bed Frame sets a tufted linen headboard against a low solid-wood base, keeping the bedroom grounded and quietly textured.",
    descripetion_ar:
      "يضع سرير ريدج مسندًا مبطنًا من الكتان فوق قاعدة خشبية صلبة منخفضة، ليمنح غرفة النوم طابعًا هادئًا وملمسًا مميزًا.",
    spesifcation_en: {
      Dimensions: 'Queen 64" W x 84" D x 48" H (headboard)',
      Materials: ["Linen upholstery", "Solid pine base"],
      Care: "Vacuum headboard gently, wipe frame with a dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: 'كوين 64" عرض × 84" عمق × 48" ارتفاع (المسند)',
      Materials: ["قماش كتان", "قاعدة من خشب الصنوبر الصلب"],
      Care: "نظف المسند بالمكنسة برفق، وامسح الهيكل بقطعة قماش جافة.",
    },
  },

  // =========================================================
  // NEW PRODUCTS - SECOND IMAGES
  // =========================================================

  {
    id: 10,
    name_en: "Nova Coffee Table II",
    name_ar: "طاولة نوفا II",
    image: "/hero_image/coffee_table_2.avif",
    images: ["/hero_image/coffee_table_2.avif"],
    type: "table",
    typear: "طاولة",
    review: "4.6 (48)",
    reviewar: "4.6 (48)",
    rating: 4.6,
    price: 1080,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#B8764F", "#96603D", "#2A2724"],
    descripetion_en:
      "The Nova Coffee Table pairs a handcrafted travertine top with slender blackened steel legs — a sophisticated focal point for the modern living room.",
    descripetion_ar:
      "تجمع طاولة القهوة نوفا بين سطح من الترافرتين مصنوع يدويًا وأرجل من الفولاذ الأسود الرقيق - وهي نقطة محورية أنيقة لغرفة المعيشة الحديثة.",
    spesifcation_en: {
      Dimensions: '40" W x 38" D x 17" H',
      Materials: ["Travertine", "Steel"],
      Care: "Wipe clean with a soft, dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: '40" عرض × 38" عمق × 17" ارتفاع',
      Materials: ["ترافرتين", "فولاذ"],
      Care: "امسحها بقطعة قماش ناعمة وجافة.",
    },
  },

  {
    id: 11,
    name_en: "Cloud Sofa II",
    name_ar: "أريكة كلاود II",
    image: "/hero_image/sofra_2.avif",
    images: ["/hero_image/sofra_2.avif"],
    type: "sofa",
    typear: "أريكة",
    review: "4.7 (98)",
    reviewar: "4.7 (98)",
    rating: 4.7,
    price: 4050,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#8A8478", "#2A2724", "#B8764F"],
    descripetion_en:
      "The Cloud Sofa wraps you in deep, plush cushions with a solid oak frame beneath — built for long evenings and lasting comfort.",
    descripetion_ar:
      "أريكة كلاود تحيطك بوسائد عميقة وفخمة فوق هيكل من خشب البلوط الصلب - مصممة لأمسيات طويلة وراحة تدوم.",
    spesifcation_en: {
      Dimensions: '88" W x 36" D x 33" H',
      Materials: ["Oak frame", "Velvet upholstery"],
      Care: "Spot clean, professional upholstery cleaning recommended.",
    },
    spesifcation_ar: {
      Dimensions: '88" عرض × 36" عمق × 33" ارتفاع',
      Materials: ["هيكل بلوط", "قماش مخملي"],
      Care: "تنظيف موضعي، ويُنصح بالتنظيف الاحترافي للأقمشة.",
    },
  },

  {
    id: 12,
    name_en: "Oslo Lounge Chair II",
    name_ar: "كرسي أوسلو II",
    image: "/hero_image/chair_2.avif",
    images: ["/hero_image/chair_2.avif"],
    type: "chair",
    typear: "كرسي",
    review: "4.5 (72)",
    reviewar: "4.5 (72)",
    rating: 4.5,
    price: 1780,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#2A2724", "#B8764F", "#D9C9B6"],
    descripetion_en:
      "The Oslo Lounge Chair bends bentwood and buttoned leather into one fluid silhouette, made for reading corners and quiet mornings.",
    descripetion_ar:
      "يجمع كرسي أوسلو بين الخشب المقوس والجلد المزرر في خط واحد انسيابي، مصمم لزوايا القراءة والصباحات الهادئة.",
    spesifcation_en: {
      Dimensions: '28" W x 32" D x 42" H',
      Materials: ["Bentwood", "Leather upholstery"],
      Care: "Wipe with a damp cloth, condition leather every 6 months.",
    },
    spesifcation_ar: {
      Dimensions: '28" عرض × 32" عمق × 42" ارتفاع',
      Materials: ["خشب مقوس", "جلد"],
      Care: "امسحه بقطعة قماش مبللة، ورطّب الجلد كل 6 أشهر.",
    },
  },

  {
    id: 13,
    name_en: "Cove Armchair II",
    name_ar: "كرسي كوف II",
    image: "/hero_image/cova_2.avif",
    images: ["/hero_image/cova_2.avif"],
    type: "chair",
    typear: "كرسي",
    review: "4.5 (59)",
    reviewar: "4.5 (59)",
    rating: 4.5,
    price: 1520,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#96603D", "#2A2724", "#E8DFD3"],
    descripetion_en:
      "The Cove Armchair sets a boucle seat inside slim black metal arms, striking a soft-meets-industrial balance for any corner.",
    descripetion_ar:
      "يضع كرسي كوف مقعدًا من قماش البوكليه داخل أذرع معدنية سوداء نحيلة، محققًا توازنًا بين النعومة والطابع الصناعي.",
    spesifcation_en: {
      Dimensions: '30" W x 32" D x 34" H',
      Materials: ["Boucle fabric", "Powder-coated steel"],
      Care: "Vacuum with upholstery attachment, spot clean spills.",
    },
    spesifcation_ar: {
      Dimensions: '30" عرض × 32" عمق × 34" ارتفاع',
      Materials: ["قماش بوكليه", "فولاذ مطلي بالمسحوق"],
      Care: "نظفه بالمكنسة الكهربائية، وامسح البقع فورًا.",
    },
  },

  {
    id: 14,
    name_en: "Arc Floor Lamp II",
    name_ar: "مصباح آرك II",
    image: "/hero_image/arc_floor_2.avif",
    images: ["/hero_image/arc_floor_2.avif"],
    type: "light",
    typear: "إضاءة",
    review: "4.4 (39)",
    reviewar: "4.4 (39)",
    rating: 4.4,
    price: 680 ,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#1C1C1C", "#B8764F", "#8A8478"],
    descripetion_en:
      "The Arc Floor Lamp curves gently over the sofa on a weighted marble base, casting warm, focused light exactly where you need it.",
    descripetion_ar:
      "ينحني مصباح آرك بلطف فوق الأريكة على قاعدة رخامية ثقيلة، ليلقي إضاءة دافئة ومركزة بالضبط حيث تحتاجها.",
    spesifcation_en: {
      Dimensions: '88" H, arm reach 44"',
      Materials: ["Marble base", "Brushed steel arm"],
      Care: "Dust with a dry cloth, avoid direct sunlight on the marble.",
    },
    spesifcation_ar: {
      Dimensions: '88" ارتفاع، امتداد الذراع 44"',
      Materials: ["قاعدة رخامية", "ذراع فولاذي مصقول"],
      Care: "امسح الغبار بقطعة قماش جافة، وتجنب أشعة الشمس المباشرة على الرخام.",
    },
  },

  {
    id: 15,
    name_en: "Line Pendant Light II",
    name_ar: "مصباح لاين II",
    image: "/hero_image/line_light_2.avif",
    images: ["/hero_image/line_light_2.avif"],
    type: "light",
    typear: "إضاءة",
    review: "4.2 (26)review",
    reviewar: "4.2 (26) مراجعه",
    rating: 4.2,
    price: 580 ,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#2A2724", "#C9A877", "#E8DFD3"],
    descripetion_en:
      "The Line Pendant Light traces a single slender bar across the ceiling, holding three warm-glass globes for a soft linear glow over dining tables.",
    descripetion_ar:
      "يمتد مصباح لاين المعلق على شكل قضيب رفيع واحد عبر السقف، يحمل ثلاث كرات زجاجية دافئة لإضاءة خطية ناعمة فوق طاولات الطعام.",
    spesifcation_en: {
      Dimensions: '44" W, adjustable drop up to 64"',
      Materials: ["Brass finish", "Glass globes"],
      Care: "Dust gently, do not use abrasive cleaners on the finish.",
    },
    spesifcation_ar: {
      Dimensions: '44" عرض، قابل للتعديل حتى 64" ارتفاعًا',
      Materials: ["طلاء نحاسي", "كرات زجاجية"],
      Care: "امسح الغبار برفق، وتجنب المنظفات الكاشطة على الطلاء.",
    },
  },

  {
    id: 16,
    name_en: "Nest Side Tables II",
    name_ar: "طاولات نيست الجانبية II",
    image: "/hero_image/nest_2.avif",
    images: ["/hero_image/nest_2.avif"],
    type: "table",
    typear: "طاولة",
    review: "4.5 (34)",
    reviewar: "4.5 (34)",
    rating: 4.5,
    price: 790 ,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#D9C9B6", "#2A2724", "#96603D"],
    descripetion_en:
      "The Nest Side Tables slot together as a set of two, their curved oak tops tucking neatly beneath one another when you need the floor space back.",
    descripetion_ar:
      "تتداخل طاولات نيست الجانبية كطقم من قطعتين، وتنزلق أسطحها المنحنية من خشب البلوط تحت بعضها عند الحاجة لمساحة أرضية أكبر.",
    spesifcation_en: {
      Dimensions: 'Large 22" W x 19" H, Small 17" W x 16" H',
      Materials: ["Solid oak"],
      Care: "Wipe clean with a soft, dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: 'الكبيرة 22" عرض × 19" ارتفاع، الصغيرة 17" عرض × 16" ارتفاع',
      Materials: ["خشب بلوط صلب"],
      Care: "امسحها بقطعة قماش ناعمة وجافة.",
    },
  },

  {
    id: 17,
    name_en: "Ridge Bed Frame II",
    name_ar: "سرير ريدج II",
    image: "/hero_image/ridge_2.avif",
    images: ["/hero_image/ridge_2.avif"],
    type: "bed",
    typear: "سرير",
    review: "4.6 (65)",
    reviewar: "4.6 (65)",
    rating: 4.6,
    price: 3250,
    availability: "✓ In Stock",
    availabilityar: "✓ متوفر",
    color: ["#8A8478", "#2A2724", "#B8764F"],
    descripetion_en:
      "The Ridge Bed Frame sets a tufted linen headboard against a low solid-wood base, keeping the bedroom grounded and quietly textured.",
    descripetion_ar:
      "يضع سرير ريدج مسندًا مبطنًا من الكتان فوق قاعدة خشبية صلبة منخفضة، ليمنح غرفة النوم طابعًا هادئًا وملمسًا مميزًا.",
    spesifcation_en: {
      Dimensions: 'King 78" W x 84" D x 50" H (headboard)',
      Materials: ["Linen upholstery", "Solid pine base"],
      Care: "Vacuum headboard gently, wipe frame with a dry cloth.",
    },
    spesifcation_ar: {
      Dimensions: 'كينج 78" عرض × 84" عمق × 50" ارتفاع (المسند)',
      Materials: ["قماش كتان", "قاعدة من خشب الصنوبر الصلب"],
      Care: "نظف المسند بالمكنسة برفق، وامسح الهيكل بقطعة قماش جافة.",
    },
  },
  {
  id: 18,
  name_en: "Oak Sideboard",
  name_ar: "بوفيه من خشب البلوط",
  image: "/hero_image/storage.jpg",
  images: ["/hero_image/storage.jpg"],
  type: "storage",
  typear: "تخزين",
  review: "4.7 (52)",
  reviewar: "4.7 (52)",
  rating: 4.7,
  price: 1450,
  availability: "✓ In Stock",
  availabilityar: "✓ متوفر",
  color: ["#B8764F", "#1C1C1C", "#E8E0D2"],
  descripetion_en:
    "The Oak Sideboard pairs clean lines with generous storage, three deep drawers and two soft-close doors that keep the room calm and clutter-free.",
  descripetion_ar:
    "يجمع البوفيه الخشبي بين الخطوط النظيفة والمساحة التخزينية الواسعة، بثلاثة أدراج عميقة وبابين بإغلاق هادئ ليبقى المكان مرتبًا وخاليًا من الفوضى.",
  spesifcation_en: {
    Dimensions: '72" W, 18" D, 30" H',
    Materials: ["Solid oak", "Brass handles"],
    Care: "Wipe with a soft damp cloth, avoid harsh cleaners and standing water.",
  },
  spesifcation_ar: {
    Dimensions: '72" عرض، 18" عمق، 30" ارتفاع',
    Materials: ["خشب بلوط صلب", "مقابض نحاسية"],
    Care: "امسح بقطعة قماش ناعمة ورطبة، وتجنب المنظفات القوية والمياه الراكدة.",
  },
},
];