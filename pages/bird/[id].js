import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router'
import React from 'react'
import { SyncLoader } from 'react-spinners';

const getBirdById = async (id) => {
  const res = await axios.get(`http://localhost:3000/Tbl_Bird/${id}`);
  return res.data;
}

const  BirdById = () => {
  const router = useRouter();
  const {id} = router.query;

 const {data:bird, isLoading, isSuccess} = useQuery({
    queryKey:['get','Tbl_Bird',id],
    queryFn: () => getBirdById(id),
    enabled: !!id,
  })

  return (
    <div className='flex justify-center items-center ms-44 mt-60 dark:bg-gray-800'>
        {isLoading && (
        <div className="flex justify-center items-center container mx-auto px-4 mt-24">
        <SyncLoader/>
      </div>
      )}
      {isSuccess && (
        <div className="max-w-sm w-full lg:max-w-full lg:flex me-56 border rounded dark:border-gray-800">
        <img
          className="h-48 lg:h-auto lg:w-48 sm:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cove"
          src={bird.ImagePath}
          title="Woman holding a mug"
        />
        <div className="  dark:bg-gray-900 dark:lg:border-gray-700 bg-slate-300 lg:rounded-r p-4 flex flex-col justify-between">
          <div className="mb-8">
        
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-gray-100">
              {bird.BirdEnglishName}
            </div>
            <p className="text-gray-700 text-base dark:text-gray-100">
             {bird.Description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none dark:text-gray-100">{bird.BirdMyanmarName}</p>
            </div>
          </div>
        </div>
      </div>
      
      )}
    </div>
  )
}

export default BirdById
