import { useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import {
  IImage,
  deleteImage,
  favoriteImage,
  fetchImagesAsync,
  getAllImages,
  getFavoritedImages,
  getImageById,
} from './gallerySlice';
import Spinner from '@/components/Spinner';
import styles from './Gallery.module.css';
import ImageList from '@/components/ImageList';
import Tabs from '@/components/Tabs';
import SideBar from '@/components/SideBar';
import ImageDetails from '@/components/ImageDetails';
import classNames from 'classnames';

function Gallery() {
  const dispatch = useAppDispatch();
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const images = useAppSelector(getAllImages);
  const favoritedImages = useAppSelector(getFavoritedImages);
  const selectedImage = useAppSelector((state) =>
    getImageById(state, selectedImageId)
  );
  const status = useAppSelector((state) => state.gallery.status);
  const error = useAppSelector((state) => state.gallery.error);
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImagesAsync());
    }
  }, [status, dispatch]);

  const handleOnClickImageListItem = (id: string) => {
    if (id === selectedImageId) {
      setSelectedImageId(null);
      setOpenSideBar(false);
    } else {
      setSelectedImageId(id);
      setOpenSideBar(true);
      console.log(sideBarRef);
      sideBarRef.current?.focus();
    }
  };

  const handleOnClickDelete = (id: string) => {
    dispatch(deleteImage({ id }));
    setSelectedImageId(null);
    setOpenSideBar(false);
  };

  const handleOnClickFavorite = (id: string, value: boolean) => {
    dispatch(favoriteImage({ id, value }));
  };

  const handleOnClickCloseSideBar = () => {
    setSelectedImageId(null);
    setOpenSideBar(false);
  };

  const renderGallery = (images: IImage[]): JSX.Element => {
    switch (status) {
      case 'loading':
        return <Spinner />;
      case 'succeeded':
        return (
          <ImageList
            images={images}
            selectedImageId={selectedImageId}
            onClick={handleOnClickImageListItem}
          />
        );
      case 'failed':
        return <div>{error}</div>;
      default:
        return <p>No images :(</p>;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames([
          styles.mainContent,
          openSideBar && styles.sideBarOpen,
        ])}
      >
        <h1 className={styles.title} tabIndex={0}>
          Photos
        </h1>
        <Tabs
          tabs={[
            {
              id: 1,
              content: renderGallery(images),
              title: 'Recently Added',
            },
            {
              id: 2,
              content: renderGallery(favoritedImages),
              title: 'Favorited',
            },
          ]}
        />
      </div>
      <SideBar
        isOpen={openSideBar}
        onClickCloseButton={handleOnClickCloseSideBar}
        focusRef={sideBarRef}
      >
        <ImageDetails
          image={selectedImage}
          onClickDelete={handleOnClickDelete}
          onClickFavorite={handleOnClickFavorite}
        />
      </SideBar>
    </div>
  );
}

export default Gallery;
