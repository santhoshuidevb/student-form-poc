import Image from "next/image";
import StudentForm from "./components/student-form";
import StudentFormFinal from "./components/student-form-final";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <StudentForm /> */}
      <StudentFormFinal />
    </div>
  );
}
