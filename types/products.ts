export interface Specification {
  Dimensions: string;
  Materials: string[];
  Care: string;
}
export interface Product {
  id: number;
  name_en: string;
  name_ar: string;
  image: string;
  images: string[];
  type: "sofa" | "chair" | "table" | "light" | "bed"| "storage";
  review: string;
  price: number;
  availability: string;
  color: string[];
  rating: number;
  descripetion_en: string;
  descripetion_ar: string;
spesifcation_en:  Specification;
  spesifcation_ar: Specification;
  typear: string;
  availabilityar: string;
  reviewar: string;
  
}