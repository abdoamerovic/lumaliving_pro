import {Review} from "@/types/reviews"

export const reviewsAr: Review[] = [
  // Product 1 - Nova Coffee Table
  {
    id: 1,
    type:"table",
    productId: 1,
    img: "س",
    name: "سارة ك.",
    rating: 5,
    comment:
      "قطعة رائعة جدًا. الجودة فاقت توقعاتي، وشكلها أجمل بكثير في الحقيقة.",
  },
  {
    id: 2,
    type:"table",
    productId: 1,
    img: "م",
    name: "محمد ر.",
    rating: 5,
    comment:
      "سطح الترافرتين جميل جدًا ويعطي إحساسًا بالفخامة. تناسب غرفة المعيشة بشكل مثالي.",
  },
  {
    id: 3,
    type:"table",
    productId: 1,
    img: "ٳ",
    name: "إيما ت.",
    rating: 4,
    comment:
      "طاولة جميلة بتصميم عصري. الخامات تبدو عالية الجودة ومتينة.",
  },

  // Product 2 - Cloud Sofa
  {
    id: 4,
    type:"sofa",
    productId: 2,
    img: "د",
    name: "دانيال م.",
    rating: 5,
    comment:
      "الأريكة مريحة جدًا. الوسائد ناعمة ومريحة والتصميم جميل للغاية.",
  },
  {
    id: 5,
    type:"sofa",
    productId: 2,
    img: "ٲ",
    name: "أوليفيا ر.",
    rating: 5,
    comment:
      "أريكة كلاود غيرت شكل غرفة المعيشة تمامًا. مريحة جدًا وأنيقة.",
  },
  {
    id: 6,
    type:"sofa",
    productId: 2,
    img: "ج",
    name: "جيمس و.",
    rating: 4,
    comment:
      "جودة ممتازة ومريحة جدًا. حجمها أكبر مما توقعت، لذلك تأكد من قياس المساحة أولًا.",
  },

  // Product 3 - Oslo Lounge Chair
  {
    id: 7,
    type:"chair",
    productId: 3,
    img: "ل",
    name: "ليام س.",
    rating: 5,
    comment:
      "كرسي جميل جدًا ومريح للغاية. أصبح المكان المفضل لدي للقراءة.",
  },
  {
    id: 8,
    type:"chair",
    productId: 3,
    img: "ص",
    name: "صوفيا م.",
    rating: 4,
    comment:
      "تصميم الخشب المقوس رائع جدًا. الجلد فاخر والكرسي متين.",
  },
  {
    id: 9,
    type:"chair",
    productId: 3,
    img: "ن",
    name: "نوح ج.",
    rating: 5,
    comment:
      "هذا بالضبط ما كنت أبحث عنه لركن القراءة. أنيق ومريح وجودته ممتازة.",
  },

  // Product 4 - Cove Armchair
  {
    id: 10,
    type:"chair",
    productId: 4,
    img: "م",
    name: "ميا أ.",
    rating: 5,
    comment:
      "قماش البوكليه ناعم جدًا والكرسي يبدو رائعًا في زاوية الغرفة.",
  },
  {
    id: 11,
    type:"chair",
    productId: 4,
    img: "ٳ",
    name: "إيثان ب.",
    rating: 4,
    comment:
      "كرسي أنيق ومريح بشكل مفاجئ. الأذرع المعدنية السوداء تضيف لمسة عصرية جميلة.",
  },
  {
    id: 12,
    type:"chair",
    productId: 4,
    img: "ج",
    name: "جريس ل.",
    rating: 5,
    comment:
      "أحببت الجمع بين المقعد الناعم والإطار المعدني. شكله مطابق للصور تمامًا.",
  },

  // Product 5 - Forma Dining Table
  {
    id: 13,
    type:"table",
    productId: 5,
    img: "ر",
    name: "روبرت هـ.",
    rating: 5,
    comment:
      "سطح الجوز جميل جدًا ومتين للغاية. الحجم مناسب تمامًا لغرفة الطعام.",
  },
  {
    id: 14,
    type:"table",
    productId: 5,
    img: "ٳ",
    name: "إميلي ج.",
    rating: 4,
    comment:
      "طاولة طعام جميلة بتصميم عصري وبسيط. تركيبها كان سهلًا.",
  },
  {
    id: 15,
    type:"table",
    productId: 5,
    img: "د",
    name: "ويليام د.",
    rating: 4,
    comment:
      "جودة ممتازة بالنسبة للسعر. لون وتشطيب خشب الجوز أنيق ودافئ.",
  },

  // Product 6 - Arc Floor Lamp
  {
    id: 16,
    type:"light",
    productId: 6,
    img: "ش",
    name: "شارلوت ب.",
    rating: 5,
    comment:
      "الإضاءة دافئة ومريحة، والتصميم المنحني يبدو رائعًا بجانب الأريكة.",
  },
  {
    id: 17,
    type:"light",
    productId: 6,
    img: "ه",
    name: "هنري ت.",
    rating: 4,
    comment:
      "مصباح جميل وقاعدة الرخام ثابتة جدًا. يضيف جوًا رائعًا للغرفة.",
  },
  {
    id: 18,
    type:"light",
    productId: 6,
    img: "ا",
    name: "أميليا س.",
    rating: 5,
    comment:
      "بالضبط نوع المصباح الذي كنت أبحث عنه. أنيق وبسيط ويوفر إضاءة ممتازة.",
  },

  // Product 7 - Line Pendant Light
  {
    id: 19,
    type:"light",
    productId: 7,
    img: "ل",
    name: "لوكاس ف.",
    rating: 5,
    comment:
      "الكرات الزجاجية الثلاث تعطي إضاءة دافئة وجميلة جدًا فوق طاولة الطعام.",
  },
  {
    id: 20,
    type:"light",
    productId: 7,
    img: "ٳ",
    name: "إيزابيلا ن.",
    rating: 4,
    comment:
      "مصباح معلق أنيق جدًا. التصميم الخطي البسيط مناسب لغرفة الطعام.",
  },
  {
    id: 21,
    type:"light",
    productId: 7,
    img: "ب",
    name: "بنجامين ك.",
    rating: 4,
    comment:
      "شكله فاخر ويجعل الغرفة أكثر دفئًا وجمالًا في المساء.",
  },

  // Product 8 - Nest Side Tables
  {
    id: 22,
    type:"table",
    productId: 8,
    img: "ٳ",
    name: "إيلا و.",
    rating: 5,
    comment:
      "الطاولات جميلة وعملية جدًا. أحب إمكانية فصلها أو وضعها داخل بعضها.",
  },
  {
    id: 23,
    type:"table",
    productId: 8,
    img: "أ",
    name: "ألكسندر ج.",
    rating: 4,
    comment:
      "تصميم رائع وهيكل متين. تناسب المكان بجانب الأريكة بشكل جميل.",
  },
  {
    id: 24,
    type:"table",
    productId: 8,
    img: "ك",
    name: "كلوي ر.",
    rating: 5,
    comment:
      "بسيطة وأنيقة ومفيدة جدًا. أكثر شيء أعجبني هو تصميم الأسطح الخشبية المنحنية.",
  },

  // Product 9 - Ridge Bed Frame
  {
    id: 25,
    type:"bed",
    productId: 9,
    img: "ص",
    name: "صوفي إ.",
    rating: 5,
    comment:
      "السرير جميل جدًا ومتين. مسند الكتان يعطي غرفة النوم مظهرًا هادئًا وأنيقًا.",
  },
  {
    id: 26,
    type:"bed",
    productId: 9,
    img: "ج",
    name: "جاك ب.",
    rating: 5,
    comment:
      "مريح جدًا وجودته ممتازة. القاعدة الخشبية المنخفضة تعطي الغرفة مظهرًا عصريًا ونظيفًا.",
  },
  {
    id: 27,
    type:"bed",
    productId: 9,
    img: "ه",
    name: "هانا ف.",
    rating: 4,
    comment:
      "إطار سرير جميل جدًا بخامات ممتازة. مسند الرأس ناعم ومريح.",
  },
];