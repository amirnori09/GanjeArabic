
// !components
import MegaHeader from "@/app/components/pages/home/MegaHeader";
import SearchBox from "@/app/components/pages/home/SearchBox";
import CarouselAds from "@/app/components/pages/home/CarouselAds";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="">
        <MegaHeader />
        <SearchBox />
      </div>
      <CarouselAds title='مشهد' />
      <CarouselAds title='شیراز' />
      <CarouselAds title='رشت' />
    </div>
  );
}
