import Link from "next/link";
import { Box, Heading, Image, Stack, Text } from "grommet";

export default function CoolStack({
  title,
  anchor,
  imageSrc,
  objectPosition,
  link,
  animation,
}) {
  return (
    <Link href={link}>
      <Stack
        anchor={anchor || "bottom"}
        style={{ cursor: "pointer" }}
        margin={{ bottom: "large" }}
      >
        <Box
          height="medium"
          width="100%"
          overflow="hidden"
          animation={animation || "fadeIn"}
          hoverIndicator={{ opacity: 0.5 }}
        >
          <Image
            fill="horizontal"
            fit="cover"
            src={imageSrc}
            style={{ objectPosition: objectPosition || "center left" }}
          />
        </Box>
        <Box background="rgba(0, 0, 0, 0.3)">
          <Heading
            color="rgba(255, 255, 255, 0.8)"
            margin="large"
            textAlign="center"
          >
            {title}
          </Heading>
        </Box>
      </Stack>
    </Link>
  );
}
