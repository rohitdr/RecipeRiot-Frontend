import { motion } from "framer-motion";

export default function Community() {
  const users = [
    { name: "Rohit", img: "https://i.pravatar.cc/100?img=1" },
    { name: "Ankit", img: "https://i.pravatar.cc/100?img=2" },
    { name: "Neha", img: "https://i.pravatar.cc/100?img=3" },
    { name: "Simran", img: "https://i.pravatar.cc/100?img=4" },
    { name: "Aman", img: "https://i.pravatar.cc/100?img=5" },
  ];

  const posts = [
    {
      user: "Rohit",
      text: "Just cooked Butter Chicken 🔥",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    },
    {
      user: "Neha",
      text: "Healthy salad idea 🥗",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    },
    {
      user: "Ankit",
      text: "Pasta perfection 🍝",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    }
  ];

  return (
<section className="relative px-4 py-20 text-white overflow-hidden 
">

  
<div className="absolute top-20 left-20 w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full" />
<div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold ">
            👥 Community <span className="text-orange-400">Buzz</span>
          </h2>
          <p className="text-white/60 text-sm mt-1">
            See what others are cooking & sharing
          </p>
        </motion.div>

        {/* STORIES */}
        <div className="flex gap-4 overflow-x-auto pb-4  no-scrollbar">
          {users.map((user, i) => (
            <div key={i} className="flex flex-col items-center min-w-[70px]">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-orange-400 to-pink-500">
                <img
                  src={user.img}
                    loading='lazy'
                    alt="user"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                />
              </div>
              <p className="text-xs mt-1">{user.name}</p>
            </div>
          ))}
        </div>

        {/* FEED */}
        <div className="mt-8 space-y-6">
          {posts.map((post, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{delay:i*0.2}}
              key={i}
              className="flex gap-4 bg-white/5 backdrop-blur-md p-4 shadow-lg border border-white/10  rounded-2xl hover:bg-white/10 transition"
            >
              {/* Image */}
              <img
                src={post.image}
                  loading='lazy'
                  alt="post-image"
                className="w-24 h-24 rounded-xl object-cover"
              />

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70">{post.user}</p>
                  <p className="font-semibold">{post.text}</p>
                </div>

                <div className="text-xs text-white/50">
                  ❤️ 24 Likes • 💬 6 Comments
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

