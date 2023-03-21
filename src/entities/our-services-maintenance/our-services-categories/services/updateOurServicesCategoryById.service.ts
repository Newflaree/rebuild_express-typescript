// Models
import { OurServiceCategory } from '../models';


const updateOurServicesCategoryByIdService = async () => {
  try {

    return {
      msg: 'updateOurServicesCategoryById.Service'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateOurServicesCategoryByIdService;

