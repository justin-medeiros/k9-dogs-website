"use client";

import { memo } from "react";
import Link from "next/link";
import "./UpcomingLitters.css";

function UpcomingLitters() {
  return (
    <div className="upcoming--litters--overall--container">
      <div className="upcoming--litters--background">
        <div className="upcoming--litters--poster--container">
          <img
            className="upcoming--litters--poster"
            src="/images/upcomingLitters/poster-new-litter.jpg"
            alt="Upcoming Litter Poster"
          />
        </div>
        <div>
          <Link href="/contact" className="upcoming--litters--contact">
            Contact us to reserve your puppy now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(UpcomingLitters);
