// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services


/*
 * PATH: /api/our-services-categories/:id
 */
const updateOurServicesCategoryById = async ( req: UserAuthRequest, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'updateOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default updateOurServicesCategoryById;
