import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginCard({
  className,

  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            {/* <a

                     href="#"

                     className="flex flex-col items-center gap-2 font-medium">

                     <div className="flex size-8 items-center justify-center rounded-md">

                        <GalleryVerticalEnd className="size-6" />

                     </div>

                     <span className="sr-only">Acme Inc.</span>

                  </a> */}

            <h1 className="text-6xl font-bold whitespace-nowrap w-max">
              Welcome to IgniteU
            </h1>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>

              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
