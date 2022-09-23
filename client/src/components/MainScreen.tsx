import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import AlbumListScreen from "./screenComponents/AlbumListScreen";
import ContactsScreen from "./screenComponents/ContactsScreen";
import FavoritesScreen from "./screenComponents/FavoritesScreen";
import AlbumViewScreen from "./screenComponents/AlbumViewScreen";
import { Fab } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { toggleAlbumEdit } from "../redux/actions";
import { AlbumType, ScreenState } from "../customTypes";
import AlbumEditScreen from "./screenComponents/AlbumEditScreen";

function MainScreen(): ReactElement {

  const dispatch = useAppDispatch();

  const screenState: ScreenState = useAppSelector(state => state.screenReducer);
  const screensList: ReactElement[] = [<AlbumListScreen />, <ContactsScreen />, <FavoritesScreen />]

  const screen = screenState.editAlbum ? <AlbumEditScreen/> : screenState.viewAlbum ? <AlbumViewScreen {...screenState.activeAlbum} /> : screensList[screenState.screen]

  return (
    <div className="h-full flex flex-col justify-center items-center sm:bg-customPurple sm:px-20">
      {screen}
      { !screenState.viewAlbum && !screenState.editAlbum
      ? <Fab size="large" color="primary" style={{position: 'fixed', bottom: '6rem', right: '3rem'}}>
        <IconButton onClick={() => dispatch(toggleAlbumEdit())}>
          <AddIcon />
        </IconButton>
      </Fab>
      : <></>
      }
    </div>
  );
}

export default MainScreen;
