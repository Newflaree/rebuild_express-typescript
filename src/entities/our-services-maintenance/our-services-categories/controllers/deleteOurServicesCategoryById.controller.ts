// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { deleteOurServicesCategoryByIdService } from '../services';


/*
 * PATH: /api/our-services-categories/:id
 */
const deleteOurServicesCategoryById = async ( req: UserAuthRequest, res: Response ) => {
  const { id } = req.params;

  try {
    const results = await deleteOurServicesCategoryByIdService( id );
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
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
