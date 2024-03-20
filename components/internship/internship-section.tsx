"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { InternshipCard } from "./internship-card";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const internshipsData = [
  {
    title: "Web Development Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
  {
    title: "Machine Learning Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
  {
    title: "Data Science Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
  {
    title: "Android Development Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
  {
    title: "Graphic Design Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
  {
    title: "Video Editing Internship",
    company: "Zetabytes NP",
    location: "Kathmandu",
    type: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    duration: "1 month",
    applyLink: "#",
  },
];

export const InternshipSection = () => {
  const router = useRouter();

  const form = useForm({
    //     // resolver: zodResolver(formSchema),
    //     // defaultValues: {
    //     //   prompt: "",
    //     //   amount: "1",
    //     //   resolution: "512x512",
    //     // },
  });

  const onSubmit = async () => {
    //     try {
    //     //   const response = await axios.post("/api/image", values);
    //     //   const urls = response.data.map((image: { url: string }) => image.url);
    //       form.reset();
    //     } catch (error: any) {
    //       if (error?.response?.status === 403) {
    //       } else {
    //         // toast.error("Something went wrong!");
    //       }
    //     } finally {
    //     //   router.refresh();
    //     }
  };
  return (
    <section className="w-full h-full flex flex-col items-center py-6 space-y-8">
      <div className="container bg-neutral rounded-md">
        <div className="flex w-full gap-x-4 my-4 md:my-6 lg:my-12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid md:grid-cols-11 w-full gap-x-2 focus-within:shadow-sm rounded-lg gap-y-3"
            >
              <FormField
                name="location"
                control={form.control}
                render={() => (
                  <FormItem className="col-span-11 md:col-span-3">
                    <Select>
                      <FormControl className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-4 py-6">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="flex items-center gap-x-3">
                        <SelectItem value="Kathmandu">Kathmandu</SelectItem>
                        <SelectItem value="Pokhara">Pokhara</SelectItem>
                        <SelectItem value="Bhaktapur">Bhaktapur</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="location"
                control={form.control}
                render={() => (
                  <FormItem className="col-span-11 md:col-span-3">
                    <Select>
                      <FormControl className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-4 py-6">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="flex items-center gap-x-3">
                        <SelectItem value="web_development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="machine_learning">
                          Machine Learning
                        </SelectItem>
                        <SelectItem value="data_science">
                          Data Science
                        </SelectItem>
                        <SelectItem value="android_development">
                          Android Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="location"
                control={form.control}
                render={() => (
                  <FormItem className="col-span-11 md:col-span-4 w-full border focus-within:shadow-sm rounded-lg">
                    <Input
                      placeholder="Search here..."
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-4 py-6"
                    />
                  </FormItem>
                )}
              />
              <Button
                // variant={""}
                className="col-span-11 md:col-span-1 h-full p-3 rounded-lg cursor-pointer flex items-center justify-center"
              >
                <Search fontWeight={500} />
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="container bg-neutral rounded-lg">
        <div className="grid xl:grid-cols-[4fr_1fr] gap-4">
          <div className="flex flex-col w-full">
            <div className="grid lg:grid-cols-2 gap-4">
              {internshipsData.map((item) => (
                <InternshipCard
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  type={item.type}
                  description={item.description}
                  duration={item.duration}
                  applyLink={item.applyLink}
                  key={item.title}
                />
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-y-2">
            <h1 className="text-xl font-bold">Filter Internships</h1>
            <span className="text-muted-foreground text-sm italic font-medium">
              No filters available
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
};
