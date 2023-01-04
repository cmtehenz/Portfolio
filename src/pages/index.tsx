import Image from 'next/image';

import pinSVG from '../assets/map-pin.svg';
import briefSVG from '../assets/briefcase.svg';
import githubSVG from '../assets/github.svg';
import linkedinSVG from '../assets/linkedin.svg';
import twitterSVG from '../assets/twitter.svg';
import mailSVG from '../assets/mail.svg';

const profileImg = 'https://avatars.githubusercontent.com/u/10881123?v=4';

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen">
        <div className="flex flex-col items-center m-10 w-[348px] h-72 rounded-2xl bg-gray-600 drop-shadow-2xl">
          <Image
            className='rounded-full mt-8 border-2 border-[#00FF00] mb-7'
            src={profileImg}
            alt="Profile"
            width={128}
            height={128}
          />
          <h1
            className='text-gray-400 text-2xl font-bold mb-2'
          >Gustavo Costa</h1>
          <span
            className='text-gray-400 text-sm'
          >Full Stack Developer</span>
        </div>

        <div className="ml-10 w-[348px] h-64 rounded-2xl bg-gray-600 drop-shadow-2xl pl-10 pt-8 mb-10">
          <div className='flex flex-row mb-4'>
            <Image 
              src={pinSVG}
              alt="place"
              width={18} 
              height={18}
            />
            <p className='ml-5 text-gray-400 text-sm'>Brasil</p>
          </div>
          <div className='flex flex-row mb-4'>
            
            <Image
              src={briefSVG}
              alt="Work"
              width={18} 
              height={18}
            />
        
            
            <p className='ml-5 text-gray-400 text-sm'>Em busca de desafios</p>
          </div>
          <div className='flex flex-row mb-4'>
          <Image
              src={githubSVG}
              alt="Work"
              width={18} 
              height={18}
            />
            <p className='ml-5 text-gray-400 text-sm'>cmtehenz</p>
          </div>
          <div className='flex flex-row mb-4'>
          <Image
              src={linkedinSVG}
              alt="Work"
              width={18} 
              height={18}
            />
            <p className='ml-5 text-gray-400 text-sm'>Meu linkendin</p>
          </div>
          <div className='flex flex-row mb-4'>
          <Image
              src={twitterSVG}
              alt="Work"
              width={18} 
              height={18}
            />
            <p className='ml-5 text-gray-400 text-sm'>Meu Twitter</p>
          </div>
          <div className='flex flex-row'>
          <Image
              src={mailSVG}
              alt="Work"
              width={18} 
              height={18}
            />
            <p className='ml-5 text-gray-400 text-sm'>Meu email</p>
          </div>
        </div>

        <div className="ml-10 w-[348px] h-52 rounded-2xl bg-gray-600 drop-shadow-2xl pt-8">
          <h1 className="text-gray-400 ml-8 mb-4">
            Tecnologias
          </h1>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-3 ml-4">
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 px-2  rounded-3xl">
                <p className="uppercase text-sm font-bold">Javascript</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-5  rounded-3xl">
                <p className="uppercase text-sm font-bold">Reactjs</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-5  rounded-3xl">
                <p className="uppercase text-sm font-bold">Nodejs</p>
              </div>
            </div>
            
            <div className="flex flex-row space-x-3 ml-4">
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-8  rounded-3xl">
                <p className="uppercase text-sm font-bold">git</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-5  rounded-3xl">
                <p className="uppercase text-sm font-bold">github</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-6  rounded-3xl">
                <p className="uppercase text-sm font-bold">html</p>
              </div>
            </div>

            <div className="flex flex-row space-x-3 ml-4">
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-5  rounded-3xl">
                <p className="uppercase text-sm font-bold">prisma</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-8  rounded-3xl">
                <p className="uppercase text-sm font-bold">css</p>
              </div>
              <div className="flex justify-items-center bg-rosa-500 h-8 w-24 py-2 pl-5  rounded-3xl">
                <p className="uppercase text-sm font-bold">native</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-screen w-3/4">
        <p>Principal</p>
      </div>
    </div>
  )
}
