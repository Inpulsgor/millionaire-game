import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';
import gameSelectors from '../../redux/gameSelectors';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import ScoreDisplay from './ScoreDisplay/ScoreDisplay';
import useWindowWidth from '../../helpers/useWindowWidth';
import IntTheme from '../../typescriptExports/IntTheme';
import scores from '../../scores.json';
import { MenuContainer, MenuList } from './Menu.styles';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [wideScreen, setWideScreen] = useState(false);

  const { currentIdx } = useSelector(gameSelectors);

  const width = useWindowWidth();

  useEffect(() => {
    if (width >= 1024) {
      setWideScreen(true);
      setOpen(true);
    } else {
      setWideScreen(false);
      setOpen(false);
    }
  }, [width]);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const scoresArray = scores.rewards.slice(1);
  const { colors } = useContext<IntTheme>(ThemeContext);

  const scoresStatus = scoresArray.map((_, idx) => {
    if (idx === currentIdx) {
      return {
        fill: colors.orange100,
        stroke: colors.orange100,
      };
    }
    if (idx < currentIdx && idx >= 0) {
      return {
        fill: colors.black40,
        stroke: colors.black40,
      };
    }
    if (idx > currentIdx) {
      return {
        fill: colors.black100,
        stroke: colors.black40,
      };
    }

    return {
      fill: colors.black100,
      stroke: colors.black40,
    };
  });

  return (
    <>
      {!wideScreen ? (
        <>
          <BurgerMenu open={open} handleClick={handleMenuOpen} />

          <MenuContainer open={open}>
            <MenuList>
              {scoresStatus.map((status, idx) => (
                <ScoreDisplay
                  key={idx}
                  stroke={status.stroke}
                  fill={status.fill}
                  score={scoresArray[idx]}
                />
              ))}
            </MenuList>
          </MenuContainer>
        </>
      ) : (
        <MenuList>
          {scoresStatus.map((status, idx) => (
            <ScoreDisplay
              key={idx}
              stroke={status.stroke}
              fill={status.fill}
              score={scoresArray[idx]}
            />
          ))}
        </MenuList>
      )}
    </>
  );
};

export default Menu;
