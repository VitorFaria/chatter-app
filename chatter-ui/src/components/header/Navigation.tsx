import { Box, Button } from "@mui/material"
import Router from "../Routes";
import { IPage } from "../../interfaces/page.interface";

interface INavigationProps {
  pages: IPage[];
}

const Navigation = ( { pages}: INavigationProps ) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          onClick={() => Router.navigate(page.path)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  )
}

export default Navigation;