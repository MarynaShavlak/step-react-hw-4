import { Header } from '../../components/Header';
import { GalleryInfo } from '../../components/GalleryInfo';
import { GalleryList } from '../../components/GalleryList';
import { galleryData } from '../../data';
import { BlogSection } from '../../components/BlogSection';
import { SignupSection } from '../../components/SignupSection';

export const Lifestyle = () => {
  return (
    <>
      <Header />
      <main className="section">
        <GalleryInfo />
        <GalleryList data={galleryData} />
        <SignupSection />
        <BlogSection />
      </main>
    </>
  );
};
