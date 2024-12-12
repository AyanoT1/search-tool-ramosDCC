import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Searchbar() {

    return (
        <div className="flex items-center flex-col w-screen fixed top-40">
            <div className='w-1/2 flex items-center'>
            <input type="text" className="border w-full rounded-full p-2 pl-4 bg-gray-100 border-gray-400" placeholder="Busca info de tu ramo aquí"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='relative right-9'/>
            </div>
        </div>
    );
}