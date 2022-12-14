import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../services/Products';
import NavBar from '../../components/NavBar';

function HomePage() {
	const [products, setProducs] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await getProducts();
			setProducs(result);
		};
		fetchData();
	}, []);
	return (
		<div>
			<NavBar />
			<h1 className='home_title'>Products</h1>
			<div className='home'>
				{products.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
