export interface Review {
  id: number;
  productId: number;
  type: "sofa" | "chair" | "table" | "light" | "bed";
  name: string;
  rating: number;
  comment: string;
  img:string;
  
}