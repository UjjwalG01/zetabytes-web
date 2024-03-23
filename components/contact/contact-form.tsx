"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/(pages)/(routes)/contact/constants";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ContactLocationSection } from "./contact-location";
import { ContactInput } from "./contact-input";

export const ContactFormSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="my-12">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-4">
          <div className="w-full">
            <Card className=" shadow-md p-4 sm:p-6 xl:p-12">
              <CardHeader className="flex flex-col gap-y-2">
                <CardTitle className="text-4xl">Send us a Message</CardTitle>
                <CardDescription className="font-semibold text-muted-foreground text-red-500">
                  Fields marked with * is mandatory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-y-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full space-y-6"
                    >
                      {/* <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium">
                              Full Name
                              <span className="text-red-500 font-semibold ml-1 text-lg">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                className="h-12 text-muted-foreground font-medium resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */}
                      <ContactInput
                        name="name"
                        label="Full Name"
                        placeholder="Your Full Name"
                        control={form.control}
                        isRequired={true}
                      />
                      <ContactInput
                        name="phone"
                        label="Phone Number"
                        placeholder="Your Phone Number"
                        control={form.control}
                        isRequired={true}
                      />
                      <ContactInput
                        name="email"
                        label="Email"
                        placeholder="Your Email Address"
                        control={form.control}
                        isRequired={true}
                      />
                      <ContactInput
                        name="subject"
                        label="Subject"
                        placeholder="Your Subject"
                        control={form.control}
                        isRequired={false}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                rows={20}
                                className="h-12 hover:shadow px-4 font-medium "
                                placeholder="Your Message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Send Message</Button>
                    </form>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </div>
          <aside className="w-full">
            <ContactLocationSection />
          </aside>
        </div>
      </div>
    </section>
  );
};
