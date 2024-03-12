import {products} from '../utils/products';
import ProductCard from '../components/product/product-card';


function Store(){
    return(
        <div className='store'>
            {products.map((product)=>{
                return <ProductCard product={product}/>;
            })}
        </div>
    );
}
export default Store;