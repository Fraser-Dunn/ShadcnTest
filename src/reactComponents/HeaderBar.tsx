import { Separator } from "../components/ui/separator";
import DXCLogoWhite from "../assets/DXC Logo_Vertical_White RGB.png";

export default function HeaderBar() {
   return (
      <>
         <header>
            <div
               // style={{
               //    background:
               //       "radial-gradient(circle,rgba(55, 4, 74, 1) 0%, rgba(28, 14, 36, 1) 71%, rgba(14, 14, 15, 1) 100%)",
               // }}
               className="flex h-18 items-center space-x-3 px-3 py-3">
               <h1 className="px-3 text-2xl">
                  <img className="w-26" src={DXCLogoWhite} alt="DXC" />
               </h1>
               <Separator orientation="vertical" className="h-6" />
               <h1 className="px-3 text-4xl">IgniteU</h1>
            </div>
         </header>
      </>
   );
}
