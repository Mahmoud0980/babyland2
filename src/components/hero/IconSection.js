import { Container, Row, Col } from 'react-bootstrap';
import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LightningFill, ShieldCheck, Alarm, CreditCard } from 'react-bootstrap-icons';

const IconSection = () => {
  const theme = useTheme();
  
  return (
    <Container className="mt-3" style={{ backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff' }}>
      <Stack
        sx={{ flexWrap: 'wrap' }}
        direction="row"
        alignItems="center"
      >
        <MyBox
          icon={<LightningFill size={24} />}
          title="Fast Delivery"
          subTitle="Start from $10"
        />
        <MyBox
          icon={<ShieldCheck size={24} />}
          title="Money Guarantee"
          subTitle="7 Days Back"
        />
        <MyBox
          icon={<Alarm size={24} />}
          title="365 Days"
          subTitle="For free return"
        />
        <MyBox
          icon={<CreditCard size={24} />}
          title="Payment"
          subTitle="Secure system"
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  
  return (
    <Row className="align-items-center py-2" style={{ justifyContent: useMediaQuery('(min-width:600px)') ? 'center' : 'left' }}>
      <Col xs={12} md={6} className="d-flex align-items-center">
        {icon}
        <div>
          <Typography variant="body1">{title}</Typography>
          <Typography style={{ fontWeight: 300, color: theme.palette.text.secondary }} variant="body1">
            {subTitle}
          </Typography>
        </div>
      </Col>
      {useMediaQuery('(min-width:600px)') && <Col md={1}><Divider orientation="vertical" flexItem /></Col>}
    </Row>
  );
};