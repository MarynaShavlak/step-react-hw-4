import './BlogSection.css';
import { GalleryList } from '../../components/GalleryList';
import { LoadMoreBtn } from '../../components/Buttons/LoadMoreBtn';
import { blogData } from '../../data';

export const BlogSection = () => {
  const onLoadMore = () => {
    console.log('load more logic');
  };
  return (
    <>
      <GalleryList data={blogData} />
      <LoadMoreBtn onBtnClick={onLoadMore} />
    </>
  );
};
