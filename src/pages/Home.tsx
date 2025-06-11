import HeaderBar from "../reactComponents/HeaderBar";
import PersonalInfo from "@/reactComponents/PersonalInfo";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <div
        style={{
          background:
            "radial-gradient(circle,rgba(19, 13, 26, 1) 0%, rgba(40, 21, 56, 1) 77%, rgba(71, 27, 89, 1) 100%)",
        }}
        className="grid h-screen bg-[#0a0a0a] grid-rows-[auto_1fr] grid-cols-6  "
      >
        <div className="col-start-1 col-span-6 row-start-1 row-end-2 border-b-1 border-destructive-foreground">
          <HeaderBar />
        </div>

        {/* Personal Information Section */}
        <div className="flex mt-12 justify-center col-start-1 col-span-3 ">
          <PersonalInfo />
        </div>
        {/* Day Card Section */}
      </div>
    </>
  );
};

export default Home;
