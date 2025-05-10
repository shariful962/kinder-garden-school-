import Banner from "@/components/Banner/Banner";
import Curriculam from "@/components/Curriculam/Curriculam";
import Story from "@/components/Story/Story";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <Curriculam></Curriculam>
       <Story></Story>
    </div>
  );
}
