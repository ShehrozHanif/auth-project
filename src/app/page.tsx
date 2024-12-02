import { SessionWrapper } from "@/components/SessionWrapper";
import AuthComponent from "@/components/login/AuthComponent";
import SignOutComponent from "@/components/login/SignOutComponent";
import { auth } from "../../lib/auth";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <SessionWrapper>
        {isAuthenticated ? <SignOutComponent /> : <AuthComponent />}
      </SessionWrapper>
    </div>
  );
}



// import { SessionWrapper } from "@/components/SessionWrapper";
// import AuthComponent from "@/components/login/AuthComponent";
// import SignOutComponent from "@/components/login/SignOutComponent";
// import { auth } from "../../lib/auth";

// export default async function Login() {
//   const session = await auth();
//   const isAuthenticated = !!session?.user;

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-800 to-purple-600">
      
//       <SessionWrapper>
//         {isAuthenticated ? <SignOutComponent /> : <AuthComponent />}
//       </SessionWrapper>
//     </div>
//   );
// }
