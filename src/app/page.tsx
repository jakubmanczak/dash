"use client";

import { HttpResponseTag } from "@/components/fetchers/HttpResponseTag";
import { TF2PotatoServerTag } from "@/components/fetchers/TF2PotatoServerTag";
import { HardwareTag } from "@/components/HardwareTag";
import { useEffect, useState } from "react";

export default function Home() {
  const refreshInterval = 45;
  const [counter, setCounter] = useState<number>(refreshInterval);
  const [refresh, setRefresh] = useState<number>(0);
  useEffect(() => {
    if (counter === 0) {
      setRefresh(refresh + 1);
      setCounter(refreshInterval);
    } else {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return (
    <div className="z-50 relative mx-auto max-w-5xl bg-gray-800 p-4 shadow-xl ring-1 ring-gray-700 rounded">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="md:text-xl">{"Service Dashboard"}</h1>
          <p className="text-[12px] text-gray-500">
            {`Refreshing in ${counter}s...`}
          </p>
        </div>
      </div>
      <hr className="border-gray-700 my-4" />
      <p className="px-4 text-gray-500">Deployments</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="space-y-4">
          <HardwareTag
            name="manczak-net"
            color="gray"
            status="Unknown (CORS)"
          />
          <HttpResponseTag
            refresh={refresh}
            name="api.manczak.net"
            url="https://api.manczak.net"
          />
          {/* <HttpResponseTag
            refresh={refresh}
            name="quotes-uam"
            url="https://kogni.manczak.net"
          /> */}
          <HardwareTag
            name="Quotes (UAM)"
            color="gray"
            status="Unknown (CORS)"
          />
          <HardwareTag
            name="Quotes (ZSK)"
            color="gray"
            status="Unknown (CORS)"
          />
        </div>
        <TF2PotatoServerTag refresh={refresh} />
        <HardwareTag name="debateco.re" color="gray" status="Unknown (CORS)" />
        <HttpResponseTag
          refresh={refresh}
          name="tools.debateco.re"
          url="https://tools.debateco.re"
        />
        <HardwareTag name="gractwo.pl" color="gray" status="Unknown (CORS)" />
      </div>
      <p className="px-4 text-gray-500 mt-4">Hardware</p>
      <div className="grid grid-cols-1 gap-4 p-4">
        <HardwareTag name="saxony" color="emerald" status="OK" ping />
      </div>
      <hr className="border-gray-700 my-4" />
      <p className="text-[12px] text-right text-gray-500">
        {"Jakub Mańczak, 2024"}
      </p>
    </div>
  );
}
