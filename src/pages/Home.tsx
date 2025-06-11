import HeaderBar from "../reactComponents/HeaderBar";
import PersonalInfo from "@/reactComponents/PersonalInfo";

const Home = () => {
   return (
      <>
         {/* Header Section */}
         <div
            style={{
               background:
                  "radial-gradient(circle,rgba(55, 4, 74, 1) 0%, rgba(28, 14, 36, 1) 71%, rgba(14, 14, 15, 1) 100%)",
            }}
            className="grid h-screen bg-[#0a0a0a] grid-rows-[auto_1fr] grid-cols-1 ">
            <div className="col-start-1 col-span-2 row-start-1 row-end-2 border-b-1 border-muted">
               <HeaderBar />
            </div>

            {/* Personal Information Section */}
            <div className="flex mt-6">
               <PersonalInfo />
            </div>
            {/* Day Card Section */}
         </div>
      </>
   );
};

export default Home;
