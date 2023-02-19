import { useContext } from 'react';
import { MenuContext } from '../../context/menuContext';

const Menu = () => {
    const { menu } = useContext(MenuContext);
    return (
        <div className="w-full">
            <p className='text-center text-lg text-black font-semibold'>Menu</p>
            <nav className='flex justify-around items-center p-3'>
                <div>Seasonal Product</div>
                <div>Best Seller</div>
                <div>Coffee</div>
            </nav>
            {menu && menu.menu && menu.menu.categories.map((category, index) => {
                <div className='bg-violet-50 h-full' key={index}>
                    <p className='text-black text-lg font-semibold p-3'>{category.category_name}</p>
                    <div className='h-fit'>
                        {category.menu.map(result => {
                            <div className='flex justify-between items-center px-2 py-2 border-b bg-white'>
                                <div className='mr-3'>
                                    <img src={result.photo} alt="" className='w-6 h-full' />
                                </div>
                                <div className='mr-6'>
                                    <p className='text-base text-black font-semibold'>{result.name}</p>
                                    <p className='text-sm text-gray-400'>{result.description}</p>
                                </div>
                                <p>{result.price}</p>
                            </div>
                        })}
                    </div>
                </div>
            })
            }
        </div>
    );
}

export default Menu;