import {useEffect, useState} from 'react'
import CollectionElement from './CollectionElement'

function CollectionsList(){
    const [list,setList] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/api/collections/get')
        .then(res => res.json())
        .then(data => setList(data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
        {list.slice(0,20).map((element)=>(
            <CollectionElement {...element} key ={element._id}/>
            
        ))
        }
        </div>
    )
}
export default CollectionsList