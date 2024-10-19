import Link from "next/link";

export default function Home() {
  return (
    <body className="m-0 p-0" style={{ backgroundColor: '#fafafa' }}>
      <div>
        <div className="bg-blue-500 border-b-black">
          <div className="mb-3 p-5">
            <Link href="./">
              <span className="font-bold  text-3xl">팀프로젝트 계획</span>
            </Link>
          </div>
        </div>
        <div className="m-7">
          <h3 className="font-bold text-2xl pb-2">팀 소개</h3>
          {/* style참고: https://velog.io/@iberis/Next.js-css-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95%EB%93%A4 */}
          <div className="border-gray-200 border-2 bg-white" style={{ borderRadius: '8px', boxShadow: '2px 2px 4px gray -2px -2px 4px gray' }}>
            <div className="p-6">
              <p>팀명: 끝내주조</p>
              <p>팀장 : 김영욱</p>
              <p>팀원 : 박이슬, 김용섭</p>
            </div>
          </div>
          <div className="mt-7">
            <h3 className="font-bold text-2xl pb-2">프로젝트 소개</h3>
            {/* style참고: https://velog.io/@iberis/Next.js-css-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95%EB%93%A4 */}
            <div className="border-gray-200 border-2 bg-white" style={{ borderRadius: '8px', boxShadow: '2px 2px 4px gray -2px -2px 4px gray' }}>
              <div className="p-6">
                <p>주제: 백과사전</p>
                <p>Why?: 사람들이 편리하게 정보를 정보를 얻기 위해</p>
                <p>항목: 로그인, 가입, 검색기능, 카테고리, 정보입력, 수정</p>
                <p>목표: 이 프로젝트를 통해 Next.js 실력향상</p>
              </div>

            </div>
            <div className="mt-7">
              <h3 className="font-bold text-2xl pb-2 mb-2">그 외의 정보들</h3>
              <Link href={`./github`}>
                <span className="border-2 border-black p-3 hover:bg-slate-400" style={{ borderRadius: '5px' }}>팀원의 github, vercel주소</span></Link>
              <Link href={`./video`}>
                <span className="border-2 border-black p-3 m-3 hover:bg-slate-400" style={{ borderRadius: '5px' }}>프로젝트 소개 동영상</span></Link>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
