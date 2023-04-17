import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchImages } from './galleryAPI';
import { AppState } from '@/store';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface IImage {
  id: string;
  url: string;
  filename: string;
  description?: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  dimensions: {
    height: number;
    width: number;
  };
  resolution: {
    height: number;
    width: number;
  };
  sizeInBytes: number;
  sharedWith: IUser[];
  favorited: boolean;
}

export interface GalleryState {
  images: IImage[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: GalleryState = {
  images: [],
  status: 'idle',
  error: null,
};

export const fetchImagesAsync = createAsyncThunk(
  'gallery/fetchImages',
  async () => {
    const response = await fetchImages();
    return response.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    deleteImage: (state, action) => {
      //TODO: Add logic to delete image
      console.log(state, action);
    },
    favoriteImage: (state, action) => {
      //TODO: Add logic to add/remove favorite
      console.log(state, action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImagesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImagesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImagesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { deleteImage, favoriteImage } = gallerySlice.actions;

export const getAllImages = (state: AppState) => state.gallery.images;

export const getFavoritedImages = (state: AppState) =>
  state.gallery.images.filter((image) => image.favorited === true);

export const getImageById = (state: AppState, imageId: string) =>
  state.gallery.images.find((image) => image.id === imageId);

export default gallerySlice.reducer;
