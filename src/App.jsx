import Card from './components/Card'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
const [data, setdata] = useState([])

  const apidata =async()=>{
        const limit=100;
        const offset=75;
        const apiurl = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        // { main data store in url }
        const url=apiurl.data.results

        // {extract the data from  from the main data>url }
        const api2= await Promise.all( 
          //if we dont use the Promise then it will return the pending state
          url.map( async(elem)=>{
            const singledata= await axios.get(elem.url)
            //it will return the whole data of single pokemon
            return singledata.data
          })
        )

        setdata(api2)
        // api2 contains the array of all pokemon data
      //  console.log(api2);


        
    }
    
    useEffect(()=>{
        apidata()
        
        
    }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-black ">
      {data.map(function(elem,idx) {
         return <div key={idx}>
          <Card elem={elem} />
          {/* {console.log(pokemon)} */}
        </div>
        })
      }
    
    </div>
  )
}

export default App

//  return (
//     <div className='flex flex-wrap flex-row justify-center items-center'  >
//       {/* {data.map(function (elem, idx) {
//           return <div  key={idx} >
//             <Card elem={elem}/>
//           </div>
//         })} */}
//     </div>
//   )