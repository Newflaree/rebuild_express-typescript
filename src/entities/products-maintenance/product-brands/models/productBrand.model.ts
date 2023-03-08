// Interfaces
import { ProductBrnadProps } from '../../../../interfaces';
// Mongoose
import { model, Schema } from 'mongoose';

const ProductBrnadSchema = new Schema<ProductBrnadProps>({
  name: {
    type: String,
    required: [ true, 'Product brand name is required' ]
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

ProductBrnadSchema.methods.toJSON = function() {
  const { __v, _id, ...productBrand } = this.toObject();
  productBrand.id = _id;

  return productBrand;
};

export default model<ProductBrnadProps>( 'ProductBrand', ProductBrnadSchema );
