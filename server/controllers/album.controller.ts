import { User, Album } from "../models/schema";
import { Context } from "koa";
import { IAlbumType } from '../types/AlbumType';
import { ObjectId } from "mongodb";

export const postAlbum = async (ctx: Context) => {
  console.log('postAlbum')
  // should receive userId and album
  console.log('request album',ctx.request.body?.album)
  try {
    const userId = ctx.request.body?.userId;
    const album = <IAlbumType>ctx.request.body?.album;
    if (!userId || !album ) {
      throw new Error('Missing user input.')
    }
    // console.log("The album received is: ", album);

    // Either create the album on the user or update it if it already exists.
    // Existing albums will have a populated MongoDB ID.
    if (!album.id) {
      // if album id is not available
      const user = await User.findOne({ _id:  new ObjectId(userId.toString())});
      const newAlbum = new Album(album);
      if(!user || Object.keys(user).length === 0) throw new Error('No user found')
      console.log(newAlbum, 'controller')
      user.albums.push(newAlbum as IAlbumType);
      // add this to synchronise id and _id (generated by MongoDB)
      // to test if this works
      newAlbum.id = newAlbum._id
      user.save();
      // return value is not used in frontend ?
      ctx.body = newAlbum._id;
      ctx.status=201;
    } else {     
      // if album id is already available 
      const user = await User.findOne({ _id:  new ObjectId(userId.toString()) });
      if(!user || Object.keys(user).length === 0) throw new Error('No user found')
    
      user.albums.forEach((el, index) => {
        console.log(album.id, el._id.valueOf())
        console.log(album.id === el._id.valueOf())
        
        if (album!.id === el._id.valueOf()) {
          user!.albums[index] = {...album, _id: new ObjectId(album.id), favorite: !user.albums[index].favorite}
          
          console.log(album)
        }
          // console.log("Searching for existing album, found: ", user!.albums[index]);
        })
        user.save();
        ctx.body = user.albums
        ctx.status = 201;
      }
      
  } catch (err) {
    console.log("Error in server postAlbum: ", err);
    ctx.status = 400;
  }
};


export const deleteAlbums = async (ctx:Context) => {
  try {
    const userId = ctx.request.body?.userId;
    if(!userId) throw new Error('missing user details')
    
    const user = await User.findOne({ _id: new ObjectId(userId.toString()) });
    
    if(!user || Object.keys(user).length === 0) throw new Error('User not found')
    user.albums = [];
    user.save();
    
    ctx.status = 204;
    console.log(`User ${userId} albums removed`);
  } catch (err) {
    console.log("Error in the server deleteAlbum: ", err);
    ctx.status = 500;
  }
}

// not implemented by author
export const getSharedAlbums = (ctx:Context) => {
  // logic to get shared albums 
}
