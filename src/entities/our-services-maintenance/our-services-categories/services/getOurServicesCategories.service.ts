// Models
import { OurServiceCategory } from '../models';


const getOurServicesCategoriesService = async (
  condition: object,
  from: number,
  limit: number
) => {
  try {
    const [ totalOurServicesCategories, ourServicesCategories ] = await Promise.all([
      OurServiceCategory.countDocuments( condition ),
      OurServiceCategory.find( condition )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      totalOurServicesCategories,
      ourServicesCategories
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORIES]'.bgRed }: ${ err }` );
  }
}

export default getOurServicesCategoriesService;

