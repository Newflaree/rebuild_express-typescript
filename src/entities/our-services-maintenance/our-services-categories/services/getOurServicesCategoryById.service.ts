// Models
import { OurServiceCategory } from '../models';


const getOurServicesCategoryByIdService = async () => {
  try {

    return {
      msg: 'getOurServicesCategoryById.Service'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getOurServicesCategoryByIdService;

