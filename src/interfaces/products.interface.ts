import { ObjectId } from 'mongoose';

export interface ProductBrnadProps {
  name: string;
  user: ObjectId;
  isActive: boolean;
}
