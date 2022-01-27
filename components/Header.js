import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { useUserAuth } from "../context/UserAuthContext";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const { user, logOut } = useUserAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
      console.log("logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetInput = () => {
    setSearchInput("");
    setIsVisible(true);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    setSearchInput("");
    setIsVisible(true);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={
          isVisible
            ? "grid grid-cols-2 sm:grid-cols-3 md:px-10 transition duration-300 ease-in-out bg-white shadow-md false p-5"
            : " md:px-10 transition duration-300 ease-in-out bg-white shadow-md"
        }
      >
        {isVisible ? (
          <>
            <div
              onClick={() => router.push("/")}
              className="relative flex imtes-center h-9 md:h-10 cursor-pointer my-auto"
            >
              <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                alt="Airbnb logo"
              />
            </div>
            <div className="bg-white hidden sm:flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="ml-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                type="text"
                placeholder={placeholder ? placeholder : "Start your search"}
              />
              <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            <div className="flex items-center justify-end space-x-4 transition duration-200 ease-in-out">
              <p className="hidden md:inline cursor-pointer">Become a host</p>
              <SearchIcon
                className="sm:hidden h-5 cursor-pointer"
                onClick={() => setIsVisible(false)}
              />
              <GlobeAltIcon className="h-5 cursor-pointer" />

              <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
                <MenuIcon className="h-5 lg:h-6 cursor-pointer md:mr-2" />
                {user ? (
                  <Image
                    src={user.photoURL}
                    height={20}
                    width={20}
                    alt="slika"
                    className="rounded-full cursor-pointer"
                    onClick={handleLogout}
                  />
                ) : (
                  <UserCircleIcon className="h-5 lg:h-6" />
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex transition duration-300 ease-in-out bg-white  shadow-md p-5">
            <div className="bg-white flex items-center border-2 rounded-full py-2 shadow-sm flex-grow">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="ml-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                type="text"
                placeholder={placeholder ? placeholder : "Start your search"}
              />
              <SearchIcon className="inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
            </div>
            <div className="flex items-center justify-end space-x-4 transition duration-200 ease-in-out false">
              <XIcon
                className="sm:hidden h-6 cursor-pointer ml-3"
                onClick={() => {
                  setIsVisible(true);
                  setSearchInput("");
                }}
              />
            </div>
          </div>
        )}

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4 px-3">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guest
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                className="w-12 pl-2 text-lg outline-none text-red-400"
                type="number"
                min={1}
              />
            </div>
            <div className="flex pb-5">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
