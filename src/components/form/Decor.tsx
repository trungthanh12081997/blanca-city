import { Box } from "@mui/material";

const Decor = ({ number = 2 }: { number: number }) => {
  return (
    <Box className="xl:w-[39%] md:w-full lg:w-full w-[180%] max-h-[500px] lg:h-[75%] md:h-1/2 h-3/10 absolute right-0 bottom-0">
      <img src={`/decor${number}.png`} className="w-full h-full" />
    </Box>
  );
};

export default Decor;