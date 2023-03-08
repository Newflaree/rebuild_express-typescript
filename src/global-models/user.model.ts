// Interfaces
import { UserProps } from '../interfaces';
// Mongoose
import { model, Schema } from 'mongoose';

const UserSchema = new Schema<UserProps>({
  email: {
    type: String,
    required: [ true, 'Email is required' ],
    unique: true
  },
  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  password: {
    type: String,
    required: [ true, 'Password is required' ]
  },
  img: {
    type: String
  },
  role: {
    type: String,
    default: 'USER_ROLE'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;

  return user;
}

export default model<UserProps>( 'User', UserSchema );
