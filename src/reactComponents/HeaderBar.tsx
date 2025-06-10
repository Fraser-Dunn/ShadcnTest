import { Separator } from "../components/ui/separator";

export default function HeaderBar() {
  return (
    <>
      <header>
        <div className="flex h-16 items-center space-x-3 px-3 py-3">
          <h1 className="px-3 text-2xl">DXC</h1>
          <Separator orientation="vertical" className="h-6" />
          <h1 className="px-3 text-2xl">IgniteU</h1>
        </div>
      </header>
    </>
  );
}
