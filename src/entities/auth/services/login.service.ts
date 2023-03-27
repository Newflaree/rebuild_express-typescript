import bcrypt from 'bcryptjs';
// Models
import { User } from '../../../global-models';
// Helpers
import { generateJWT } from '../../../helpers/jwt';


const loginService = async (
  email: string,
  password: string
) => {
  try {
    const logedUser = await User.findOne({ email });

    // Check if email exists or is active
    if ( !logedUser || !logedUser?.isActive ) {
      return {
        statusCode: 401,
        ok: false,
        msg: 'Correo electrónico o contraseña incorrecta'
      }
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, logedUser.password );
    if ( !validPass ) {
      return {
        statusCode: 401,
        ok: false,
        msg: 'Correo electrónico o contraseña incorrecta'
      }
    }

    // Generate JWT
    const token = await generateJWT( logedUser._id );

    return {
      statusCode: 200,
      ok: true,
      token,
      logedUser
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.LOGIN]'.bgRed }: ${ err }` );
  }
}

export default loginService;
