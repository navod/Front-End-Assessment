import React, { useState } from "react";
import { useRouter } from "next/router";
import { getUsers } from "../../lib/helper";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/user";
import Message from "../UI/Navbar/Message/Message";

const Home = () => {
  const ACTIVE_BUTTON = `bg-[#E4EFFF] rounded-full w-24 py-2 text-[#2D80F8] border-2 border-[#2D80F8] text-sm tracking-widest`;
  const NOT_ACTIVE_BUTTON = `rounded-full w-24 py-2 text-[#2D80F8] border-2 border-[#DDDDDD] text-sm tracking-widest`;

  const [maleUsers, setMaleUsers] = useState([]);

  const [femaleUsers, setFemaleUsers] = useState([]);

  const { isLoading, error, isError, data } = useQuery(["users"], getUsers, {
    onSuccess: userRes => {
      let maleusers = [];
      let femaleusers = [];

      userRes.results.forEach(user => {
        if (user.gender === "male") {
          maleusers.push(user);
        }
        if (user.gender === "female") {
          femaleusers.push(user);
        }
      });
      setFemaleUsers(femaleusers);
      setMaleUsers(maleusers);
    },
  });

  const [isAll, setIsAll] = useState(true);

  const [isMale, setIsMale] = useState(false);

  const [isFemale, setIsFemale] = useState(false);

  const filterHandler = item => {
    switch (item) {
      case "ALL":
        setIsAll(true);
        setIsMale(false);
        setIsFemale(false);
        break;
      case "GENTS":
        setIsMale(true);
        setIsAll(false);
        setIsFemale(false);
        break;
      case "LADIES":
        setIsAll(false);
        setIsMale(false);
        setIsFemale(true);
        break;
      default:
        setIsAll(true);
        setIsMale(false);
        setIsFemale(false);
    }
  };

  const dispatch = useDispatch();

  const router = useRouter();

  const onHandleUserData = item => {
    dispatch(setUserData(item));
    router.push(`/user/${item.id.value}`);
  };

  const countUsers = () => {
    if (isAll) {
      return data.results.length;
    }
    if (isMale) {
      return maleUsers.length;
    }

    if (isFemale) {
      return femaleUsers.length;
    }
  };

  if (isError) return <Message color="bg-red-50" message={error} />;

  if (isLoading) return <Message message="loading...!" />;

  return (
    <div className="px-4">
      <div className="flex sm:flex-row flex-col sm:items-center  sm:justify-between mt-8">
        <span className="text-[#7C8090] font-medium text-xl mb-4 xl:mb-0">
          {countUsers()} new faces
        </span>
        <div className="flex items-center justify-between sm:justify-around gap-2">
          <div className="text-[#7C8090] text-sm font-semibold hidden sm:block">
            Show:
          </div>
          <button
            className={isAll ? ACTIVE_BUTTON : NOT_ACTIVE_BUTTON}
            onClick={() => filterHandler("ALL")}
          >
            ALL
          </button>
          <button
            className={isMale === true ? ACTIVE_BUTTON : NOT_ACTIVE_BUTTON}
            onClick={() => filterHandler("GENTS")}
          >
            GENTS
          </button>
          <button
            className={isFemale ? ACTIVE_BUTTON : NOT_ACTIVE_BUTTON}
            onClick={() => filterHandler("LADIES")}
          >
            LADIES
          </button>
        </div>
      </div>

      <div className="mt-10 sm:grid items-center flex-col sm:grid-cols-4 justify-center flex xl:grid-cols-9 gap-2">
        {isAll &&
          data?.results.map((item, index) => (
            <div
              onClick={() => onHandleUserData(item)}
              className="bg-slate-100-200 w-full xl:w-40 xl:h-40"
              key={index}
            >
              <Image
                src={item.picture.large}
                width={100}
                height={100}
                className="w-full h-full cursor-pointer hover:border-2 hover:shadow-xl"
              />
            </div>
          ))}

        {isMale &&
          maleUsers?.map((item, index) => (
            <div
              onClick={() => onHandleUserData(item)}
              className="bg-slate-100-200 w-full xl:w-40 xl:h-40"
              key={index}
            >
              <Image
                src={item?.picture?.large}
                width={100}
                height={100}
                className="w-full h-full cursor-pointer hover:border-2 hover:shadow-xl"
              />
            </div>
          ))}

        {isFemale &&
          femaleUsers?.map((item, index) => (
            <div
              onClick={() => onHandleUserData(item)}
              className="bg-slate-100-200 w-full xl:w-40 xl:h-40"
              key={index}
            >
              <Image
                src={item?.picture?.large}
                width={100}
                height={100}
                className="w-full h-full cursor-pointer hover:border-2 hover:shadow-xl"
              />
            </div>
          ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Home;
