import Link from 'next/link'

export default function gitHubList() {
   return (
      <div>
         <div className= "bg-blue-500 border-b-black" >
         <div className="mb-3 p-5" >
            <Link href="./" >
            <span className="font-bold  text-3xl" > 팀프로젝트 계획 </span>
            </Link>
         </div>
         </div>
         <div className = 'm-7'>
            <div>
               <h3 className = 'mb-2 font-bold text-2xl' > 깃허브, vercel주소 </h3>
               <div className = 'border-black border-2' style = {{ borderRadius: '5px' }}>
               {/* 특수문자 출처: https://blog.naver.com/engineer-k-/222704044249*/ }
               <div >
                  <div className='border-b-2 border-b-black p-2' >
                     <h2 className='font-bold text-xl' > 김영욱(92212788) </h2>
                     < p className = 'pl-4' >● 깃허브: </p>
                     < p className = 'pl-4' >● vercel: </p>
                  </div>
                  < div className = 'border-b-2 p-2 border-b-black' >
                     <h2 className='font-bold text-xl' > 박이슬(92450524) </h2>
                     < p className = 'pl-4' >● 깃허브: <Link href={'https://github.com/kindwitch/introduce.git'} className='hover:underline hover:text-blue-600'>https://github.com/kindwitch/introduce.git</Link> </p>
                     < p className = 'pl-4' >● vercel: <Link href={'https://introduce-6uug.vercel.app/'} className='hover:underline hover:text-blue-600'>introduce-6uug.vercel.app/</Link></p>
                  </div>
                  < div className = 'p-2' >
                     <h2 className='font-bold text-xl' > 김용섭 </h2>
                     < p className = 'pl-4' >● 깃허브: </p>
                     < p className = 'pl-4' >● vercel: </p>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>
   );
}