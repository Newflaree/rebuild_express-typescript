// Models
import { OurServiceCategory } from '../models';


const getOurServicesCategoriesService = async () => {
  try {

    return {
      msg: 'getOurServicesCategories.Service'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORIES]'.bgRed }: ${ err }` );
  }
}

export default getOurServicesCategoriesService;

