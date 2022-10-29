import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Bitmap.png";
import { useRouter } from "next/router";
import { IoCaretBack } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../../../lib/helper";
const Navbar = () => {
  const router = useRouter();

  const regex = /[id]/;

  const queryClient = useQueryClient();

  const onGetUsers = () => {
    queryClient.prefetchQuery(["users"], getUsers);
  };

  return (
    <div className="bg-white shadow-md h-20 px-5 fixed w-full justify-between items-center flex z-20">
      <Image
        src={Logo}
        className="w-24 object-fill"
        onClick={() => router.push("/")}
      />

      {!router.pathname.match(regex) ? (
        <button
          className="bg-[#2D80F8] h-12 text-white rounded-md font-medium text-sm
        tracking-widest px-6"
          onClick={onGetUsers}
        >
          GENERATE NEW USERS
        </button>
      ) : (
        <button
          onClick={() => router.back()}
          className="border-[#2D80F8] flex items-center justify-center h-12 text-[#2D80F8] border-2 
          rounded-md font-medium text-sm
        tracking-widest w-32"
        >
          <IoCaretBack color="#2D80F8" />
          BACK
        </button>
      )}
    </div>
  );
};

export default Navbar;
