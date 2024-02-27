import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='w-full flex flex-col bg-purple-300 flex'>
      <h1 className="mb-2 mt-4 ml-4 text-[45px] font-bold tracking-tight text-gray-900 dark:text-white">ALINE FC MEGA-DRAW</h1>

      <div className='flex m-4'>
        <div className="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   mt-4 justify-between w-full">
          <div className="flex justify-center flex-col">
            <h6 className="mb-2  tracking-tight text-gray-900 dark:text-white font-bold text-center text-[30px]">AINAWIN DRAW</h6>

            <a href="#" class="p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   mt-4 flex justify-center flex-col w-full items-center">
              <label className="mb-2  tracking-tight text-gray-900 dark:text-white font-bold">Our Next Winner Is</label>
           

              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-center  w-full items-center font-bold text-[45px]">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
              <button className="mt-4 input_field_style p-2 text-sm/[17px] rounded-md text-black font-bold bg-white border-white text-center justify-center border-solid  w-[10rem]">
                        Next
                    </button>
                    </a>
          </div>
          <div class="w-3/6">
            <label class="flex jus cursor-pointer flex-col">

            <div class="flex p-6 bg-white   flex justify-between w-full items-center font-semibold text-[25px] mb-2">
               <span>Section</span>  <span class="ml-4">Row</span> <span class="ml-4">Seat</span>
              </div>
         
            <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
              
              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between  w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
              
              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between  w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
              
              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between  w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
              
              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between  w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>

              <div class="flex p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   flex justify-between  w-full items-center font-bold text-[25px] mb-2">
               <span>114-GA1</span>  <span class="ml-4">15</span> <span class="ml-4">15</span>
              </div>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
