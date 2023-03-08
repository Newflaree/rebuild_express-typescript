import {User} from "../../../global-models";
import {generateJWT} from "../../../helpers/jwt";

const renewTokenService = async ( uid: string ) => {
  try {
    const [ user, token ] = await Promise.all([
      User.findById( uid ),
      generateJWT( uid )
    ])

    return {
      user,
      token
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE-RENEW-TOKEN]'.bgRed }: ${ err }` );
  }
}

export default renewTokenService;
