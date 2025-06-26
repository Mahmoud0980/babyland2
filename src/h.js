 <Swiper loop={true} pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper" ></Swiper>


 import { Box,Container,Divider, Stack,Typography,useMediaQuery, useTheme,} from "@mui/material";
  import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
  import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
  import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
  import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
  
  const IconSection = () => {
    const theme = useTheme();
    return (
      <Container
        sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
      >
        <Stack
          divider={
            useMediaQuery("(min-width:600px)") ? (
              <Divider orientation="vertical" flexItem />
            ) : null
          }
          sx={{ flexWrap: "wrap" }}
          direction={"row"}
          alignItems={"center"}
        >
          <MyBox
            icon={<ElectricBoltIcon fontSize="large" />}
            title={"Fast Delivery"}
            subTitle={"Start from $10"}
          />
          <MyBox
            icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
            title={"Money Guarantee"}
            subTitle={"7 Days Back"}
          />
          <MyBox
            icon={<AccessAlarmOutlinedIcon fontSize="large" />}
            title={"365 Days"}
            subTitle={"For free return"}
          />
          <MyBox
            icon={<CreditScoreOutlinedIcon fontSize="large" />}
            title={"Payment"}
            subTitle={"Secure system"}
          />
        </Stack>
      </Container>
    );
  };
  
  export default IconSection;
  
  // eslint-disable-next-line react/prop-types
  const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          gap: 3,
  
          py: 1.6,
          justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        }}
      >
        {icon}
  
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography
            sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
            variant="body1"
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    );
  };
  



  import { Box,Button,Container, Link, Stack, Typography, useTheme, } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
//import SwiperCore, { Pagination } from "swiper/core"; // قم بتحديث الاستيراد لـ Pagination
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import IconSection from "./IconSection";
Swiper.use([Pagination]);

const mySlider = [
{ text: "Boy", link: "./images/image6.jpg" },
{ text: "Girl", link: "./images/image8.jpg" },
];

const Hero = () => {
const theme = useTheme();
return (
<Container>
<Box sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }} >

handlebars
Copy
      <Swiper loop={true} pagination={{ dynamicBullets: true, }}>
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link} className="parent-slider">
              <img src={item.link} alt="" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  },

                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#222",
                  }}
                  variant="h5"
                >
                  LIFESTYLE COLLECTION
                </Typography>

                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    my: 1,
                  }}
                  variant="h3"
                >
                  {item.text}
                </Typography>

                <Stack
                  sx={{
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography color={"#333"} mr={1} variant="h4">
                    SALE UP TO
                  </Typography>
                  <Typography color={"#D23F57"} variant="h4">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src=".//images/banner-17.jpg" alt="" />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography variant="h6"sx={{ color: "#2B3445", lineHeight: "16px", mt: 1,}}>
              SUMMER
            </Typography>
            <Typography variant="h6" sx={{ color: "#2B3445", }} >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="./images/banner-16.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
                fontWeight: 300,
              }}
            >
              Boys
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              Tools &
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              Toys
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": { color: "#D23F57", },
              }}
              href="#" underline="none">
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>

    <IconSection />
  </Container>
);
};

export default Hero;