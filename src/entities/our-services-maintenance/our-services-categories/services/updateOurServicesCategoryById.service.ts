// Models
import { OurServiceCategory } from '../models';


const updateOurServicesCategoryByIdService = async (
  uid: string,
  id: string,
  name: string
) => {
  const updateOurServicesCategoryData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const updatedOurServicesCategory = await OurServiceCategory.findByIdAndUpdate( id, updateOurServicesCategoryData, { new: true } )
      .populate( 'user', 'name' );

    return {
      updatedOurServicesCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateOurServicesCategoryByIdService;

