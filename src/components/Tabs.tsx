"use client";

import { CompareDemo } from "./Compare";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className=" overflow-hidden relative  rounded-4xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-300 to-orange-700">
          
          {/* <h1 className=" font-bold flex items-center text-black lg:text-6xl md:text-6xl ">
            BEFORE
          </h1> */}

          <DummyContent />
          {/* <h1 className="font-bold text-black flex items-start justify-end  lg:text-6xl md:text-6xl">
            AFTER
          </h1> */}
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-4xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-200 to-cyan-500">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-4xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-200 to-violet-900">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-4xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-300 to-pink-700">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-4xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-200 to-yellow-600">
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CompareDemo/>
    </div>
  );
};
