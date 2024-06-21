'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IBuilding } from '../services/building.service';
import Image from 'next/image';
import imageUrl from 'apps/server/uploads/images/LV1.png'


const Home:FC = () => {
  const [buildings, setBuildings] = useState<IBuilding[]>([]);

  useEffect(() => {
    axios.get('api/building')
      .then(response => setBuildings(response.data))
      .catch(error => console.error("Error fetching buildings: " + error))
  }, [])

  const upgradeBuilding = (id: number) => {
    axios.post(`api/building/${id}/upgrade`)
      .then(response => {
        const updatedBuildings = response.data;
        setBuildings(buildings.map(b => b.id === id ? updatedBuildings : b));
      })
      .catch(error => console.error("Error upgrading building: " + error))
  }

  return (
    <div className={'container mx-auto p-4'}>
      <h1 className={'text-3xl font-bold mb-4'}>UpCity</h1>
      <div className={''}>
        {buildings.map(b => (
          <div key={b.id} className={'p-4 border rounded shadow'}>
            <button
              className=""
              onClick={() => upgradeBuilding(b.id)}
            >
            <Image src={imageUrl} height={200} width={200} alt={b.name}/>  
            <h4 className={'text-gray-600 mb-2 flex'}>Level <p className='ml-2'>{b.level}</p></h4>
            <h4 className={'text-gray-600 mb-2 flex'}>Revenue <p className='ml-2'>{b.revenue}</p></h4>
            <h4 className={'text-gray-600 mb-2 flex'}>Upgrade Cost <p className='ml-2'>{b.upgradeCost}</p></h4> 
            </button>
          </div>
          ))}
      </div>
    </div>
)
}

export default Home
