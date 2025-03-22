import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <div className="lg:flex w-[1500px] mx-auto flex-col text-white">
        <div>
          <Image
            src={"/bg.jpg"}
            alt=""
            fill
            className="-z-50 brightness-30 object-cover"
          />
        </div>
      </div>
    </>
  );
}
