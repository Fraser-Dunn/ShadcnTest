import LoginCard from "@/reactComponents/LoginCard";

const Login = () => {
  return (
    <>
      <div
        className="bg-[#37044a] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
        style={{
          background:
            "radial-gradient(circle,rgba(55, 4, 74, 1) 0%, rgba(28, 14, 36, 1) 71%, rgba(14, 14, 15, 1) 100%)",
        }}
      >
        <div className="w-full max-w-sm">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default Login;
