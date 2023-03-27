// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { updateOurServicesCategoryByIdService } from '../services';


/*
 * PATH: /api/our-services-categories/:id
 * AUTH-REQUIRED: true
 * ADMIN-REQUIRED: true
 */
const updateOurServicesCategoryById = async (
  req: UserAuthRequest,
  res: Response
) => {
  const uid = req.user._id;
  const { id } = req.params;
  const { name } = req.body;

  try {
    const results = await updateOurServicesCategoryByIdService( uid, id, name );
    const updatedOurServicesCategory = results?.updatedOurServicesCategory;

    res.json({
      updatedOurServicesCategory
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
