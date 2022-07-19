import { Album } from 'app/album';
export interface Product {
    id:number;
    artistName: string;
    albumName: string;
    album: Album;
}
