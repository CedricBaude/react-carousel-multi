import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './Data';

function App() {


    const product = productData.map((item) => <Product name={item.name} url={item.imageurl} price={item.price} description={item.description} />)
    return (
        <div className="App">
            <h1>React Multi Carousel</h1>
            <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>{product}</Carousel>
        </div>
    );
}

export default App;
