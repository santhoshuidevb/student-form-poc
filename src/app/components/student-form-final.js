"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
// import { FileUpload } from "@/components/ui/file-upload"; // Assuming you have a file upload component

// Define colleges
const colleges = [
  "College A",
  "College B",
  "College C",
];

// Form validation schema using Zod
const FormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  dob: z.string().nonempty({ message: "Date of birth is required" }),
  age: z.number().min(17, { message: "Minimum age is 17" }),
  gender: z.enum(["Male", "Female", "Other"]),
  aadhar: z.string().length(12, { message: "Aadhar number must be 12 digits" }),
  college: z.enum(colleges, { message: "Select a valid college" }),
  fatherName: z.string().min(2, { message: "Father's name is required" }),
  motherName: z.string().min(2, { message: "Mother's name is required" }),
  fatherOccupation: z.string().nonempty({ message: "Father's occupation is required" }),
  motherOccupation: z.string().nonempty({ message: "Mother's occupation is required" }),
  govtEmployee: z.boolean(),
  incomeCertificate: z.string().optional(),
  tenthMarks: z.number().min(75, { message: "Marks should be 75 or above to be eligible" }),
  twelfthMarks: z.number().min(75, { message: "Marks should be 75 or above to be eligible" }),
});

export default function StudentFormFinal() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      age: 0,
      gender: "Male",
      aadhar: "",
      college: "",
      fatherName: "",
      motherName: "",
      fatherOccupation: "",
      motherOccupation: "",
      govtEmployee: false,
      incomeCertificate: "",
      tenthMarks: 0,
      twelfthMarks: 0,
    },
  });

  function onSubmit(data) {
    if (data.tenthMarks < 75 || data.twelfthMarks < 75) {
      alert("Not eligible for applying to this form");
      return;
    }
    console.log(data, "data");
    alert(`Successfully applied! Congrats, ${data.firstName} ${data.lastName}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Student Information */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Age */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* College Selection */}
        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College</FormLabel>
              <FormControl>
                <Select {...field}>
                  <option value="">Select College</option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college}>
                      {college}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Parent Information */}
        <FormField
          control={form.control}
          name="fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Name</FormLabel>
              <FormControl>
                <Input placeholder="Father's Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Name</FormLabel>
              <FormControl>
                <Input placeholder="Mother's Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Income Certificate */}
        <FormField
          control={form.control}
          name="govtEmployee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Government Employee?</FormLabel>
              <FormControl>
                <Checkbox {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="incomeCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Income Certificate</FormLabel>
              <FormControl>
                {/* <FileUpload {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Certificate Upload */}
        <FormField
          control={form.control}
          name="tenthMarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>10th Marks</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter 10th Marks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="twelfthMarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>12th Marks</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter 12th Marks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
