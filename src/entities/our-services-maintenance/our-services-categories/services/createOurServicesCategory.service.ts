// Models
import { OurServiceCategory } from '../models';


const createOurServicesCategoryService = async (
  uid: string,
  name: string
) => {
  const ourServicesCategoryData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const newOurServiceCategory = new OurServiceCategory( ourServicesCategoryData );
    await newOurServiceCategory.save();

    return {
      newOurServiceCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-OUR-SERVICES-CATEGORY]'.bgRed }: ${ err }` );
  }
}

export default createOurServicesCategoryService;

