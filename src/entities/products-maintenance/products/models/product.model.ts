// Interfaces
import { ProductProps } from '../../../../interfaces';
// Mongoose
import { model, Schema } from 'mongoose';

const ProductSchema = new Schema<ProductProps>({
  name: {
    type: String,
    required: [ true, 'Product Name is required' ]
  },
  description: {
    type: String,
    required: [ true, 'Product Description is required' ]
  },
  img: {
    type: String,
    required: [ true, 'Product Image is required' ]
  },
  stock: {
    type: Number,
    default: 0
  },
  price: {
    type: String,
    required: [ true, 'Product Price is required' ]
  },
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  brand: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductBrnad'
  },
  category: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ProductCategoy'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

ProductSchema.methods.toJSON = function() {
  const { __v, _id, ...product } = this.toObject();
  product.id = _id;

  return product;
};

export default model<ProductProps>( 'Product', ProductSchema );
