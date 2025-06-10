import HeaderBar from "../reactComponents/HeaderBar";
import Timeline from "@/reactComponents/Timeline";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  return (
    <>
      <div className="grid h-screen bg-background grid-rows-[auto_1fr] grid-cols-[7fr_6fr] ">
        <div className="col-start-1 col-span-2 row-start-1 row-end-2 border-b-1 border-muted">
          <HeaderBar />
        </div>

        <div className="h-[92vh] col-start-1 col-end-2 row-start-2 row-end-2 text-center border-r-1 border-muted flex items-center justify-center relative">
          <div className="h-11/12 w-11/12 border-1 border-muted flex items-center justify-center"></div>
        </div>

        <div className="h-[92vh] col-start-2 col-end-3 row-start-2 row-end-2 text-center border-r-1 border-muted flex items-center justify-center">
          <div className="h-11/12 w-11/12 border-1 border-muted flex items-center justify-center">
            <ScrollArea className="h-full w-full rounded-md bg-[#171717] p-4">
              <h1 className="text-3xl mb-8">Onboarding Timeline</h1>
              <Timeline />
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
