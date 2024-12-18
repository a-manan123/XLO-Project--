import { Box, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import playstore from "./Images/playstore.png";
import playStoreapple from "./Images/appstore.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { MdOutlinePlayCircle } from "react-icons/md";
const Footer2 = () => {
  return (
    <div>
      <Box fontSize="12px" bg="#ebeeef" border="1px solid #ebeeef" pb="40px">
        <SimpleGrid columns={[1, 2, 4, 5]} spacing="20px" mx="2rem" my="1rem">
          <Box color="grey">
            <Box pb="10px">
              <Text fontSize="15px" as="b" color="black">
                POPULAR CATEGORIES
              </Text>
            </Box>
            <Box>
              <Link to="#">Cars</Link>
            </Box>
            <Box>
              <Link to="#">Flat for rent</Link>
            </Box>
            <Box>
              <Link to="#">Mobile Phones</Link>
            </Box>
            <Box>
              <Link to="#">Jobs</Link>
            </Box>
          </Box>
          <Box color="grey">
            <Box pb="10px">
              <Text fontSize="15px" as="b" color="black">
                TRENDING LOCATIONS
              </Text>
            </Box>
            <Box>
              <Link to="#">Lahore</Link>
            </Box>
            <Box>
              <Link to="#">Islamabad</Link>
            </Box>
            <Box>
              <Link to="#">Karachi</Link>
            </Box>
            <Box>
              <Link to="#">Rawalpindi</Link>
            </Box>
          </Box>
          <Box color="grey">
            <Box pb="10px">
              <Text fontSize="15px" as="b" color="black">
                ABOUT US
              </Text>
            </Box>
            <Box>
              <Link to="#">About XLO Group</Link>
            </Box>
            <Box>
              <Link to="#">XLO blogs</Link>
            </Box>
            <Box>
              <Link to="#">Contact Us</Link>
            </Box>
            <Box>
              <Link to="#">XLO for businesses</Link>
            </Box>
          </Box>
          <Box color="grey">
            <Box pb="10px">
              <Text fontSize="15px" as="b" color="black">
                XLO
              </Text>
            </Box>
            <Box>
              <Link to="#">Help</Link>
            </Box>
            <Box>
              <Link to="#">Sitemap</Link>
            </Box>
            <Box>
              <Link to="#">Terms of use</Link>
            </Box>
            <Box>
              <Link to="#">Privacy Policy</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              {/* Folloe us section */}

              <Text fontSize="15px" as="b">
                FOLLOW US
              </Text>
              <Box mt="3px" mb="35px">
                <Flex gap="2">
                  <Link to="https://www.facebook.com/olxindia/">
                    <TiSocialFacebookCircular size="20px" color="#557477" />
                  </Link>
                  <Link to="https://www.instagram.com/olx_india/">
                    <RiInstagramLine size="20px" color="#557477" />
                  </Link>
                  <Link to="https://twitter.com/OLX_India">
                    <TiSocialTwitterCircular size="20px" color="#557477" />
                  </Link>
                  <Link to="https://www.youtube.com/user/OLXInTv">
                    <MdOutlinePlayCircle size="20px" color="#557477" />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  {/* <Link to="https://play.google.com/store/apps/details?id=com.olx.southasia"> */}
                  <Image
                    width="80px"
                    height="30px"
                    src={playstore}
                    alt="phone"
                  />
                  {/* </Link> */}

                  {/* <Link to="https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8"> */}
                  <Image
                    height="30px"
                    px="5px"
                    width="90px"
                    src={playStoreapple}
                    alt="phone"
                  />
                  {/* </Link> */}
                </Flex>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        bg="
#002f34"
      >
        {" "}
        <Box mx="2rem" display="flex" pt="1rem" pb="1rem">
          {/* <Text color="white">
            Other Countries Pakistan - South Africa - Indonesia
          </Text> */}
          <Spacer />
          <Text color="white" fontSize="small">
            <span style={{ fontWeight: 500 }}>
              Free Classifieds in Pakistan .
            </span>
            © 2006-2024 XLO
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer2;
