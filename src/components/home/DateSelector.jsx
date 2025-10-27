import { Button, Container } from 'react-bootstrap';

export const DateSelector = ({ currentDate, onDateChange }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const today = new Date();
  const isToday = currentDate.toDateString() === today.toDateString();

  const handleNextDay = () => {
    if (isToday) {
      alert('🔄 Đang cập nhật kết quả ngày mai!');
      return;
    }
    onDateChange(1);
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button
          variant="outline-secondary"
          onClick={() => onDateChange(-1)}
        >
          « Hôm qua
        </Button>

        <span className="fs-5 fw-bold text-danger">
          {formatDate(currentDate)}
        </span>

        <Button
          variant={isToday ? 'outline-secondary' : 'primary'}
          onClick={handleNextDay}
        >
          Ngày mai »
        </Button>
      </div>
    </Container>
  );
};
