import bcript from 'bcryptjs';
// Models
import { User } from '../../../global-models';
// Helpers
import { generateJWT } from '../../../helpers/jwt';

const registerService = async (
  email: string,
  name: string,
  password: string
) => {

  const userData = {
    email,
    name,
    password
  };

  try {
    const newUser = new User( userData );

    // Ecrypt password
    const salt = bcript.genSaltSync();
    newUser.password = bcript.hashSync( password, salt );

    // Save to DB
    await newUser.save();

    //TODO: Send email
    //
    // Generate JWT
    const token = await generateJWT( newUser._id );

    return {
      newUser,
      token
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE-REGISTER]'.bgRed }: ${ err }` );
  }
}

export default registerService;
