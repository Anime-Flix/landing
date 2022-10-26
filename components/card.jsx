import { Card, Col, Text } from "@nextui-org/react";
import Link from 'next/link'

const CardComponent = ({imageURL, title, action, linkURL, cred}) => (
  <Link href={linkURL}>
    <Card isPressable style={{width: 383.3}}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {action}
          </Text>
          <Text h4 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={imageURL}
        objectFit="cover"
        width="100%"
        height={340}
        style={{opacity: .5}}
        alt="Card image background"
      />
      <Card.Footer>
        <Text b>
          {cred}
        </Text>
      </Card.Footer>
    </Card>
  </Link>
);

export default CardComponent
