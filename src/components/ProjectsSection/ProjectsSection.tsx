import { GalleryList } from '../../components/GalleryList';
import { galleryData } from '../../data';

export const ProjectsSection = () => {
  return (
    <section className="section--projects">
      <div className="container">
        <GalleryList data={galleryData} />
      </div>
    </section>
  );
};
