import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import Link from "next/link";

 function Bird() {
  const getAllBird = async () => {
    const res = await axios.get("http://localhost:3000/Tbl_Bird");
    return res.data;
  };

  const {
    data: Tbl_Birds,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["get", "Tbl_Bird"],
    queryFn: getAllBird,
  });

  return (
    <div>
       {isLoading && (
        <div className="flex justify-center items-center container px-4 ms-40 mt-9">
          <SyncLoader/>
        </div>
      )}

    <div  className="flex justify-between mt-20 flex-wrap flex-row gap-4">
    {isSuccess &&
        Tbl_Birds.map((Tbl_Bird) => {
          return (
            <Link href={`bird/${Tbl_Bird.id}`} key={Tbl_Bird.id} className=" text-center flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <img
                className="h-40 object-cove"
                src={Tbl_Bird.ImagePath}
                alt={Tbl_Bird.BirdEnglishName}
              />
              <div className="px-3 dark:bg-gray-900">
              <span className="dark:text-gray-200">
                  {Tbl_Bird.BirdEnglishName}
                </span>
                <div className="font-bold text-xl mb-2">{Tbl_Bird.BirdMyanmarName}</div>
              </div>
            </Link>
          );
        })}
    </div>
   
    </div>
  );
}

export default Bird
