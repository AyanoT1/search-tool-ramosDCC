import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import courses from "./assets/courses.json"
import Course from './Course';

export default function Searchbar() {

    const [currentList, setCourses] = useState(Object.keys(courses));

    function defaultSearcher(e) {
        let value = e.target.value.toLowerCase();
        const newList = Object.keys(courses).filter( (key) => {
            let c = courses[key];
            return c.name.toLowerCase().includes(value) || c.desc.toLowerCase().includes(value)
        })
        setCourses(newList)
    }

    function displayList() { 
        return currentList.map((key) => {
            let c = courses[key];
            return <Course key={key} name={c.name} desc={c.desc} difficulty={c.difficulty} time={c.time}/>
            })
    }

    return (
        <>
            <div className="flex items-center flex-col w-screen absolute top-32">
            <div className='w-1/2 flex items-center'>
            <input onChange={defaultSearcher} type="text" className="border w-full rounded-full p-2 pl-4 bg-gray-100 border-gray-400 shadow-md" placeholder="Busca info de tu ramo aquí"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='relative right-9'/>
            </div>
        </div>

        <div className='flex items-center flex-col w-screen absolute top-48'>
            {displayList()}
        </div>
        </>
        
    );
}