// Express Framework
import { Request, Response } from 'express';
// Services


/*
 * PATH: /api/our-services-categories/:id
 */
const getOurServicesCategoryById = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getOurServicesCategoryById;
