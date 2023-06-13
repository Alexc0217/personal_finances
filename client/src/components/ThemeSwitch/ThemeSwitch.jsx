import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { asyncToggleTheme } from "../../store/reducers/themeSlice";
import { useSelector, useDispatch } from "react-redux";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <IconButton onClick={() => dispatch(asyncToggleTheme())}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon/>}
    </IconButton>
  );
};

