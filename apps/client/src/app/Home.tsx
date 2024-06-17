'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface IBuilding {
  id: number;
  name: string;
  level: number;
  revenue: number;
  upgradeCost: number;
}

const Home:FC = () => {
  const [buildings, setBuildings] = useState<IBuilding[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4200/api/building')
      .then(response => setBuildings(response.data))
      .catch(error => console.error("Error fetching buildings: " + error))
  }, [])

  const upgradeBuilding = (id: number) => {
    axios.post(`http://localhost:4200/api/building/${id}/upgrade`)
      .then(response => {
        const updatedBuildings = response.data;
        setBuildings(buildings.map(b => b.id === id ? updatedBuildings : b));
      })
      .catch(error => console.error("Error upgrading building: " + error))
  }

  return (
    <div className={'container mx-auto p-4'}>
      <h1 className={'text-3xl font-bold mb-4'}>UpCity</h1>
      <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
        {buildings.map(b => (
          <div key={b.id} className={'p-4 border rounded shadow'}>
            <h2 className={'text-xl font-bold mb-2'}>{b.name}</
              h2>
            <p className={'text-gray-600 mb-2'}>{b.level}</p>
            <p className={'text-gray-600 mb-2'}>{b.revenue}</p>
            <p className={'text-gray-600 mb-2'}>{b.upgradeCost}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => upgradeBuilding(b.id)}
            >
              Upgrade
            </button>
          </div>
          ))}
      </div>
    </div>
)
}

export default Home
