import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section
} from '@react-email/components';
import * as React from 'react';

interface Props {
  validationLink?: string;
}

export const Email = ({ validationLink }: Props) => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Preview>Your login link for Lime.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Your login link for Lime</Heading>
        <Section style={buttonContainer}>
          <Button pY={11} pX={23} style={button} href={validationLink}>
            Login to Lime
          </Button>
        </Section>
        <Hr style={hr} />
        <Link href="http://localhost:3000" style={reportLink}>
          Lime
        </Link>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Poppins'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px'
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0'
};

const buttonContainer = {
  padding: '27px 0 27px'
};

const button = {
  backgroundColor: '#000',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block'
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc'
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px'
};
