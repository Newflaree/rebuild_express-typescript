// Mongoose
import { ObjectId } from 'mongoose';

export interface OurServicesCategoryProps {
  name: string;
  user: ObjectId;
  isActive: boolean;
}
