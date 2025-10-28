import { ButtonGroup, Button, Container } from 'react-bootstrap';

export const RegionTabs = ({ selectedRegion, onSelectRegion }) => {
  const btn = (key, label) => (
    <Button
      onClick={() => onSelectRegion(key)}
      className="px-5 fw-bold"
      style={{
        backgroundColor: selectedRegion === key ? '#C8102E' : 'transparent',
        borderColor: '#C8102E',
        color: selectedRegion === key ? '#fff' : '#C8102E'
      }}
    >
      {label}
    </Button>
  );

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-center">
        <ButtonGroup size="lg">
          {btn('nam', 'MIỀN NAM')}
          {btn('trung', 'MIỀN TRUNG')}
          {btn('bac', 'MIỀN BẮC')}
        </ButtonGroup>
      </div>
    </Container>
  );
};
