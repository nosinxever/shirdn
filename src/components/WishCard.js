//WishCard.js

import Link from "next/link";


import { convertTimeFormat } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WishCard({ wish }) {
  // Define a mapping of color names to Tailwind classes
  const colorClasses = {
    green: {
      textColorClass: "text-green-800",
      bgColorClass: "bg-green-100 bg-opacity-75",
      footerBgColorClass: "bg-green-50",
      badgeTextColorClass: "text-green-800 border-green-800",
      badgeBgColorClass: "bg-green-200",
    },
    cyan: {
      textColorClass: "text-cyan-800",
      bgColorClass: "bg-cyan-100 bg-opacity-75",
      footerBgColorClass: "bg-cyan-50",
      badgeTextColorClass: "text-cyan-800 border-cyan-800",
      badgeBgColorClass: "bg-cyan-200",
    },
    orange: {
      textColorClass: "text-orange-800",
      bgColorClass: "bg-orange-100 bg-opacity-75",
      footerBgColorClass: "bg-orange-50",
      badgeTextColorClass: "text-orange-800 border-orange-800",
      badgeBgColorClass: "bg-orange-200",
    },
    pink: {
      textColorClass: "text-pink-800",
      bgColorClass: "bg-pink-100 bg-opacity-75",
      footerBgColorClass: "bg-pink-50",
      badgeTextColorClass: "text-pink-800 border-pink-800",
      badgeBgColorClass: "bg-pink-200",
    },
    // New colors added below
    lime: {
      textColorClass: "text-lime-800",
      bgColorClass: "bg-lime-100 bg-opacity-75",
      footerBgColorClass: "bg-lime-50",
      badgeTextColorClass: "text-lime-800 border-lime-800",
      badgeBgColorClass: "bg-lime-200",
    },
    emerald: {
      textColorClass: "text-emerald-800",
      bgColorClass: "bg-emerald-100 bg-opacity-75",
      footerBgColorClass: "bg-emerald-50",
      badgeTextColorClass: "text-emerald-800 border-emerald-800",
      badgeBgColorClass: "bg-emerald-200",
    },
    teal: {
      textColorClass: "text-teal-800",
      bgColorClass: "bg-teal-100 bg-opacity-75",
      footerBgColorClass: "bg-teal-50",
      badgeTextColorClass: "text-teal-800 border-teal-800",
      badgeBgColorClass: "bg-teal-200",
    },
    blue: {
      textColorClass: "text-blue-800",
      bgColorClass: "bg-blue-100 bg-opacity-75",
      footerBgColorClass: "bg-blue-50",
      badgeTextColorClass: "text-blue-800 border-blue-800",
      badgeBgColorClass: "bg-blue-200",
    },
    purple: {
      textColorClass: "text-purple-800",
      bgColorClass: "bg-purple-100 bg-opacity-75",
      footerBgColorClass: "bg-purple-50",
      badgeTextColorClass: "text-purple-800 border-purple-800",
      badgeBgColorClass: "bg-purple-200",
    },
    rose: {
      textColorClass: "text-rose-800",
      bgColorClass: "bg-rose-100 bg-opacity-75",
      footerBgColorClass: "bg-rose-50",
      badgeTextColorClass: "text-rose-800 border-rose-800",
      badgeBgColorClass: "bg-rose-200",
    },
  };
  

  // Use the mapping to select the classes based on the wish's color
  const classes = colorClasses[wish.color] || {
    // Default classes if wish.color is not found
    textColorClass: "text-gray-800",
    bgColorClass: "bg-gray-100 bg-opacity-75",
    footerBgColorClass: "bg-gray-50",
    badgeTextColorClass: "text-gray-800 border-gray-800",
    badgeBgColorClass: "bg-gray-200",
  };

  return (
    <Card className="relative z-10 bg-white bg-opacity-90 border-0 shadow-lg rounded-lg overflow-hidden">
      <CardHeader className={classes.bgColorClass}>
        <CardTitle className={`text-xl font-semibold ${classes.textColorClass}`}>{wish.title}</CardTitle>
        <CardDescription className="text-sm">{convertTimeFormat(wish.lastEditedTime)}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="h-24 overflow-hidden text-slate-700">{wish.description}</p>
      </CardContent>
      <CardFooter className={`p-4 ${classes.footerBgColorClass}`}>
        <Badge variant="outline" className={`mr-2 ${classes.badgeTextColorClass}`}>{wish.status}</Badge>
        {wish.tags.map(tag => (
          <Badge key={tag} variant="secondary" className={`mr-2 ${classes.badgeBgColorClass}`}>#{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}






