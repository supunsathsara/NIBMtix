"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketCheckIcon } from "lucide-react";

// Define the schema
const TicketsRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, "You must enter a name")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email(),
  phone: z
    .string()
    .min(9, "You must enter a valid mobile number")
    .max(12, "You must enter a valid mobile number"),
  batch: z
    .string()
    .min(2, "You must enter a batch")
    .max(15, "Batch must be less than 15 characters"),
  mealType: z.enum(["non-veg", "veg", "fish"]).optional(),
  paymentMethod: z.enum(["card", "cash"]),
});

type TicketsRegistrationSchemaType = z.infer<typeof TicketsRegistrationSchema>;

const BuyTicketForm = () => {
  const form = useForm<TicketsRegistrationSchemaType>({
    resolver: zodResolver(TicketsRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      batch: "",
      mealType: "non-veg",
      paymentMethod: "card",
    },
  });

  function onSubmit(values: TicketsRegistrationSchemaType) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="bg-muted/60 md:w-[40vw] mt-6 px-4">
      <CardHeader>
        <CardTitle>
          Ticket Information
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4 flex items-center gap-3">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
              LKR: 1000
            </span>
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:px-4"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                {/* <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" /> */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="batch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Batch</FormLabel>
                      <FormControl>
                        <Input id="batch" placeholder="GAHDSE231F" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="john@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input id="phone" placeholder="0712345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="mealType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meal Type</FormLabel>
                    <FormControl>
                      <RadioGroup id="mealType" defaultValue="non-veg">
                        <div className="flex space-x-4">
                          <Label
                            htmlFor="non-veg"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="non-veg" value="non-veg" />
                            <span>Non-Veg</span>
                          </Label>
                          <Label
                            htmlFor="veg"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="veg" value="veg" />
                            <span>Veg</span>
                          </Label>
                          <Label
                            htmlFor="fish"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="fish" value="fish" />
                            <span>Fish</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2 mt-2">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <TooltipProvider>
                      <FormLabel>
                        Payment Method
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoCircledIcon className="ml-2 w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              If you choose the cash option, please pay the
                              amount directly to an organizer.
                            </p>
                            <p>
                              Once your payment is received, your ticket will be
                              activated.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup id="paymentMethod" defaultValue="card">
                          <div className="flex space-x-4">
                            <Label
                              htmlFor="card"
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem id="card" value="card" />
                              <span>Card</span>
                            </Label>
                            <Label
                              htmlFor="cash"
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem id="cash" value="cash" />
                              <span>Cash</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </TooltipProvider>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" variant="outline" className="mt-3">
              CheckOut
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default BuyTicketForm;
