"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const signIn = () => {
    console.log("Sign in clicked");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:py-16 px-6 py-4">
        <Link
          href="/"
          className="flex justify-between items-center"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="Car hub logo"
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          BtnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={signIn}
        />
      </nav>
    </header>
  );
};

export default Nav;
