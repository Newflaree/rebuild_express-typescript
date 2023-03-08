import jwt from 'jsonwebtoken';

const generateJWT = ( uid: string | object ) => {
  return new Promise( ( resolve, reject ) => {
    const payload = { uid };

    jwt.sign( payload, process.env.SECRET_KEY || '', {
      expiresIn: '24h'
    }, ( err, token ) => {
      if ( err ) {
        console.log( `${ '[HELPER.GENERATE-JWT]'.bgRed }: ${ err }` );
        reject( 'Token could not be generated' );
      } else {
        resolve( token );
      }
    });
  });
}

export default generateJWT;
