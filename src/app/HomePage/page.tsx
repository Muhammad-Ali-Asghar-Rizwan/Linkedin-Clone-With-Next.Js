
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { IoPeople } from 'react-icons/io5';
import { FaArrowRightLong, FaPlus } from 'react-icons/fa6';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { GoKebabHorizontal } from 'react-icons/go';

import { MdInsertPhoto } from 'react-icons/md';
const HomePage = () => {
  return (
    <div className='bg-gray-100 m-[0px_5%]  pt-3'>
      <div className='MainContainer bg-gray-100   w-[73rem] min-h-[45rem]    grid grid-cols-[22%_49%_24.3%] gap-[1rem_2rem] grid-rows-[9rem_23rem_minmax(14rem,1fr)]'>


        <div className='box box1  rounded-lg  border-2 border-black text-[2rem]  row-[1/3] relative z-[10] overflow-hidden'>
        <div className='box1-abs w-[100%] h-[13%] bg-slate-400  absolute z-[-2] '></div>
        <div className='box1-name text-xs flex flex-col items-center  mt-5 border-b-[1px]  border-[#0000008e]'>
          <Image
            src='/images/logo.jpg'
            alt='Logo'
            width={200}
            height={200}
            className='box1-image w-20 h-20 rounded-[50%] border-[2.3px] border-white'
          />
          <h1 className='text-[17px] font-bold mt-5'>Ali Asghar M.Rizwan</h1>
          <p className='text-center w-[13rem] mt-3 text-gray-600'>STUDENT OF GOVERNOR SINDH INITIATIVE HTML/CSS/JAVASCRIPT/ TYPESCRIPT/NEXT.JS/TAILWIND CSS/GENERATIVE AI /META/WEB DEVELOPMENT/SALES AND LEAD GENERATION</p>
          <div className='border-b-[1px]  border-[#00000048] mt-5'></div>
        </div>
        <div className='box1-connection text-[13px] text-gray-700 mx-3 mt-4'>
          <div className='connection-box1 flex justify-between'>
            <p>Profile viewers</p>
            <p className='text-[#16407f] font-semibold'>151</p>
          </div>
          <div className='connection-box2 flex justify-between mt-2'>
            <p>Post impressions</p>
            <p className='text-[#163d77] font-semibold'>660</p>
          </div>
        </div>
        <div className='border-b-[1px]  border-[#00000048] mt-5'></div>
        <div className='box1-upgrade text-gray-600 text-[12px] mx-3 mt-3'>
          <p>Refine your sales pipeline          </p>
          <div className='flex items-center gap-2'>
          <RiCheckboxBlankFill className='text-[19px] mt-[7px] text-yellow-500'/>
          <h1 className='text-[14px] font-bold text-black mt-2'>Sales Nav for PKR0, try now</h1>
          </div>
        </div>
        <div className='border-b-[1px]  border-[#00000048] mt-5'></div>
        <div className='box1-saved text-[14px] font-bold text-black mx-3 flex items-center mt-1 gap-2'>
        <FaBookmark className='text-[17px] text-gray-600'/>
        <h1 >Saved items</h1>
        </div>
        </div>











        <div className='box box2 rounded-lg border-2 border-black text-[2rem] px-4 '>
          <div className='box2-top w-[100%] h-[50%] items-center gap-4 flex '>
            <Image src='/images/logo.jpg' alt='account' width={200} height={200} className='w-[3.2rem] h-[3.2rem] rounded-[50%]'/>
            <input type='text' placeholder='Start a Post' className='text-[1rem] rounded-[10rem] border-2 border-gray-500 p-[0px_1rem] w-[90%] h-12 font-semibold' />
          </div>
          <div className='box2-buttom h-[50%] text-[16px] font-semibold text-gray-700 flex items-center justify-around'>
            <div className='box2-left flex items-center  gap-3'>
            <FaYoutube  className='text-[24px] text-green-700'/>
              <h1>Video</h1>
            </div>
            <div className='box2-mid flex items-center  gap-3'>
            <MdInsertPhoto  className='text-[24px] text-blue-600'/>
              <h1>Photo</h1>
            </div>
            <div className='box-right flex items-center  gap-3'>

            <RiCalendarTodoFill className='text-[24px] text-amber-700' />

              <h1>Write article</h1>
            </div>
          </div>

        </div>


        <div className='box box3 rounded-lg  px-4 border-2 border-black text-2rem]   col-[3] row-[1/3] '>

        <div className='box3-top flex items-center justify-between mt-2'>
          <p className='font-semibold text-[18px]'>Add to your feed</p>
          <Image src='/images/oit.PNG' alt='oit' width='50' height='50' className='w-7'/>
        </div>

        <div className='box3-account1 flex gap-3 mt-2'>
          <div className='box3-account-left'>
            <Image src='/images/ameen.jpg' alt='profile' width={200} height={200} className='h-14 w-14  rounded-[50%]'/>
          </div>
          <div className='box3-account-right'>
            <p>Ameen alam</p>
            <p className='text-gray-500 text-[13px]'>Company • Human Resources Services</p>
            <button className='h-10 w-28  rounded-[20px] border-2 border-black font-semibold  mt-2'>+ Follow</button>
          </div>
          
        </div>
        <div className='box3-account2 flex gap-3 mt-2'>
          <div className='box3-account-left'>
            <Image src='/images/nagori.jpg' alt='profile' width={200} height={200} className='h-14 w-14  rounded-[50%]'/>
          </div>
          <div className='box3-account-right'>
            <p>Daniyal Nagori</p>
            <p className='text-gray-500 text-[13px]'>Company • Human Resources Services</p>
            <button className='h-10 w-28  rounded-[20px] border-2 border-black font-semibold  mt-2'>+ Follow</button>
          </div>
          
        </div>
        <div className='box3-account3 flex gap-3 mt-2'>
          <div className='box3-account-left'>
            <Image src='/images/zia.jpg' alt='profile' width={200} height={200} className='h-14 w-14  rounded-[50%]'/>
          </div>
          <div className='box3-account-right'>
            <p>Zia Khan</p>
            <p className='text-gray-500 text-[13px]'>Company • Human Resources Services</p>
            <button className='h-10 w-28  rounded-[20px] border-2 border-black font-semibold  mt-2'>+ Follow</button>
          </div>
          
        </div>

        <div className='recommended mt-5 font-semibold flex items-center gap-3 text-gray-700'>
          <p>View all recommendations </p>
          <FaArrowRightLong className='mt-1'/>
          

        </div>
          
        </div>


        <div className='box box4 rounded-lg border-2 min-h-[300rem] border-black text-[2rem]  row-[2/4] '>

        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg  one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/bilal.jpg' alt='user' width={200} height={200} className='w-[3.5rem]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Muhammad Bilal</h1>
           <h2 className='text-gray-600'>Full Stack Developer | Expertise in MERN Stack, Next.js.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🚀 NEW ECMASCRIPT FEATURE 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>🚀 Elevating JavaScript: Embrace the Evolution from Try/Catch to ?= Operator! 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>As developers, we continuously seek to simplify and optimize our code. The transformation in how we handle data fetching in JavaScript serves as a perfect example of coding evolution.</p>

          <Image src='/images/bilallink.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>

        <div className='h-[34.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/ali.jpg' alt='user' width={200} height={200} className='w-[3.5rem] rounded-[50%]'/>
              </div> 
              <div>
            <h1 className='text-[15px] font-bold'>Ali Aftab Sheikh</h1>
           <h2 className='text-gray-600'>
            Helping You Build Fast, Secure and Scalable Web Apps .....
             </h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>The 2nd position was secured by Samia Salman, who has a background in Electronics and Robotics. What stood out is the diverse range of profiles among the top 13 students, showcasing the breadth of talent in our program.......        </p>



          <Image src='/images/ali image.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>

        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/Hamza ahmed.jpg' alt='user' width={200} height={200} className='w-[3.5rem] rounded-[50%]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Hamza Ahmed Sheikh </h1>
           <h2 className='text-gray-600'>Helping you in developing Fast, Secure, and Scalable Web....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>𝗔𝗿𝗲 𝘆𝗼𝘂 𝗰𝘂𝗿𝗶𝗼𝘂𝘀 𝗮𝗯𝗼𝘂𝘁 𝗔𝗜 𝗮𝗴𝗲𝗻𝘁𝘀 𝗮𝗻𝗱 𝗵𝗼𝘄 𝘁𝗵𝗲𝘆 𝘄𝗼𝗿𝗸, 𝗯𝘂𝘁 𝗱𝗼𝗻'𝘁 𝗸𝗻𝗼𝘄 𝗵𝗼𝘄 𝘁𝗼 𝗦𝗧𝗔𝗥𝗧? 🎯        </p>

          <Image src='/images/hamza image.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>

        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/jawad.jpg' alt='user' width={200} height={200} className='w-[3.5rem] rounded-[50%]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Ali Jawwad </h1>
           <h2 className='text-gray-600'>Full Stack Developer | Next js, Typescript, Python, OpenAI.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>Building your own things 🔥🔥🔥🔥
        hashtag#programming hashtag#codinglife hashtag#fullstackdevelopment hashtag#AI hashtag#AGI hashtag#cloudnativecomputing hashtag#nextjs hashtag#typescript hashtag#tailwindcss</p>


          <Image src='/images/jawad image.jpg' alt='user' width={400} height={400} className='mt-7 w-[100%] h-[71%]'/>

        </div>

        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/mubashir.jpg' alt='user' width={200} height={200} className='w-[3.5rem] rounded-[50%]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Mubashir Ali</h1>
           <h2 className='text-gray-600'>Software Engineer | Typescript | NodeJS | ReactJS | Python | SQL |....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🎉 Excited to share that I've been selected as the Trainer for the Governor of Sindh's initiatives for Web3 and Metaverse! 🌐🚀 Looking forward to empowering the generation with cutting-edge knowledge.</p>


          <Image src='/images/mubashir image.jpg' alt='user' width={600} height={600} className='mt-7 h-[70%]'/>

        </div>


        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/ashrif.jpg' alt='user' width={200} height={200} className='w-[3.5rem] rounded-[50%]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Asharib Ali</h1>
           <h2 className='text-gray-600'>🙌 I build AI & Blockchain stuffs 🔥</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>Alhamdulillah, This message made my day ♥️ <br />
        <br />

You don't have to become like I was in my early days. If I say I want to become someone else, I might lose what I have and own......

</p>


          <Image src='/images/ashrif image.jpg' alt='user' width={600} height={600} className='mt-7 h-[71%]'/>

        </div>
        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/bilal.jpg' alt='user' width={200} height={200} className='w-[3.5rem]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Muhammad Bilal</h1>
           <h2 className='text-gray-600'>Full Stack Developer | Expertise in MERN Stack, Next.js.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🚀 NEW ECMASCRIPT FEATURE 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>🚀 Elevating JavaScript: Embrace the Evolution from Try/Catch to ?= Operator! 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>As developers, we continuously seek to simplify and optimize our code. The transformation in how we handle data fetching in JavaScript serves as a perfect example of coding evolution.</p>

          <Image src='/images/bilallink.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>
        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/bilal.jpg' alt='user' width={200} height={200} className='w-[3.5rem]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Muhammad Bilal</h1>
           <h2 className='text-gray-600'>Full Stack Developer | Expertise in MERN Stack, Next.js.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🚀 NEW ECMASCRIPT FEATURE 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>🚀 Elevating JavaScript: Embrace the Evolution from Try/Catch to ?= Operator! 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>As developers, we continuously seek to simplify and optimize our code. The transformation in how we handle data fetching in JavaScript serves as a perfect example of coding evolution.</p>

          <Image src='/images/bilallink.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>
        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/bilal.jpg' alt='user' width={200} height={200} className='w-[3.5rem]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Muhammad Bilal</h1>
           <h2 className='text-gray-600'>Full Stack Developer | Expertise in MERN Stack, Next.js.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🚀 NEW ECMASCRIPT FEATURE 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>🚀 Elevating JavaScript: Embrace the Evolution from Try/Catch to ?= Operator! 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>As developers, we continuously seek to simplify and optimize our code. The transformation in how we handle data fetching in JavaScript serves as a perfect example of coding evolution.</p>

          <Image src='/images/bilallink.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>
        <div className='h-[44.6rem] w-[100%]  border-2 mb-5 rounded-lg mt-10 one'>
          <div className='post-top flex justify-between text-[14px] p-4'>
            <div className='post-top-left flex gap-3 items-center'>
              <div>
            <Image src='/images/bilal.jpg' alt='user' width={200} height={200} className='w-[3.5rem]'/>
              </div>
              <div>
            <h1 className='text-[15px] font-bold'>Muhammad Bilal</h1>
           <h2 className='text-gray-600'>Full Stack Developer | Expertise in MERN Stack, Next.js.....</h2> 
            <p>Karachi Division</p>
              </div>

            </div>

            <div className='post-top-right flex gap-3 text-[20px]'>
            <GoKebabHorizontal />

            <IoMdClose />
            </div>
          </div>
        <p className='text-[14px]  p-[0px_1rem]'>🚀 NEW ECMASCRIPT FEATURE 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>🚀 Elevating JavaScript: Embrace the Evolution from Try/Catch to ?= Operator! 🚀</p>

        <p className='text-[14px] mt-3 p-[0px_1rem]'>As developers, we continuously seek to simplify and optimize our code. The transformation in how we handle data fetching in JavaScript serves as a perfect example of coding evolution.</p>

          <Image src='/images/bilallink.jpg' alt='user' width={600} height={600} className='mt-7'/>

        </div>

        </div>  



        <div className='box box5  rounded-lg border-2 bg-opacity-10 h-[26rem] border-black text-[2rem]  '>
          <div className='mx-3  text-[17px] mt-3'>
            <p className='text-[15px]'>Recent</p>
            <div className='flex items-center text-gray-600 mt-3 gap-2'>
            <IoPeople />
          <p>
          Internship Group
          </p>
            </div>

            <div className='flex items-center text-gray-600 mt-3 gap-2'>
            <IoPeople />
          <p>
          IT Professionals 
          </p>
            </div>
          </div>

          <div className='mx-3 text-[17px] mt-8'>
            <p className='text-[15px] text-blue-600'>Groups</p>
            <div className='flex items-center text-gray-600 mt-3 gap-2'>
            <IoPeople />
          <p>
          Internship Group
          </p>
            </div>

            <div className='flex items-center text-gray-600 mt-3 gap-2'>
            <IoPeople />
          <p>
          IT Professionals 
          </p>
            </div>
          </div>

          <div className='text-[16px] flex items-center mx-3 justify-between mt-8'>
           <p className='text-blue-500'>Events</p>
          <FaPlus />
          </div>
          <div  className='text-[16px] mx-3 text-blue-500 mt-5'>
         <p>Followed Hashtags</p>
          </div>
          <div className='border-b-[1px]  border-[#00000048] mt-5'></div>
          <div className='flex items-center justify-center mt-3'>
          <h1 className='text-[17px] font-semibold'>Discover more</h1>
          </div>

        </div>
      
        <div className='box  box6  rounded-lg border-2 bg-opacity-10 h-[25rem] sticky top-5 border-black text-[2rem] '>
          <Image src='/images/sticky.png' alt='account' width={700} height={700} className='rounded-lg border-2 border-gray-200'/>
          <div className='box-6-bottom w-[100%] text-center'>
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>About</Link>
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Accessibility</Link>
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Help Center</Link> <br /> 
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Privacy & Terms </Link>
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Ad Choices</Link> <br />
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Advertising</Link> 
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Business Services </Link> <br />
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>Get the LinkedIn app</Link> 
         <Link href='/' className='text-[0.9rem] text-gray-500 p-[0px_0.5rem]'>More</Link> 
          
          </div>
          <div className='box6-copy-right text-[15px]  flex gap-3 mt-3'>
            <div className='flex items-center gap-[1px]'>
            <p className='text-blue-600 font-bold'>linkedin</p>
            <FaLinkedin className='text-[#1b59b4]  text-[15px]'/>
            </div>
            <p>LinkedIn Corporation © 2024</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HomePage;
