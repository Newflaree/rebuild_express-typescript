// Models
import { OurServiceCategory } from '../../entities/our-services-maintenance';


/* =========================================
 * ProductCategories
   =========================================*/
export const ourServicesCategoryNameValidation = async ( name: string ) => {
  const ourServicesCategoryNameExists = await OurServiceCategory.findOne({ name });

  if ( ourServicesCategoryNameExists ) {
    throw new Error( 'Ya existe una categoría de servicio con ese nombre' );
  }

  return true;
}

export const ourServicesCategoryIdValidation = async ( id: string ) => {
  const ourServicesCategoryIdExists = await OurServiceCategory.findById( id );

  if ( !ourServicesCategoryIdExists || !ourServicesCategoryIdExists?.isActive ) {
    throw new Error( 'No existe ninguna categoría de servicio con ese ID' );
  }

  return true
}
