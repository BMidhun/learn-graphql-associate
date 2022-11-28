export interface IAuthor{
    id:string,
    name: string,
    photo:string
  }
  
export interface ITrack {
    id: string,
    title:string,
    thumbnail: string,
    modulesCount: number,
    length: number,
    author: IAuthor
  }