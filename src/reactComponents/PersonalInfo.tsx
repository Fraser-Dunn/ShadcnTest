import Fraser from "../assets/Fraser-modified.png";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@radix-ui/react-separator";

const PersonalInfo = () => {
  return (
    <>
      {/* Container */}
      <div className="flex h-fit border-1 border-destructive-foreground max-h-[401px] min-w-[486px]">
        <div className="flex flex-col py-6 h-fit w-auto max-w-[240px] items-center mt-6 ">
          <div className="flex rounded-bl-[12px] rounded-tl-[12px] ">
            <div className="w-fit h-fit p-4 flex flex-col items-center">
              <img
                className="max-h-[130px] max-w-[130px] object-contain"
                src={Fraser}
                alt="Fraser"
              />
              <h1 className="mt-3 text-2xl text-nowrap pb-1 ">
                Fraser Alan Dunn
              </h1>
              <h1 className="pt-1 text-secondary-foreground text-xl pb-1 ">
                fraseradunn@gmail.com
              </h1>
              <h1 className=" pt-1 text-secondary-foreground text-xl pb-1 ">
                07866626094
              </h1>
              <h1 className=" pt-1 text-secondary-foreground text-xl pb-1 ">
                05/02/1999
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-fit py-6">
          <div className="flex flex-col text-center border-l-1 border-destructive-foreground rounded-tr-[12px] rounded-br-[12px] p-4 text-white h-full">
            <h1 className="px-3 text-nowrap text-3xl h-auto border-b-1 border-destructive-foreground pb-2 ">
              DXC Details
            </h1>
            <ScrollArea className="max-h-[277px]">
              <div
                className="grid grid-cols-1  
                           [@media(min-width:1480px)]:grid-cols-2  
                           [@media(min-width:1746px)]:grid-cols-3 
                           grid-rows-3 gap-4 py-4 px-4 h-full mt-3"
              >
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    People Manager
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Stefano Clemente
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Offering Lead
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Donna Neil
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Buddy
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Safiya Qureshi
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Stream
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Cloud & ITO
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Location
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Erskine
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Desk Number
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    231
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Assignment Manager
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    Donna Neil
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    Account
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    DCC
                  </h2>
                </div>
                <div className="text-nowrap">
                  <h1 className="bg-primary border-t-1 border-r-1 border-l-1 border-primary px-3 py-1">
                    WBS Code
                  </h1>
                  <h2 className="border-l-1 border-b-1 border-r-1 text-accent-foreground border-accent px-3 py-1">
                    whduwahduwahduaw
                  </h2>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
