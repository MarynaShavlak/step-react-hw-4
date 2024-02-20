import { Header } from '../../components/Header';
import { GalleryInfo } from '../../components/GalleryInfo';
import { ProjectsSection } from '../../components/ProjectsSection';
import { BlogSection } from '../../components/BlogSection';
import { SignupSection } from '../../components/SignupSection';

export const Lifestyle = () => {
  return (
    <>
      <Header />
      <main className="section">
        <GalleryInfo />
        <ProjectsSection />
        <SignupSection />
        <BlogSection />
      </main>
    </>
  );
};
