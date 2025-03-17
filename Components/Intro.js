"use client";
import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";
import React from "react";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import {
  MapPinIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { Input } from "./ui/input";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { Calendar } from "./ui/calendar";

const Intro = () => {
  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <section className="relative justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.avif"
          alt="Beautiful travel destination"
          fill
          className="object-cover opacity-90 rounded-md shadow-lg shadow-blue-500"
          priority
        />
      </div>
      <div className="container mx-auto relative z-10 py-24 md:py-16 flex flex-col justify-center items-center">
        <div className="max-w-4xl space-y-4 mx-auto  text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl p-2 md:p-0">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl p-2 md:p-0">
            Plan your perfect trip with our expert recommendations, curated
            itineraries, and exclusive deals.
          </p>
        </div>
        <div className="mt-8 max-w-4xl bg-white rounded-lg shadow-lg p-1  pt-3 sm:p-5 md:p-5">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-4 space-x-2 h-12">
              <TabsTrigger
                value="flights"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <PlaneTakeoffIcon className="h-4 w-4" />
                <span className="text-xs md:text-base">Flights</span>
              </TabsTrigger>
              <TabsTrigger
                value="hotels"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <MapPinIcon className="h-4 w-4" />
                <span className="text-xs md:text-base">Hotels</span>
              </TabsTrigger>
              <TabsTrigger
                value="packages"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <PlaneLandingIcon className="h-2 w-2" />
                <span className="text-[10px] md:text-base">Packages</span>
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <UsersIcon className="h-4 w-4" />
                <span className="text-xs md:text-base">Activities</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flights" className="mt-4 p-2">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">From</label>
                  <Input placeholder="Departure city" className="text-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">To</label>
                  <Input
                    placeholder="Destination city"
                    className="text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Dates
                  </label>
                  <Popover>
                    <PopoverTrigger asChild className="!block !w-full md:!w-[14em]">
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal text-black hover:text-black hover:cursor-pointer",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2 text-black">
                  <label className="text-sm font-medium text-black">
                    Travelers
                  </label>

                  <Input
                    className="text-sm text-black"
                    type="number"
                    min="1"
                    placeholder="1 Adult"
                  />
                </div>
              </div>
              <Button
                className="mt-4 w-full md:w-auto hover:cursor-pointer"
                size="lg"
              >
                <SearchIcon className="mr-2 h-4 w-4" />
                Search Flights
              </Button>
            </TabsContent>
            <TabsContent value="hotels" className="mt-4 p-2">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-black">
                    Destination
                  </label>
                  <Input
                    placeholder="City, region, or property"
                    type="text"
                    className="text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Dates
                  </label>

                  <Popover>
                  <PopoverTrigger asChild className="!block !w-full md:!w-[14em]">
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal text-black hover:text-black hover:cursor-pointer",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">
                    Guests
                  </label>

                  <Input
                    placeholder="2 Guests"
                    type="number"
                    min="1"
                    className="text-black"
                  />
                </div>
              </div>
              <Button className="mt-4 w-full md:w-auto" size="lg">
                <SearchIcon className="mr-2 h-4 w-4" />
                Search Hotels
              </Button>
            </TabsContent>
            <TabsContent value="packages" className="mt-4 p-2">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From</label>
                  <Input
                    placeholder="Departure city"
                    type="text"
                    className="text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <Input
                    placeholder="Destination"
                    type="text"
                    className="text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dates</label>
                  <Popover>
                  <PopoverTrigger asChild className="!block !w-full md:!w-[14em]">
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal text-black hover:text-black hover:cursor-pointer",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button className="mt-4 w-full md:w-auto" size="lg">
                <SearchIcon className="mr-2 h-4 w-4" />
                Search Packages
              </Button>
            </TabsContent>
            <TabsContent value="activities" className="mt-4 p-2">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Destination</label>
                  <Input
                    placeholder="Where are you going?"
                    className="text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dates</label>
                  <Popover>
                  <PopoverTrigger asChild className="!block !w-full md:!w-[14em]">
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal text-black hover:text-black hover:cursor-pointer",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button className="mt-4 w-full md:w-auto" size="lg">
                <SearchIcon className="mr-2 h-4 w-4" />
                Search Activities
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Intro;
