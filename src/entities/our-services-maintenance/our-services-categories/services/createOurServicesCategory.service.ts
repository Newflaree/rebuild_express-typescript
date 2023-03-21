// Models
import { OurServiceCategory } from '../models';


const createOurServicesCategoryService = async () => {
  try {

    return {
      msg: 'createOurServicesCategory.Service'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-OUR-SERVICES-CATEGORY]'.bgRed }: ${ err }` );
  }
}

export default createOurServicesCategoryService;

