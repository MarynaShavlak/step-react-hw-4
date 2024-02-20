export interface IGalleryItem {
  id: number;
  img: string;
  title: string;
  category: string;
  description: string;
}

export interface IGalleryList {
  data: IGalleryItem[];
}
