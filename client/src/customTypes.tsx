export type AlbumType = {
  id: string;
  title: string;
  date: number;
  description: string;
  favorite: boolean;
  coverImg: string;
  images: string[];
};

export type ScreenState = {
  screen: number;
  viewAlbum: boolean;
  editAlbum: boolean;
  activeAlbum: AlbumType;
};
