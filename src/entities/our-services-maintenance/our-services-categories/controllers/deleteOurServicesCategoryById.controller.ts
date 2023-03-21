// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services


/*
 * PATH: /api/our-services-categories/:id
 */
const deleteOurServicesCategoryById = async ( req: UserAuthRequest, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default deleteOurServicesCategoryById;
