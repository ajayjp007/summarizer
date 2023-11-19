"use client";
import Idea from "@/public/idea.svg";
import youtube from "@/public/youtube.svg";
import listen from "@/public/listen.svg";
import { useState } from "react";
import Button from "@/app/components/Button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [summary, setSummary] = useState<any>(null);

  const updateInputVal = (event: any) => {
    setInputVal(event?.target.value);
  };

  const generateSummary = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/download_captions/?youtube_url=${inputVal}`
      );
      const data = res.text();
      setSummary(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center">
      <section className="container h-screen py-20 px-4 md:px-20 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 h-full">
          <div className="h-full flex flex-col justify-center gap-3 lg:w-2/3">
            <h1 className="text-3xl leading-[40px] xl:text-5xl text-black tracking-[-0.02rem] font-bold capitalize xl:leading-[72px]">
              Introducing <span className="gradient-text">Apple</span> – Your
              Shortcut to Brilliance! 🎥✨
            </h1>
            <p className="text-[#707070] lg:w-2/3 text-sm xl:text-base pl-1">
              Tired of long videos? 🕒 Get ready for a game-changer! Our
              AI-powered platform transforms lengthy content into bite-sized
              brilliance! 🔍🚀
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Button text="Let's Get Started" />
            </div>
          </div>
          <div className="h-full lg:h-auto">
            <iframe
              width="768"
              height="432"
              src="https://www.youtube.com/embed/W3Pb3v_GpoE"
              title="ShipFast Demo — 2x if too slow 😉"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="h-screen bg-gray-100 py-20 w-full flex items-center justify-center">
        <section className="container  h-full px-4 md:px-20 lg:px-0">
          <div className="h-full flex flex-col items-center gap-3 ">
            <h1 className="text-3xl leading-[40px] xl:text-5xl text-black tracking-[-0.02rem] font-bold capitalize xl:leading-[72px]">
              Wondering <span className="gradient-text">Why Us?</span>
            </h1>
            <p className="text-[#707070] lg:w-2/3 text-center  text-sm xl:text-base pl-1">
              Time is precious. Your videos shouldn't waste it. 🌟 Ready for a
              smarter, faster, and more enjoyable watch? Dive into [Your
              Platform Name] now! 🚀👀 #VideoSummarized #TimeSaver
            </p>
          </div>
        </section>
      </div>

      <div className="testimonal-section w-full flex items-center justify-center">
        <div className="py-20 px-20 w-full container">
          <div className="flex flex-col items-center gap-6 w-full">
            <h1 className="text-5xl font-bold text-black text-center leading-[72px] mb-4">
              People <span className="gradient-text">Love Us</span> And We Love
              It
            </h1>
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className=" grid grid-rows-4 my-10 gap-8">
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
              </div>
              <div className=" grid grid-rows-3 gap-6">
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
              </div>
              <div className=" grid grid-rows-3 gap-5">
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
                <div className="border border-zinc-100 text-black shadow-md bg-white px-4 pt-3 pb-4 rounded-lg ">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full user-avatar flex items-center justify-center font-semibold text-white"></div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-semibold">Tim Cook</p>
                      <p className="text-sm font-medium text-zinc-500">
                        CEO Of Apple
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-zinc-500">
                    Product was amazing easy to use extremely use full would
                    definitely recommend it to another 100 billion people in the
                    world. Slim Shady rockabye baby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
