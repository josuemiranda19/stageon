"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description: "Work together in real time...",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description: "See changes as they happen...",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description: "Experience real-time updates...",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description: "More text here...",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}