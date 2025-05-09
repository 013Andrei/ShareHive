import Image from "next/image";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const Leftbar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-yellow-200">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex flex-col">
          {menuList.map((item) => (
            <Link href={item.link} className="p-2 rounded-full hover:bg-yellow-200 flex items-center gap-4" key={item.id}>
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline  hover:font-bold">{item.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className=" bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center xxl:hidden">
        <Image src="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <Link href="/" className="hidden xxl:block bg-yellow-300 text-black hover:text-white rounded-full font-bold py-2 px-20">
         Post
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="/general/avatar.png" alt="John Snow" fill/>
            </div>
            <div className="hidden xxl:flex flex-col">
                <span className="font-bold">John Snow</span>
                <span className="text-sm text-textGray">@JohnSnow</span>
            </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default Leftbar;
