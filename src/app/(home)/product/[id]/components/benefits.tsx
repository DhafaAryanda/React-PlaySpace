import React, { useEffect, useState } from "react";

import Link from "next/link";
import { getBenefits } from "@/app/services/benefitService";

interface BenefitsProps {
  name: string;
  id: string;
  price_per_hour: string;
}

export default function Benefits({ id, price_per_hour }: BenefitsProps) {
  const [benefits, setBenefits] = useState<BenefitsProps[]>([]);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await getBenefits(id);
        setBenefits(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchBenefits ~ error:", error);
      }
    };
    fetchBenefits();
  }, [id]);

  return (
    <div className="p-[2px] bg-img-purple-to-orange rounded-[20px] flex w-full h-fit">
      <div className="w-full p-[28px] bg-[#181818] rounded-[20px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
            Rp {price_per_hour.toLocaleString()}
          </p>
          <div className="flex flex-col gap-[10px]">
            {(benefits.length > 0 &&
              benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-[10px]">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="/assets/images/icons/check.svg" alt="icon" />
                  </div>
                  <p className="text-playspace-grey">{benefit.name}</p>
                </div>
              ))) || (
              <p className="text-playspace-grey">No benefits available</p>
            )}
          </div>
        </div>
        <Link
          href={`/product/${id}/checkout`}
          className="bg-[#2D68F8] text-center font-semibold p-[12px_20px] rounded-full hover:bg-[#083297] active:bg-[#062162] transition-all duration-300"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
