export interface IAuthor{
    id:string,
    name: string,
    photo:string
  }

export interface IModule {
  id:string,
  length:number,
  title:string
}
  
export interface ITrack {
    id: string,
    title:string,
    description:string,
    thumbnail: string,
    modulesCount: number,
    length: number,
    author: IAuthor,
    modules: IModule[],
    numberOfViews:number
  }