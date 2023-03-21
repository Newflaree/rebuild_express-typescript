// Models
import { OurServiceCategory } from '../models';


const deleteOurServicesCategoryByIdService = async () => {
  try {

    return {
      msg: 'deleteOurServicesCategoryById.Service'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteOurServicesCategoryByIdService;

