import Image from "next/image";
import React from "react";
import { IoMailOpenSharp, IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import Message from "../UI/Navbar/Message/Message";

const UserDetail = () => {
  const { user } = useSelector(state => state.user);

  if (Object.keys(user).length === 0) {
    return <Message message="No data found... Please go back..!" />;
  } else {
    return (
      <div className="bg-white mt-0 z">
        <div className="relative h-48 ">
          <style jsx global>{`
            body {
              background: #e4efff;
            }
          `}</style>

          <div className="relative h-full">
            <div
              className="w-56 h-56 border-[#C4D5EF] absolute left-0 m-auto 
              bottom-[-53%] right-0 border-[15px] rounded-full bg-yellow-50"
            >
              <Image
                src={user?.picture?.large}
                width={100}
                height={100}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#e4efff]">
          <p className="sm:mt-[15%] md:mt-[16%] xl:mt-[8%] mt-32 text-xl font-medium">
            {user?.name?.first} {user?.name?.last}
          </p>

          <div className="flex-col md:flex-row flex md:items-center gap-5 md:gap-20 mt-[4%]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#2D80F8] flex items-center justify-center">
                <IoMailOpenSharp color="white" size={24} />
              </div>
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#2D80F8] flex items-center justify-center">
                <MdLocationOn color="white" size={30} />
              </div>
              <span>{user?.location?.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#2D80F8] flex items-center justify-center">
                <IoCallSharp color="white" size={24} />
              </div>
              <span>{user?.phone}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserDetail;
