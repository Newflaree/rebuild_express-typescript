// Interfaces
import { OurServicesCategoryProps } from '../../../../interfaces';
// Mongoose
import { model, Schema } from 'mongoose';


const OurServiceCategorySchema = new Schema<OurServicesCategoryProps>({
  name: {
    required: [ true, 'Our Service Name is required' ],
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

OurServiceCategorySchema.methods.toJSON = function() {
  const { __v, _id, ...ourServiceCategory } = this.toObject();
  ourServiceCategory.id = _id;

  return ourServiceCategory;
}

export default model<OurServicesCategoryProps>( 'OurServiceCategory', OurServiceCategorySchema );
