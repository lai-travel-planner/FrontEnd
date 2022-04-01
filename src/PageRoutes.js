import PageLayout from "./PageLayout";
import { List, Button, Row, Col } from "antd";
import {
  Box,
  // Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const data = [
  {
    title: "Basílica de la Sagrada Família",
    description:
      "The Basílica de la Sagrada Família stands in the northern part of the city, dominating its surroundings with its 18 spindly towers soaring high above all the other buildings.",
  },
  {
    title: "Barri Gòtic (Gothic Quarter)",
    description:
      "The Gothic Quarter has been the spiritual and secular center of the city. Relics of ancient Roman buildings are still found here, but the Middle Ages are best represented by the historic monuments packed into this quarter.",
  },
  {
    title: "Casa Milà (La Pedrera)",
    description:
      "Casa Milà is also affectionately known as La Pedrera, which translates to The Stone Quarry because the building resembles an open quarry.",
  },
  {
    title: "Parc Güell: Gaudí's Surrealist Park",
    description:
      "The Park Güell includes 12 acres of landscaped gardens featuring Surrealist architectural elements created by Antoni Gaudí and eight acres of pristine woodlands.",
  },
];

const RoutesPage = () => {

  const center = {  lat: 40.71, lng: -73.96  }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const waypointsRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }

      /** waypoints array*/
    const waypts = [];
    const checkboxArray = waypointsRef.current;
  
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true,
        });
      }
    }


    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      waypoints: waypts,
      optimizeWaypoints: true,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }



  return (
    <PageLayout>
      <Row gutter={24}>
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={
                    <>
                      <p>{item.description}</p>
                      <Row gutter={8}>
                        <Col>
                          <Button type="default">Show on map</Button>
                        </Col>
                        <Col>
                          <Button type="danger">Delete</Button>
                        </Col>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <div
            style={{
              display: "flex",
              background: "#ddd",
              fontSize: "20px",
              fontWeight: "bold",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <Flex
              position='relative'
              flexDirection='column'
              alignItems='center'
              h='100vh'
              w='100vw'
            >
              <Box position='center' left={0} top={0} h='100%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                  onLoad={map => setMap(map)}
                >
                  <Marker position={center} />
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              </Box>
              <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
              >
                <HStack spacing={2} justifyContent='space-between'>
                  <Box flexGrow={1}>
                    <Autocomplete>
                      <Input type='text' placeholder='Origin' ref={originRef} />
                    </Autocomplete>
                  </Box>

                  <Box flexGrow={1}>
                    {/* <Autocomplete>
                      <Input type='text' placeholder='Origin' ref={waypointsRef} />
                    </Autocomplete> */}
                    <select multiple id="waypoints" ref={waypointsRef}>
                      <option value="Columbia University, New York, NY">Columbia University</option>
                      <option value="Empire State">Empire State</option>
                      <option value="ChIJ09ZGju5YwokRXOcNC23JRwk">Daniel_ID</option>
                      <option value="60 E 65th St, New York, NY 10065, United States">Daniel_address</option>
                      <option value="fargo, nd">Fargo</option>
                      <option value="calgary, ab">Calgary</option>
                      <option value="spokane, wa">Spokane</option>
                    </select>
                  </Box>

                  <Box flexGrow={1}>
                    <Autocomplete>
                      <Input
                        type='text'
                        placeholder='Destination'
                        ref={destiantionRef}
                      />
                    </Autocomplete>
                  </Box>

                  <ButtonGroup>
                    <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                      Calculate Route
                    </Button>
                    <IconButton
                      aria-label='center back'
                      icon={<FaTimes />}
                      onClick={clearRoute}
                    />
                  </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                  <Text>Distance: {distance} </Text>
                  <Text>Duration: {duration} </Text>
                  <IconButton
                    aria-label='center back'
                    icon={<FaLocationArrow />}
                    isRound
                    onClick={() => {
                      map.panTo(center)
                      map.setZoom(15)
                    }}
                  />
                </HStack>
              </Box>
            </Flex>
          </div>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default RoutesPage;
