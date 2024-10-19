import Link from 'next/link'


export default function video() {
   return (
      <body>
         <div className="bg-blue-500 border-b-black">
            <div className="mb-3 p-5">
               <Link href="./">
                  <span className="font-bold  text-3xl">팀프로젝트 계획</span>
               </Link>
            </div>
         </div>

         {/* 정보출처: https://kincoding.com/entry/%EB%B0%98%EC%9D%91%ED%98%95%EC%9C%BC%EB%A1%9C-Youtube-%EC%98%81%EC%83%81-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0Responsible-youtube-Embed */}
         <div className='m-10 p-10'>
            <h3 className="font-bold text-2xl pb-2">팀프로젝트 소개 영상</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bfKJ2XfdVA8?si=8dScQXhakubyOEYQ" ></iframe>

         </div>
      </body>

   )
}
