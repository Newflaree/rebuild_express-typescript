import { ObjectId } from 'mongoose';

export interface ProductBrnadProps {
  name: string;
  user: ObjectId;
  isActive: boolean;
}

export interface ProductCategoryProps {
  name: string;
  user: ObjectId;
  isActive: boolean;
}

export interface ProductProps {
  name: string;
  description: string;
  img: string;
  stock: number;
  price: string;
  user: ObjectId;
  brand: ObjectId;
  category: ObjectId;
  isActive: boolean;
}
