import { Outlet } from "react-router-dom";
import Logo from "../../public/icon.png";

export function AuthLayout() {
  return (
    <div className="flex w-full h-screen">
      <div className=" h-full w-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      <div className="min-h-screen w-1/2 items-center justify-center relative hidden xl:flex">
        <img
          src={Logo}
          className="object-cover w-full h-full  min-w-[856px] select-none "
        />
      </div>
    </div>
  );
}
