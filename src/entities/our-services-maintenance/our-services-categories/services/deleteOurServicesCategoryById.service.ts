// Models
import { OurServiceCategory } from '../models';


const deleteOurServicesCategoryByIdService = async (
  id: string
) => {
  try {
    await OurServiceCategory.findByIdAndDelete( id );

    return {
      msg: 'La categoría de servicios fue eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteOurServicesCategoryByIdService;

