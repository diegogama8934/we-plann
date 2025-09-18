"use client";
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export function HomeQuickActions() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold">Balance de gastos</h2>

      <div className="flex gap-4">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Movimiento
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            component={Link}
            href="./movements/create"
            onClick={handleClose}
            sx={{ color: 'success.main' }}
          >
            Ingreso
          </MenuItem>
          <MenuItem
            component={Link}
            href="./movements/"
            onClick={handleClose}
            sx={{ color: 'error.main' }}
          >
            Gasto
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}