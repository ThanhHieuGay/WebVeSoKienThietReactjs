import { ButtonGroup, Button, Container } from 'react-bootstrap';

export const RegionTabs = ({ selectedRegion, onSelectRegion }) => {
  return (
    <Container className="my-4">
      <div className="d-flex justify-content-center">
        <ButtonGroup size="lg">
          <Button
            variant={selectedRegion === 'nam' ? 'danger' : 'outline-danger'}
            onClick={() => onSelectRegion('nam')}
            className="px-5 fw-bold"
          >
            MIỀN NAM
          </Button>
          <Button
            variant={selectedRegion === 'trung' ? 'danger' : 'outline-danger'}
            onClick={() => onSelectRegion('trung')}
            className="px-5 fw-bold"
          >
            MIỀN TRUNG
          </Button>
          <Button
            variant={selectedRegion === 'bac' ? 'danger' : 'outline-danger'}
            onClick={() => onSelectRegion('bac')}
            className="px-5 fw-bold"
          >
            MIỀN BẮC
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};