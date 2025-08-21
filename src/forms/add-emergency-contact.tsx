"use client";
import { CreateEmergencyContactAction } from "@/actions/profile actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateEmergencyContactSchema } from "@/validators/profile-Validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export default function AddEmergencyContactForm() {
  const form = useForm<z.infer<typeof CreateEmergencyContactSchema>>({
    resolver: zodResolver(CreateEmergencyContactSchema),
    defaultValues: {
      name: "",
      relationship: "",
      contactNumber: "",
      isPrimary: false,
    },
  });

  async function onSubmit(values: z.infer<typeof CreateEmergencyContactSchema>) {
    const { success, message } = await CreateEmergencyContactAction(values);
    if (!success) {
      return toast.error(message);
    }
    toast.success(message);
    form.reset();
  }
  return (
    <Dialog>
      <Form {...form}>
        <form id="add-contact" onSubmit={form.handleSubmit(onSubmit)}>
          <DialogTrigger asChild>
            <Button variant="default">Add Contact</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new contact</DialogTitle>
              <DialogDescription>Please add an emergency contact whi we can contact in case of emergency</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="relationship"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relationship</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="isPrimary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Contact</FormLabel>
                      <p className="text-xs">is this the person you would like us to call first</p>
                      <FormControl>
                        <Checkbox onCheckedChange={field.onChange} name={field.name} checked={field.value} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <div className="flex flex-row items-center justify-between w-full">
                <DialogClose asChild>
                  <Button variant="destructive" size={"sm"}>
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" form="add-contact" size={"sm"}>
                    Add New Contact
                  </Button>
                </DialogClose>
              </div>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
