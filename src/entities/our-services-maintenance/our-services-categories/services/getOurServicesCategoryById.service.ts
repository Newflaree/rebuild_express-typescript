// Models
import { OurServiceCategory } from '../models';


const getOurServicesCategoryByIdService = async (
  id: string
) => {
  try {
    const currentOurServicesCategory = await OurServiceCategory.findById( id )
      .populate( 'user', 'name' );

    return {
      currentOurServicesCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getOurServicesCategoryByIdService;

