// Interfaces
import { ProductCategoryProps } from '../../../../interfaces';
// Mongoose
import { model, Schema } from 'mongoose';

const ProductCategorySchema = new Schema<ProductCategoryProps>({
  name: {
    required: [ true, 'Product category name is required' ],
    type: String,
    unique: true
  },
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

ProductCategorySchema.methods.toJSON = function() {
  const { __v, _id, ...productCategory } = this.toObject();
  productCategory.id = _id;

  return productCategory;
};

export default model<ProductCategoryProps>( 'ProductCategory', ProductCategorySchema );
